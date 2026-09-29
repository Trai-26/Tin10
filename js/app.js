// Ứng dụng Học tập Tin Học 10 (Interactive E-Learning App)

// Trạng thái ứng dụng (State)
let AppState = {
  currentTab: 'home',
  currentTopicIndex: 0,
  currentLessonIndex: 0,
  currentFlashcardIndex: 0,
  flashcardList: [],
  currentQuizIndex: 0,
  quizAnswers: {},
  userXP: 100,
  streakDays: 3,
  completedLessons: new Set(),
  currentExerciseId: 'ex-1',
  // Hệ thống Khảo thí & Thi cử
  currentExamId: null,
  activeExamCategory: 'all',
  examActiveIndex: 0,
  examAnswers: {},
  examFlags: new Set(),
  examTimerInterval: null,
  examSecondsRemaining: 0,
  examTotalSeconds: 0
};

// Khởi tạo ứng dụng khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  loadUserData();
  initTheme();
  renderHomeTopics();
  renderTextbookSidebar();
  loadLesson(0, 0);
  initFlashcards();
  renderGlossaryGrid();
  initQuiz();
  initCodingPlayground();
  initExamSuite();
  initMobileMenu();
});

/* ==========================================================================
   1. QUẢN LÝ THEME & TRẠNG THÁI NGƯỜI DÙNG (LOCAL STORAGE)
   ========================================================================== */

function initTheme() {
  const savedTheme = localStorage.getItem('tinhoc10_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('tinhoc10_theme', isDark ? 'dark' : 'light');
    });
  }
}

function loadUserData() {
  const savedXP = localStorage.getItem('tinhoc10_xp');
  if (savedXP) {
    AppState.userXP = parseInt(savedXP, 10);
  }
  const savedCompleted = localStorage.getItem('tinhoc10_completed_lessons');
  if (savedCompleted) {
    try {
      AppState.completedLessons = new Set(JSON.parse(savedCompleted));
    } catch (e) {
      console.error(e);
    }
  }
  updateXPDisplay();
}

function addXP(amount) {
  AppState.userXP += amount;
  localStorage.setItem('tinhoc10_xp', AppState.userXP);
  updateXPDisplay();
  
  // Hiệu ứng pháo hoa nhẹ khi nhận XP
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 }
    });
  }
}

function updateXPDisplay() {
  const xpEl = document.getElementById('user-xp');
  const xpMobileEl = document.getElementById('user-xp-mobile');
  if (xpEl) xpEl.textContent = AppState.userXP;
  if (xpMobileEl) xpMobileEl.textContent = AppState.userXP;
}

function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

/* ==========================================================================
   2. ĐIỀU HƯỚNG TAB CHÍNH (NAVIGATION)
   ========================================================================== */

function switchTab(tabId) {
  AppState.currentTab = tabId;

  // Ẩn tất cả các tab
  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.add('hidden');
  });

  // Hiện tab được chọn
  const activeSection = document.getElementById(`tab-${tabId}`);
  if (activeSection) {
    activeSection.classList.remove('hidden');
  }

  // Cập nhật trạng thái active cho nút tab
  document.querySelectorAll('.nav-tab').forEach(btn => {
    if (btn.getAttribute('data-target') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Đóng mobile menu nếu đang mở
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   3. TRANG CHỦ (HOME TOPICS)
   ========================================================================== */

function renderHomeTopics() {
  const container = document.getElementById('home-topics-grid');
  if (!container) return;

  container.innerHTML = COURSE_DATA.topics.map((topic, tIdx) => `
    <div onclick="selectTopicFromHome(${tIdx})" class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-brand-500 transition cursor-pointer group">
      <div class="flex items-start justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white bg-gradient-to-r ${topic.color}">
          ${topic.code}
        </span>
        <span class="text-xs text-slate-400 font-medium">${topic.lessons.length} bài học</span>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition flex items-center gap-2 mb-2">
        <i class="${topic.icon} text-lg" style="color: ${topic.accent}"></i>
        ${topic.title}
      </h3>
      <p class="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">${topic.desc}</p>
      
      <div class="space-y-1.5 border-t border-slate-100 dark:border-slate-700/60 pt-3">
        ${topic.lessons.map((lesson) => `
          <div class="flex items-center text-xs text-slate-600 dark:text-slate-300">
            <i class="fa-solid fa-play text-[10px] text-brand-500 mr-2"></i>
            <span class="truncate">${lesson.title}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function selectTopicFromHome(topicIdx) {
  AppState.currentTopicIndex = topicIdx;
  AppState.currentLessonIndex = 0;
  loadLesson(topicIdx, 0);
  switchTab('textbook');
}

/* ==========================================================================
   4. SÁCH GIÁO KHOA ONLINE (ONLINE TEXTBOOK)
   ========================================================================== */

function renderTextbookSidebar() {
  const container = document.getElementById('textbook-sidebar-list');
  if (!container) return;

  let totalLessons = 0;
  let html = '';

  COURSE_DATA.topics.forEach((topic, tIdx) => {
    totalLessons += topic.lessons.length;
    html += `
      <div class="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden mb-2">
        <div class="p-3 bg-slate-100/70 dark:bg-slate-700/50 flex items-center justify-between font-bold text-xs text-slate-700 dark:text-slate-200">
          <span class="flex items-center gap-2">
            <i class="${topic.icon}" style="color: ${topic.accent}"></i> ${topic.code}: ${topic.title}
          </span>
        </div>
        <div class="p-1 space-y-0.5 bg-white dark:bg-slate-800">
          ${topic.lessons.map((lesson, lIdx) => {
            const isCompleted = AppState.completedLessons.has(lesson.id);
            const isActive = (tIdx === AppState.currentTopicIndex && lIdx === AppState.currentLessonIndex);
            return `
              <button onclick="loadLesson(${tIdx}, ${lIdx})" 
                      class="lesson-nav-btn w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition ${isActive ? 'bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'}">
                <span class="truncate">${lesson.title}</span>
                <span class="shrink-0 ml-2">
                  ${isCompleted ? '<i class="fa-solid fa-circle-check text-emerald-500"></i>' : '<i class="fa-regular fa-circle text-slate-300"></i>'}
                </span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  const countBadge = document.getElementById('lesson-count-badge');
  if (countBadge) countBadge.textContent = `${totalLessons} bài học`;

  // Search filter
  const searchInput = document.getElementById('lesson-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.lesson-nav-btn').forEach(btn => {
        const text = btn.textContent.toLowerCase();
        btn.style.display = text.includes(term) ? 'flex' : 'none';
      });
    });
  }
}

function loadLesson(topicIdx, lessonIdx) {
  AppState.currentTopicIndex = topicIdx;
  AppState.currentLessonIndex = lessonIdx;

  const topic = COURSE_DATA.topics[topicIdx];
  const lesson = topic.lessons[lessonIdx];

  document.getElementById('reader-topic-code').textContent = `${topic.code}: ${topic.title}`;
  document.getElementById('reader-duration').innerHTML = `<i class="fa-solid fa-book-bookmark text-brand-500"></i> ${lesson.page || 'SGK KNTT'}`;
  document.getElementById('reader-tag').textContent = lesson.tag;
  document.getElementById('reader-title').textContent = lesson.title;

  // Warmup (Khởi động)
  let warmupEl = document.getElementById('reader-warmup');
  if (!warmupEl) {
    const parentContainer = document.getElementById('reader-objectives').parentElement;
    warmupEl = document.createElement('div');
    warmupEl.id = 'reader-warmup';
    warmupEl.className = 'p-4 bg-amber-50/80 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800/50 mb-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed';
    parentContainer.parentElement.insertBefore(warmupEl, parentContainer);
  }
  warmupEl.innerHTML = `
    <div class="font-bold text-amber-800 dark:text-amber-300 text-xs mb-1 flex items-center gap-1.5 uppercase tracking-wide">
      <i class="fa-solid fa-rocket text-amber-500"></i> KHỞI ĐỘNG (SGK ${lesson.page || ''})
    </div>
    <p>${lesson.warmup || 'Cùng khám phá các nội dung thú vị của bài học!'}</p>
  `;

  // Objectives
  const objList = document.getElementById('reader-objectives');
  objList.innerHTML = lesson.objectives.map(obj => `
    <li class="flex items-start gap-2">
      <input type="checkbox" class="mt-1 rounded text-brand-600 focus:ring-brand-500 cursor-pointer">
      <span>${obj}</span>
    </li>
  `).join('');

  // Body content
  document.getElementById('reader-content').innerHTML = lesson.content;

  // Update Completed Button state
  const compBtn = document.getElementById('btn-complete-lesson');
  if (AppState.completedLessons.has(lesson.id)) {
    compBtn.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-300"></i> Đã hoàn thành (+50 XP)';
    compBtn.classList.replace('bg-emerald-600', 'bg-slate-600');
  } else {
    compBtn.innerHTML = '<i class="fa-solid fa-check-circle"></i> Đánh dấu đã học xong (+50 XP)';
    compBtn.classList.replace('bg-slate-600', 'bg-emerald-600');
  }

  // Refresh active indicator in sidebar
  renderTextbookSidebar();
}

function markLessonCompleted() {
  const currentTopic = COURSE_DATA.topics[AppState.currentTopicIndex];
  const currentLesson = currentTopic.lessons[AppState.currentLessonIndex];

  if (!AppState.completedLessons.has(currentLesson.id)) {
    AppState.completedLessons.add(currentLesson.id);
    localStorage.setItem('tinhoc10_completed_lessons', JSON.stringify(Array.from(AppState.completedLessons)));
    addXP(50);
    loadLesson(AppState.currentTopicIndex, AppState.currentLessonIndex);
  }
}

function navigateLesson(direction) {
  const currentTopic = COURSE_DATA.topics[AppState.currentTopicIndex];
  let nextLessonIdx = AppState.currentLessonIndex + direction;

  if (nextLessonIdx >= 0 && nextLessonIdx < currentTopic.lessons.length) {
    loadLesson(AppState.currentTopicIndex, nextLessonIdx);
  } else if (direction > 0 && AppState.currentTopicIndex + 1 < COURSE_DATA.topics.length) {
    loadLesson(AppState.currentTopicIndex + 1, 0);
  } else if (direction < 0 && AppState.currentTopicIndex - 1 >= 0) {
    const prevTopic = COURSE_DATA.topics[AppState.currentTopicIndex - 1];
    loadLesson(AppState.currentTopicIndex - 1, prevTopic.lessons.length - 1);
  }
}

/* ==========================================================================
   5. THUẬT NGỮ & FLASHCARDS 3D
   ========================================================================== */

function initFlashcards() {
  AppState.flashcardList = [...COURSE_DATA.glossary];
  AppState.currentFlashcardIndex = 0;
  renderCurrentFlashcard();
}

function renderCurrentFlashcard() {
  const card = AppState.flashcardList[AppState.currentFlashcardIndex];
  if (!card) return;

  const cardInner = document.getElementById('flashcard-inner');
  if (cardInner) {
    document.getElementById('flashcard-container').classList.remove('flipped');
  }

  document.getElementById('fc-category').innerHTML = `${card.category} <span class="opacity-80 font-mono text-[11px] ml-1">(${card.pageRef || 'SGK KNTT'})</span>`;
  document.getElementById('fc-counter').textContent = `${AppState.currentFlashcardIndex + 1} / ${AppState.flashcardList.length}`;
  document.getElementById('fc-term').textContent = card.term;
  document.getElementById('fc-vietnamese').textContent = card.vietnamese;
  document.getElementById('fc-icon').className = card.icon;
  document.getElementById('fc-definition').textContent = card.definition;
  document.getElementById('fc-example').textContent = card.example;
}

function toggleActiveFlashcard() {
  const container = document.getElementById('flashcard-container');
  if (container) {
    container.classList.toggle('flipped');
  }
}

function nextFlashcard() {
  if (AppState.currentFlashcardIndex < AppState.flashcardList.length - 1) {
    AppState.currentFlashcardIndex++;
  } else {
    AppState.currentFlashcardIndex = 0; // Vòng lặp lại
  }
  renderCurrentFlashcard();
}

function prevFlashcard() {
  if (AppState.currentFlashcardIndex > 0) {
    AppState.currentFlashcardIndex--;
  } else {
    AppState.currentFlashcardIndex = AppState.flashcardList.length - 1;
  }
  renderCurrentFlashcard();
}

function shuffleFlashcards() {
  for (let i = AppState.flashcardList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [AppState.flashcardList[i], AppState.flashcardList[j]] = [AppState.flashcardList[j], AppState.flashcardList[i]];
  }
  AppState.currentFlashcardIndex = 0;
  renderCurrentFlashcard();
}

function filterFlashcards() {
  const category = document.getElementById('flashcard-category-select').value;
  if (category === 'all') {
    AppState.flashcardList = [...COURSE_DATA.glossary];
  } else {
    AppState.flashcardList = COURSE_DATA.glossary.filter(item => item.category === category);
  }
  AppState.currentFlashcardIndex = 0;
  renderCurrentFlashcard();
}

function markFlashcardKnown() {
  addXP(10);
  nextFlashcard();
}

function renderGlossaryGrid() {
  const container = document.getElementById('glossary-grid');
  if (!container) return;

  container.innerHTML = COURSE_DATA.glossary.map((item, idx) => `
    <div class="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition">
      <div class="flex items-center justify-between mb-2">
        <span class="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 dark:bg-brand-950/50 px-2 py-0.5 rounded">
          ${item.category} • ${item.pageRef || 'SGK KNTT'}
        </span>
        <i class="${item.icon} text-slate-400"></i>
      </div>
      <h4 class="font-bold text-base text-slate-900 dark:text-white">${item.term}</h4>
      <p class="text-xs text-brand-500 font-medium mb-2">${item.vietnamese}</p>
      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${item.definition}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   6. KHO TRẮC NGHIỆM TƯƠNG TÁC (QUIZ SYSTEM)
   ========================================================================== */

function initQuiz() {
  AppState.currentQuizIndex = 0;
  AppState.quizAnswers = {};
  renderQuizQuestion();
  updateQuizHeader();
}

function renderQuizQuestion() {
  const q = COURSE_DATA.quizzes[AppState.currentQuizIndex];
  if (!q) return;

  document.getElementById('quiz-card').classList.remove('hidden');
  document.getElementById('quiz-summary-box').classList.add('hidden');

  document.getElementById('quiz-topic-tag').innerHTML = `<i class="fa-solid fa-book-open mr-1"></i> ${q.lessonRef || q.topicId.toUpperCase()}`;
  document.getElementById('quiz-q-num').textContent = `Câu ${AppState.currentQuizIndex + 1}/${COURSE_DATA.quizzes.length}`;
  document.getElementById('quiz-question-text').textContent = q.question;

  const optionsContainer = document.getElementById('quiz-options-list');
  const userAnswer = AppState.quizAnswers[q.id];

  optionsContainer.innerHTML = q.options.map((opt, optIdx) => {
    let stateClass = '';
    let icon = '';

    if (userAnswer !== undefined) {
      if (optIdx === q.correct) {
        stateClass = 'correct font-bold';
        icon = '<i class="fa-solid fa-circle-check text-emerald-500 ml-auto"></i>';
      } else if (userAnswer === optIdx) {
        stateClass = 'wrong font-bold';
        icon = '<i class="fa-solid fa-circle-xmark text-rose-500 ml-auto"></i>';
      } else {
        stateClass = 'opacity-60 disabled';
      }
    }

    return `
      <div onclick="selectQuizAnswer(${optIdx})" 
           class="quiz-opt p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 text-sm font-medium cursor-pointer flex items-center justify-between ${stateClass}">
        <span>${opt}</span>
        ${icon}
      </div>
    `;
  }).join('');

  // Explanation
  const expBox = document.getElementById('quiz-explanation-box');
  const expText = document.getElementById('quiz-explanation-text');
  if (userAnswer !== undefined) {
    expBox.classList.remove('hidden');
    expText.textContent = q.explanation;
  } else {
    expBox.classList.add('hidden');
  }

  updateQuizHeader();
}

function selectQuizAnswer(optIdx) {
  const q = COURSE_DATA.quizzes[AppState.currentQuizIndex];
  if (AppState.quizAnswers[q.id] !== undefined) return; // Đã trả lời rồi không cho chọn lại

  AppState.quizAnswers[q.id] = optIdx;

  if (optIdx === q.correct) {
    addXP(20);
  }

  renderQuizQuestion();
}

function nextQuizQuestion() {
  if (AppState.currentQuizIndex < COURSE_DATA.quizzes.length - 1) {
    AppState.currentQuizIndex++;
    renderQuizQuestion();
  } else {
    showQuizSummary();
  }
}

function prevQuizQuestion() {
  if (AppState.currentQuizIndex > 0) {
    AppState.currentQuizIndex--;
    renderQuizQuestion();
  }
}

function updateQuizHeader() {
  const total = COURSE_DATA.quizzes.length;
  const answeredCount = Object.keys(AppState.quizAnswers).length;
  
  let correctCount = 0;
  COURSE_DATA.quizzes.forEach(q => {
    if (AppState.quizAnswers[q.id] === q.correct) {
      correctCount++;
    }
  });

  const liveScore = document.getElementById('quiz-live-score');
  const progressBar = document.getElementById('quiz-progress-bar');
  const progressText = document.getElementById('quiz-progress-text');
  const correctEl = document.getElementById('quiz-correct-count');

  if (liveScore) liveScore.textContent = `${correctCount} / ${total}`;
  if (progressBar) progressBar.style.width = `${((AppState.currentQuizIndex + 1) / total) * 100}%`;
  if (progressText) progressText.textContent = `Câu ${AppState.currentQuizIndex + 1} / ${total}`;
  if (correctEl) correctEl.textContent = correctCount;
}

function showQuizSummary() {
  document.getElementById('quiz-card').classList.add('hidden');
  const summaryBox = document.getElementById('quiz-summary-box');
  summaryBox.classList.remove('hidden');

  let correctCount = 0;
  COURSE_DATA.quizzes.forEach(q => {
    if (AppState.quizAnswers[q.id] === q.correct) {
      correctCount++;
    }
  });

  document.getElementById('final-score-display').textContent = `${correctCount} / ${COURSE_DATA.quizzes.length}`;
  const gradeText = document.getElementById('final-grade-text');

  if (correctCount >= 8) {
    gradeText.textContent = "Xuất sắc! Bạn nắm rất vững kiến thức Tin học 10.";
    if (typeof confetti === 'function') {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }
  } else if (correctCount >= 5) {
    gradeText.textContent = "Khá tốt! Hãy ôn lại các câu chưa đúng để đạt điểm tuyệt đối nhé.";
  } else {
    gradeText.textContent = "Bạn cần đọc lại phần Sách Online và lật Flashcards để bổ sung kiến thức!";
  }
}

function restartQuiz() {
  AppState.quizAnswers = {};
  AppState.currentQuizIndex = 0;
  renderQuizQuestion();
}

/* ==========================================================================
   7. PHÒNG LUYỆN CODE PYTHON TRỰC TIẾP (PYTHON PLAYGROUND & RUNNER)
   ========================================================================== */

function initCodingPlayground() {
  const select = document.getElementById('exercise-select');
  if (!select) return;

  select.innerHTML = COURSE_DATA.exercises.map(ex => `
    <option value="${ex.id}">${ex.title}</option>
  `).join('');

  loadExercise('ex-1');
}

function loadExercise(exId) {
  AppState.currentExerciseId = exId;
  const ex = COURSE_DATA.exercises.find(e => e.id === exId);
  if (!ex) return;

  document.getElementById('ex-topic-tag').textContent = ex.topic;
  document.getElementById('ex-diff-tag').textContent = `${ex.difficulty} ${'⭐'.repeat(ex.stars)}`;
  document.getElementById('ex-title').textContent = ex.title;
  document.getElementById('ex-desc').textContent = ex.description;
  document.getElementById('ex-input-sample').textContent = ex.inputSample;
  document.getElementById('ex-output-sample').textContent = ex.outputSample;
  document.getElementById('ex-hint-text').textContent = ex.hint;
  document.getElementById('ex-hint-box').classList.add('hidden');

  const editor = document.getElementById('python-code-editor');
  editor.value = ex.starterCode;
}

function toggleExerciseHint() {
  const hintBox = document.getElementById('ex-hint-box');
  hintBox.classList.toggle('hidden');
}

function loadExerciseSolution() {
  const ex = COURSE_DATA.exercises.find(e => e.id === AppState.currentExerciseId);
  if (!ex) return;
  const editor = document.getElementById('python-code-editor');
  editor.value = ex.solutionCode;
}

function resetExerciseCode() {
  const ex = COURSE_DATA.exercises.find(e => e.id === AppState.currentExerciseId);
  if (!ex) return;
  const editor = document.getElementById('python-code-editor');
  editor.value = ex.starterCode;
  clearConsoleOutput();
}

function clearConsoleOutput() {
  const consoleEl = document.getElementById('python-output-console');
  consoleEl.textContent = "Bảng điều khiển đã được làm sạch. Sẵn sàng thực thi!";
  consoleEl.style.color = '#10b981';
}

// In-Browser Python Runner with Skulpt & Fallback Evaluator
function runPythonCode() {
  const code = document.getElementById('python-code-editor').value;
  const outputConsole = document.getElementById('python-output-console');
  outputConsole.textContent = "Đang chạy chương trình Python...\n";
  outputConsole.style.color = '#38bdf8';

  let accumulatedOutput = '';

  function outf(text) {
    accumulatedOutput += text;
  }

  function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
      throw "File not found: '" + x + "'";
    }
    return Sk.builtinFiles["files"][x];
  }

  function inputPrompt(promptText) {
    return window.prompt(promptText || "Python input:");
  }

  // Kiểm tra Skulpt đã tải thành công chưa
  if (typeof Sk !== 'undefined') {
    Sk.configure({
      output: outf,
      read: builtinRead,
      inputfun: inputPrompt,
      inputfunTakesPrompt: true,
      __future__: Sk.python3
    });

    const myPromise = Sk.misceval.asyncToPromise(() => {
      return Sk.importMainWithBody("<stdin>", false, code, true);
    });

    myPromise.then(() => {
      outputConsole.textContent = accumulatedOutput || "Chương trình thực thi thành công! (Không có dữ liệu xuất print)";
      outputConsole.style.color = '#10b981';
      addXP(15);
    }).catch(err => {
      outputConsole.textContent = "⚠️ LỖI KHI CHẠY CODE:\n" + err.toString();
      outputConsole.style.color = '#f87171';
    });
  } else {
    // Trình thông dịch mô phỏng (Fallback nếu CDN Skulpt không khả dụng)
    runFallbackInterpreter(code, outputConsole);
  }
}

// Trình mô phỏng an toàn xử lý các phép toán cơ bản nếu không có mạng
function runFallbackInterpreter(code, outputConsole) {
  try {
    let output = "";
    const lines = code.split('\n');
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('print(') && trimmed.endsWith(')')) {
        const inner = trimmed.substring(6, trimmed.length - 1);
        output += `> ${inner}\n`;
      }
    });
    outputConsole.textContent = output || "Mã nguồn đã được kiểm tra cú pháp thành công!";
    outputConsole.style.color = '#10b981';
  } catch (e) {
    outputConsole.textContent = "Lỗi thực thi: " + e.message;
    outputConsole.style.color = '#f87171';
  }
}

/* ==========================================================================
   9. HỆ THỐNG KHẢO THÍ & THI CỬ (EXAM & ASSESSMENT SUITE)
   ========================================================================== */

function initExamSuite() {
  if (!COURSE_DATA.exams) return;

  // Cập nhật số lượng đề thi trên các nút lọc
  const allCount = COURSE_DATA.exams.length;
  const count15m = COURSE_DATA.exams.filter(e => e.category === '15min').length;
  const countMidterm = COURSE_DATA.exams.filter(e => e.category === 'midterm').length;
  const countFinal = COURSE_DATA.exams.filter(e => e.category === 'final').length;

  const countAllEl = document.getElementById('exam-count-all');
  const count15mEl = document.getElementById('exam-count-15min');
  const countMidtermEl = document.getElementById('exam-count-midterm');
  const countFinalEl = document.getElementById('exam-count-final');

  if (countAllEl) countAllEl.textContent = allCount;
  if (count15mEl) count15mEl.textContent = count15m;
  if (countMidtermEl) countMidtermEl.textContent = countMidterm;
  if (countFinalEl) countFinalEl.textContent = countFinal;

  // Hiển thị danh sách đề thi mặc định
  renderExamList('all');

  // Lắng nghe phím tắt làm bài thi
  window.addEventListener('keydown', handleExamKeyNavigation);
}

function filterExams(category) {
  AppState.activeExamCategory = category;

  // Cập nhật giao diện nút lọc
  document.querySelectorAll('.exam-filter-btn').forEach(btn => {
    const btnCat = btn.getAttribute('data-category');
    if (btnCat === category) {
      btn.className = "exam-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition bg-rose-600 text-white shadow-sm";
    } else {
      btn.className = "exam-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700";
    }
  });

  renderExamList(category);
}

function renderExamList(category = 'all') {
  const container = document.getElementById('exam-cards-grid');
  if (!container || !COURSE_DATA.exams) return;

  const filtered = category === 'all' 
    ? COURSE_DATA.exams 
    : COURSE_DATA.exams.filter(e => e.category === category);

  container.innerHTML = filtered.map(exam => {
    const savedScore = localStorage.getItem(`tinhoc10_exam_${exam.id}`);
    
    // Phối màu theo loại đề thi
    let badgeColor = 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300';
    let iconHeader = 'fa-stopwatch text-rose-500';
    if (exam.category === 'midterm') {
      badgeColor = 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300';
      iconHeader = 'fa-file-pen text-amber-500';
    } else if (exam.category === 'final') {
      badgeColor = 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300';
      iconHeader = 'fa-award text-purple-500';
    }

    return `
      <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
        <div>
          <!-- Header Card -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-3 py-1 rounded-full text-xs font-bold ${badgeColor}">
              <i class="fa-solid ${iconHeader} mr-1"></i> ${exam.badge}
            </span>
            <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span><i class="fa-regular fa-clock mr-1 text-slate-400"></i>${exam.durationMinutes} phút</span>
              <span>•</span>
              <span><i class="fa-solid fa-list-ol mr-1 text-slate-400"></i>${exam.questions.length} câu</span>
            </div>
          </div>

          <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 transition mb-2">
            ${exam.title}
          </h3>

          <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
            ${exam.description}
          </p>

          <div class="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-5 text-[11px] text-slate-600 dark:text-slate-300">
            <span class="font-bold text-slate-700 dark:text-slate-200">📌 Phạm vi: </span>${exam.scope}
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/60">
          <div>
            ${savedScore !== null 
              ? `<span class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg">
                   <i class="fa-solid fa-circle-check"></i> Đã làm: ${savedScore}/10 đ
                 </span>`
              : `<span class="text-xs text-slate-400">Chưa thực hiện</span>`
            }
          </div>
          <button onclick="startExam('${exam.id}')" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-500/10 group-hover:shadow-rose-500/25 transition flex items-center gap-2">
            <span>Bắt đầu thi</span>
            <i class="fa-solid fa-arrow-right text-xs transition group-hover:translate-x-0.5"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function startExam(examId) {
  const exam = COURSE_DATA.exams.find(e => e.id === examId);
  if (!exam) return;

  AppState.currentExamId = examId;
  AppState.examActiveIndex = 0;
  AppState.examAnswers = {};
  AppState.examFlags = new Set();
  AppState.examTotalSeconds = (exam.durationMinutes || 15) * 60;
  AppState.examSecondsRemaining = AppState.examTotalSeconds;

  // Cập nhật thông tin phòng thi
  document.getElementById('active-exam-title').textContent = exam.title;
  document.getElementById('active-exam-scope').textContent = `Phạm vi: ${exam.scope}`;

  // Ẩn view danh sách và kết quả, hiển thị phòng thi
  document.getElementById('exam-list-view').classList.add('hidden');
  document.getElementById('exam-result-view').classList.add('hidden');
  document.getElementById('exam-active-view').classList.remove('hidden');

  // Khởi động đồng hồ đếm ngược
  clearInterval(AppState.examTimerInterval);
  updateTimerDisplay();
  AppState.examTimerInterval = setInterval(() => {
    AppState.examSecondsRemaining--;
    updateTimerDisplay();

    if (AppState.examSecondsRemaining <= 0) {
      clearInterval(AppState.examTimerInterval);
      alert('⏰ Đã hết thời gian làm bài! Hệ thống sẽ tự động nộp bài của bạn.');
      submitExam(true);
    }
  }, 1000);

  // Hiển thị câu hỏi đầu tiên và phiếu trả lời
  renderActiveQuestion();
  renderBubbleGrid();
  updateCompletionCount();

  window.scrollTo({ top: 120, behavior: 'smooth' });
}

function updateTimerDisplay() {
  const display = document.getElementById('exam-timer-display');
  const timerBox = document.getElementById('exam-timer-box');
  if (!display) return;

  const mins = Math.floor(AppState.examSecondsRemaining / 60);
  const secs = AppState.examSecondsRemaining % 60;
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  display.textContent = formatted;

  if (timerBox) {
    if (AppState.examSecondsRemaining <= 180) { // Dưới 3 phút cảnh báo đỏ
      timerBox.className = "flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-red-100 dark:bg-red-950/70 border border-red-400 text-red-600 dark:text-red-300 font-mono font-bold text-base sm:text-lg animate-pulse";
    } else {
      timerBox.className = "flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 font-mono font-bold text-base sm:text-lg";
    }
  }
}

function renderActiveQuestion() {
  const exam = COURSE_DATA.exams.find(e => e.id === AppState.currentExamId);
  if (!exam) return;

  const currentQ = exam.questions[AppState.examActiveIndex];
  const qIndex = AppState.examActiveIndex;

  // Header thông tin câu hỏi
  document.getElementById('active-question-badge').textContent = `Câu ${qIndex + 1} / ${exam.questions.length}`;
  
  const statusEl = document.getElementById('active-answered-status');
  const hasAnswered = AppState.examAnswers.hasOwnProperty(qIndex);
  if (hasAnswered) {
    statusEl.innerHTML = `<span class="text-indigo-600 dark:text-indigo-400 font-bold"><i class="fa-solid fa-check mr-1"></i>Đã chọn đáp án</span>`;
  } else {
    statusEl.innerHTML = `<span class="text-slate-400">Chưa chọn đáp án</span>`;
  }

  // Nút Flag (Đánh dấu)
  const flagBtn = document.getElementById('active-flag-btn');
  const isFlagged = AppState.examFlags.has(qIndex);
  if (isFlagged) {
    flagBtn.className = "px-3 py-1.5 rounded-lg border border-amber-400 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-bold transition flex items-center gap-1.5";
    flagBtn.innerHTML = `<i class="fa-solid fa-bookmark text-amber-500"></i> <span>Đã đánh dấu xem lại</span>`;
  } else {
    flagBtn.className = "px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 transition flex items-center gap-1.5";
    flagBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i> <span>Đánh dấu xem lại</span>`;
  }

  // Nội dung câu hỏi
  const textContainer = document.getElementById('active-question-text');
  let qText = currentQ.question;
  if (qText.includes('```')) {
    qText = qText.replace(/```python([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs my-3 overflow-x-auto">$1</pre>');
    qText = qText.replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs my-3 overflow-x-auto">$1</pre>');
  }
  textContainer.innerHTML = qText;

  // Danh sách các phương án trả lời (A, B, C, D)
  const optionsContainer = document.getElementById('active-options-list');
  const optLabels = ['A', 'B', 'C', 'D'];

  optionsContainer.innerHTML = currentQ.options.map((option, optIdx) => {
    const isSelected = AppState.examAnswers[qIndex] === optIdx;
    return `
      <button onclick="selectActiveExamOption(${optIdx})" 
              class="w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 group cursor-pointer ${
                isSelected 
                  ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-200 shadow-sm ring-2 ring-indigo-500/20' 
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/40 text-slate-700 dark:text-slate-300'
              }">
        <span class="w-7 h-7 shrink-0 rounded-xl flex items-center justify-center font-bold text-xs transition ${
          isSelected 
            ? 'bg-indigo-600 text-white' 
            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
        }">
          ${optLabels[optIdx]}
        </span>
        <span class="text-sm font-medium pt-0.5 leading-snug flex-1">${option}</span>
        ${isSelected ? '<i class="fa-solid fa-circle-check text-indigo-600 dark:text-indigo-400 mt-1"></i>' : ''}
      </button>
    `;
  }).join('');

  // Nút Previous / Next
  const prevBtn = document.getElementById('btn-prev-question');
  const nextBtn = document.getElementById('btn-next-question');

  if (prevBtn) {
    prevBtn.disabled = qIndex === 0;
    prevBtn.style.opacity = qIndex === 0 ? '0.4' : '1';
    prevBtn.style.cursor = qIndex === 0 ? 'not-allowed' : 'pointer';
  }

  if (nextBtn) {
    if (qIndex === exam.questions.length - 1) {
      nextBtn.innerHTML = `Hoàn thành <i class="fa-solid fa-flag-checkered ml-1"></i>`;
      nextBtn.className = "px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition flex items-center gap-2 shadow-sm";
    } else {
      nextBtn.innerHTML = `Câu tiếp <i class="fa-solid fa-chevron-right ml-1"></i>`;
      nextBtn.className = "px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition flex items-center gap-2 shadow-sm";
    }
  }

  // Cập nhật ô active trên phiếu trắc nghiệm
  updateActiveBubbleHighlight();
}

function selectActiveExamOption(optIndex) {
  const qIndex = AppState.examActiveIndex;
  AppState.examAnswers[qIndex] = optIndex;

  renderActiveQuestion();
  renderBubbleGrid();
  updateCompletionCount();
}

function toggleActiveFlag() {
  const qIndex = AppState.examActiveIndex;
  if (AppState.examFlags.has(qIndex)) {
    AppState.examFlags.delete(qIndex);
  } else {
    AppState.examFlags.add(qIndex);
  }

  renderActiveQuestion();
  renderBubbleGrid();
}

function navigateActiveQuestion(delta) {
  const exam = COURSE_DATA.exams.find(e => e.id === AppState.currentExamId);
  if (!exam) return;

  const nextIndex = AppState.examActiveIndex + delta;
  if (nextIndex >= 0 && nextIndex < exam.questions.length) {
    AppState.examActiveIndex = nextIndex;
    renderActiveQuestion();
  } else if (nextIndex >= exam.questions.length) {
    promptSubmitExam();
  }
}

function jumpToActiveQuestion(index) {
  AppState.examActiveIndex = index;
  renderActiveQuestion();
}

function renderBubbleGrid() {
  const container = document.getElementById('active-bubble-grid');
  const exam = COURSE_DATA.exams.find(e => e.id === AppState.currentExamId);
  if (!container || !exam) return;

  container.innerHTML = exam.questions.map((_, idx) => {
    const isCurrent = idx === AppState.examActiveIndex;
    const isAnswered = AppState.examAnswers.hasOwnProperty(idx);
    const isFlagged = AppState.examFlags.has(idx);

    let bgClass = "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-transparent";
    if (isFlagged) {
      bgClass = "bg-amber-400 text-amber-950 font-bold border-amber-500";
    } else if (isAnswered) {
      bgClass = "bg-indigo-600 text-white font-bold border-transparent";
    }

    const ringClass = isCurrent ? "ring-2 ring-rose-500 ring-offset-2 dark:ring-offset-slate-800 scale-105" : "";

    return `
      <button onclick="jumpToActiveQuestion(${idx})" 
              class="relative h-9 rounded-xl text-xs font-semibold flex items-center justify-center transition border ${bgClass} ${ringClass}">
        ${idx + 1}
        ${isFlagged ? '<i class="fa-solid fa-bookmark text-[9px] absolute -top-1 -right-1 text-amber-500 bg-white dark:bg-slate-900 rounded-full p-0.5 shadow"></i>' : ''}
      </button>
    `;
  }).join('');
}

function updateActiveBubbleHighlight() {
  const container = document.getElementById('active-bubble-grid');
  if (!container) return;

  Array.from(container.children).forEach((btn, idx) => {
    if (idx === AppState.examActiveIndex) {
      btn.classList.add('ring-2', 'ring-rose-500', 'ring-offset-2', 'dark:ring-offset-slate-800', 'scale-105');
    } else {
      btn.classList.remove('ring-2', 'ring-rose-500', 'ring-offset-2', 'dark:ring-offset-slate-800', 'scale-105');
    }
  });
}

function updateCompletionCount() {
  const exam = COURSE_DATA.exams.find(e => e.id === AppState.currentExamId);
  if (!exam) return;

  const answeredCount = Object.keys(AppState.examAnswers).length;
  const countEl = document.getElementById('active-completion-count');
  if (countEl) {
    countEl.textContent = `${answeredCount}/${exam.questions.length} câu`;
  }
}

function promptSubmitExam() {
  const exam = COURSE_DATA.exams.find(e => e.id === AppState.currentExamId);
  if (!exam) return;

  const total = exam.questions.length;
  const answered = Object.keys(AppState.examAnswers).length;
  const unanswered = total - answered;

  let confirmMsg = `Bạn đã hoàn thành ${answered}/${total} câu hỏi. Bạn có chắc chắn muốn nộp bài?`;
  if (unanswered > 0) {
    confirmMsg = `⚠️ Chú ý: Bạn còn ${unanswered} câu chưa trả lời!\nBạn có chắc chắn muốn nộp bài ngay bây giờ?`;
  }

  if (confirm(confirmMsg)) {
    submitExam();
  }
}

function confirmExitExam() {
  if (confirm('Bạn có chắc chắn muốn thoát khỏi bài thi này? Tiến trình làm bài sẽ không được lưu.')) {
    clearInterval(AppState.examTimerInterval);
    document.getElementById('exam-active-view').classList.add('hidden');
    document.getElementById('exam-list-view').classList.remove('hidden');
    renderExamList(AppState.activeExamCategory);
  }
}

function submitExam(isAuto = false) {
  clearInterval(AppState.examTimerInterval);

  const exam = COURSE_DATA.exams.find(e => e.id === AppState.currentExamId);
  if (!exam) return;

  const totalQuestions = exam.questions.length;
  let correctCount = 0;

  exam.questions.forEach((q, idx) => {
    if (AppState.examAnswers[idx] === q.correct) {
      correctCount++;
    }
  });

  const score = ((correctCount / totalQuestions) * 10).toFixed(1);
  const timeSpentSecs = AppState.examTotalSeconds - AppState.examSecondsRemaining;
  const spentMins = Math.floor(timeSpentSecs / 60);
  const spentSecs = timeSpentSecs % 60;
  const formattedTimeSpent = `${String(spentMins).padStart(2, '0')}:${String(spentSecs).padStart(2, '0')}`;
  const earnedXP = correctCount * 5 + 10;

  // Lưu điểm số cao nhất vào localStorage
  const currentSaved = localStorage.getItem(`tinhoc10_exam_${exam.id}`);
  if (currentSaved === null || parseFloat(score) > parseFloat(currentSaved)) {
    localStorage.setItem(`tinhoc10_exam_${exam.id}`, score);
  }

  // Thưởng XP
  addXP(earnedXP);

  // Hiển thị giao diện kết quả
  document.getElementById('exam-active-view').classList.add('hidden');
  document.getElementById('exam-result-view').classList.remove('hidden');

  document.getElementById('result-score-value').textContent = score;
  document.getElementById('result-correct-count').textContent = `${correctCount} / ${totalQuestions}`;
  document.getElementById('result-time-spent').textContent = formattedTimeSpent;
  document.getElementById('result-xp-earned').textContent = `+${earnedXP} XP`;
  document.getElementById('review-total-questions').textContent = totalQuestions;

  // Đánh giá học lực dựa theo điểm
  const numericScore = parseFloat(score);
  const titleEl = document.getElementById('result-evaluation-title');
  const descEl = document.getElementById('result-evaluation-desc');
  const badgeEl = document.getElementById('result-status-badge');

  if (numericScore >= 9.0) {
    titleEl.textContent = 'Kết quả Xuất sắc! 🌟';
    descEl.textContent = 'Bạn đã nắm rất vững toàn bộ các kiến thức trọng tâm SGK Tin học 10 Kết nối tri thức!';
    badgeEl.className = "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300";
    badgeEl.innerHTML = `<i class="fa-solid fa-trophy"></i> Xuất Sắc`;
  } else if (numericScore >= 8.0) {
    titleEl.textContent = 'Kết quả Giỏi! 👏';
    descEl.textContent = 'Khả năng hiểu và vận dụng kiến thức lý thuyết cũng như lập trình của bạn rất tốt.';
    badgeEl.className = "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300";
    badgeEl.innerHTML = `<i class="fa-solid fa-star"></i> Học Lực Giỏi`;
  } else if (numericScore >= 6.5) {
    titleEl.textContent = 'Kết quả Khá! 👍';
    descEl.textContent = 'Bạn đã nắm được các nội dung cơ bản. Hãy xem lại phần giải thích chi tiết bên dưới để bổ sung các câu bị nhầm lẫn nhé!';
    badgeEl.className = "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300";
    badgeEl.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Học Lực Khá`;
  } else if (numericScore >= 5.0) {
    titleEl.textContent = 'Đạt Yêu Cầu (Trung Bình) 📚';
    descEl.textContent = 'Bạn cần dành thêm thời gian đọc lại các Hộp kiến thức và Flashcards để cải thiện điểm số.';
    badgeEl.className = "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300";
    badgeEl.innerHTML = `<i class="fa-solid fa-book"></i> Trung Bình`;
  } else {
    titleEl.textContent = 'Cần Cố Gắng Hơn! 💪';
    descEl.textContent = 'Đừng nản lòng! Hãy đọc lại lý thuyết từng bài học trong phần Sách Online và làm lại đề này nhé!';
    badgeEl.className = "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300";
    badgeEl.innerHTML = `<i class="fa-solid fa-rotate-left"></i> Cần Cố Gắng`;
  }

  // Hiệu ứng pháo hoa chúc mừng
  if (typeof confetti === 'function' && numericScore >= 5.0) {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // Render danh sách giải thích chi tiết
  renderExamReviewList(exam);

  window.scrollTo({ top: 120, behavior: 'smooth' });
}

function renderExamReviewList(exam) {
  const container = document.getElementById('exam-review-list');
  if (!container) return;

  const optLabels = ['A', 'B', 'C', 'D'];

  container.innerHTML = exam.questions.map((q, idx) => {
    const userChoice = AppState.examAnswers[idx];
    const isCorrect = userChoice === q.correct;
    const isAnswered = AppState.examAnswers.hasOwnProperty(idx);

    let statusBadge = isCorrect
      ? `<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
           <i class="fa-solid fa-check"></i> Đúng (+1.0 đ)
         </span>`
      : `<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
           <i class="fa-solid fa-xmark"></i> ${isAnswered ? 'Sai' : 'Chưa làm'} (0 đ)
         </span>`;

    let qText = q.question;
    if (qText.includes('```')) {
      qText = qText.replace(/```python([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs my-2 overflow-x-auto">$1</pre>');
      qText = qText.replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs my-2 overflow-x-auto">$1</pre>');
    }

    return `
      <div class="p-5 rounded-2xl border ${isCorrect ? 'border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/20' : 'border-rose-200 dark:border-rose-900/40 bg-rose-50/20'}">
        <div class="flex items-center justify-between mb-3">
          <span class="font-bold text-slate-800 dark:text-slate-100 text-sm">Câu ${idx + 1}:</span>
          ${statusBadge}
        </div>

        <div class="text-sm font-medium text-slate-800 dark:text-slate-100 mb-4 leading-relaxed">
          ${qText}
        </div>

        <!-- Các lựa chọn -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-4">
          ${q.options.map((opt, optIdx) => {
            const isThisCorrect = optIdx === q.correct;
            const isThisChosen = optIdx === userChoice;

            let optStyle = "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300";
            if (isThisCorrect) {
              optStyle = "bg-emerald-100 dark:bg-emerald-950/50 border-emerald-400 text-emerald-800 dark:text-emerald-200 font-bold";
            } else if (isThisChosen && !isThisCorrect) {
              optStyle = "bg-rose-100 dark:bg-rose-950/50 border-rose-400 text-rose-800 dark:text-rose-200 line-through";
            }

            return `
              <div class="p-2.5 rounded-xl border flex items-center gap-2 ${optStyle}">
                <span class="font-bold shrink-0">${optLabels[optIdx]}.</span>
                <span class="flex-1">${opt}</span>
                ${isThisCorrect ? '<i class="fa-solid fa-check text-emerald-600 dark:text-emerald-400 text-xs"></i>' : ''}
                ${isThisChosen && !isThisCorrect ? '<i class="fa-solid fa-xmark text-rose-600 text-xs"></i>' : ''}
              </div>
            `;
          }).join('')}
        </div>

        <!-- Hướng dẫn giải / Trích dẫn SGK -->
        <div class="p-3 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
          <div class="font-bold text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-lightbulb"></i> Giải thích chuẩn SGK Tin học 10:
          </div>
          <p>${q.explanation}</p>
        </div>
      </div>
    `;
  }).join('');
}

function retakeCurrentExam() {
  if (AppState.currentExamId) {
    startExam(AppState.currentExamId);
  }
}

function backToExamList() {
  document.getElementById('exam-result-view').classList.add('hidden');
  document.getElementById('exam-active-view').classList.add('hidden');
  document.getElementById('exam-list-view').classList.remove('hidden');
  renderExamList(AppState.activeExamCategory);
  window.scrollTo({ top: 100, behavior: 'smooth' });
}

function handleExamKeyNavigation(e) {
  // Chỉ áp dụng khi đang ở trong phòng thi trực tuyến
  const activeRoom = document.getElementById('exam-active-view');
  if (!activeRoom || activeRoom.classList.contains('hidden')) return;

  // Tránh bắt phím khi đang nhập liệu vào ô input/textarea
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

  const key = e.key.toLowerCase();
  if (['1', 'a'].includes(key)) {
    selectActiveExamOption(0);
  } else if (['2', 'b'].includes(key)) {
    selectActiveExamOption(1);
  } else if (['3', 'c'].includes(key)) {
    selectActiveExamOption(2);
  } else if (['4', 'd'].includes(key)) {
    selectActiveExamOption(3);
  } else if (key === 'arrowleft') {
    navigateActiveQuestion(-1);
  } else if (key === 'arrowright') {
    navigateActiveQuestion(1);
  } else if (key === 'f') {
    toggleActiveFlag();
  }
}

