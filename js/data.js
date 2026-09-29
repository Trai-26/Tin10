// Dữ liệu nội dung Tin Học Lớp 10 - Bộ sách KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (NXB Giáo Dục Việt Nam)
const COURSE_DATA = {
  meta: {
    bookName: "Tin học 10 - Kết nối tri thức với cuộc sống",
    publisher: "Nhà xuất bản Giáo dục Việt Nam",
    standard: "Chương trình GDPT 2018",
    authors: "Bùi Việt Hà (Tổng Chủ biên), Phan Anh Vinh (Chủ biên), cùng nhóm tác giả"
  },

  topics: [
    {
      id: "topic-1",
      code: "CHỦ ĐỀ 1",
      title: "Máy tính và xã hội tri thức",
      icon: "fa-solid fa-microchip",
      color: "from-blue-600 to-indigo-600",
      accent: "#2563eb",
      desc: "Thông tin và xử lí thông tin, vai trò của thiết bị thông minh, các kiểu dữ liệu, hệ nhị phân, dữ liệu lôgic, âm thanh và hình ảnh số.",
      lessons: [
        {
          id: "lesson-1",
          number: "Bài 1",
          title: "Bài 1: Thông tin và xử lí thông tin",
          page: "Trang 6",
          duration: "45 phút",
          tag: "Lý thuyết & Khái niệm",
          objectives: [
            "Phân biệt được thông tin và dữ liệu.",
            "Chuyển đổi giữa các đơn vị lưu trữ dữ liệu (B, KB, MB, GB, TB).",
            "Nêu được sự ưu việt của việc lưu trữ, xử lí và truyền thông tin bằng thiết bị số."
          ],
          warmup: "Tin học được định nghĩa là khoa học nghiên cứu các phương pháp và quá trình xử lí thông tin tự động bằng các phương tiện kĩ thuật, chủ yếu bằng máy tính. Thông tin được biểu diễn trong máy tính bằng các dãy bit (0, 1), máy tính xử lí dữ liệu là các dãy bit trong bộ nhớ. Vậy dữ liệu và thông tin khác nhau như thế nào?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Thông tin và Dữ liệu</h3>
              
              <div class="p-3 bg-amber-50 dark:bg-slate-800/80 rounded-xl border border-amber-200 dark:border-amber-700/50 mb-3">
                <span class="font-bold text-amber-700 dark:text-amber-400">💡 Hoạt động 1: Có thể đồng nhất thông tin với dữ liệu được không?</span>
                <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Có các ý kiến về dữ liệu bài giảng Tin học: An cho rằng "Bài ghi trong vở của em là dữ liệu", Minh cho rằng "Tệp bài soạn Word của cô giáo là dữ liệu", Khoa cho rằng "Tệp video ghi lại tiết giảng là dữ liệu". Theo em bạn nào nói đúng? &rarr; <em>Cả ba bạn đều đúng! Cùng một thông tin bài giảng có thể được thể hiện bằng nhiều dạng dữ liệu khác nhau.</em>
                </p>
              </div>

              <h4>a) Quá trình xử lí thông tin bằng máy tính</h4>
              <p>Quá trình gồm 3 bước cơ bản:</p>
              <ul class="list-disc pl-5 space-y-1 text-sm my-2">
                <li><strong>Bước 1: Tiếp nhận dữ liệu</strong> (Từ bàn phím, chuột, máy quét, cảm biến...).</li>
                <li><strong>Bước 2: Xử lí dữ liệu</strong> (Biến đổi dữ liệu trong bộ nhớ để tạo ra dữ liệu mới, ví dụ dự báo thời tiết từ dữ liệu nhiệt độ nhiều năm).</li>
                <li><strong>Bước 3: Đưa ra kết quả</strong> (Hiển thị văn bản, âm thanh, hình ảnh cho con người hoặc lưu lên thẻ nhớ/ổ cứng).</li>
              </ul>

              <h4>b) Mối quan hệ giữa thông tin và dữ liệu</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                <div class="p-3 rounded-xl bg-blue-50 dark:bg-slate-800 border-l-4 border-blue-500">
                  <div class="font-bold text-blue-600 dark:text-blue-400 text-sm">Dữ liệu (Data)</div>
                  <p class="text-xs mt-1">Là thông tin đã được đưa vào máy tính dưới dạng các dãy bit để máy tính có thể nhận biết và xử lí được. Dữ liệu là yếu tố thể hiện, xác định thông tin.</p>
                </div>
                <div class="p-3 rounded-xl bg-indigo-50 dark:bg-slate-800 border-l-4 border-indigo-500">
                  <div class="font-bold text-indigo-600 dark:text-indigo-400 text-sm">Thông tin (Information)</div>
                  <p class="text-xs mt-1">Là ý nghĩa của dữ liệu, gắn liền với quá trình nhận thức của con người. Thông tin có tính toàn vẹn (dữ liệu không đầy đủ sẽ làm thông tin bị sai lệch).</p>
                </div>
              </div>

              <!-- Hộp kiến thức chuẩn KNTT -->
              <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-dashed border-amber-400 dark:border-amber-600 my-4">
                <div class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-bookmark text-amber-500"></i> HỘP KIẾN THỨC (SGK KNTT Trang 7):
                </div>
                <ul class="list-disc pl-5 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <li>Trong tin học, <strong>dữ liệu</strong> là thông tin đã được đưa vào máy tính để máy tính có thể nhận biết và xử lí được.</li>
                  <li><strong>Thông tin</strong> là ý nghĩa của dữ liệu. Dữ liệu là các yếu tố thể hiện, xác định thông tin. Thông tin và dữ liệu có tính độc lập tương đối.</li>
                  <li>Cùng một thông tin có thể được thể hiện bởi nhiều loại dữ liệu khác nhau. Ngược lại, một dữ liệu có thể mang nhiều thông tin khác nhau.</li>
                  <li>Với vai trò là ý nghĩa, <strong>thông tin có tính toàn vẹn</strong>. Dữ liệu không đầy đủ có thể làm thông tin sai lệch, thậm chí không xác định được.</li>
                </ul>
              </div>

              <h3>2. Đơn vị lưu trữ dữ liệu</h3>
              <p>Máy tính tổ chức lưu trữ và truy cập dữ liệu theo nhóm bit. <strong>Byte là đơn vị dữ liệu nhỏ nhất mà máy tính truy cập được (1 Byte = 8 bit)</strong>. Các đơn vị đo kế tiếp hơn kém nhau <code>2¹⁰ = 1024</code> lần:</p>

              <div class="overflow-x-auto my-3">
                <table class="w-full text-xs text-left border rounded-lg overflow-hidden">
                  <thead class="bg-slate-200 dark:bg-slate-700 font-bold">
                    <tr><th class="p-2">Đơn vị</th><th class="p-2">Kí hiệu</th><th class="p-2">Lượng dữ liệu</th><th class="p-2">Đơn vị</th><th class="p-2">Kí hiệu</th><th class="p-2">Lượng dữ liệu</th></tr>
                  </thead>
                  <tbody>
                    <tr class="border-b"><td class="p-2 font-medium">bit</td><td class="p-2">bit</td><td class="p-2">1 bit</td><td class="p-2 font-medium">Terabyte</td><td class="p-2">TB</td><td class="p-2 font-bold text-brand-600">2¹⁰ GB (1024 GB)</td></tr>
                    <tr class="border-b"><td class="p-2 font-medium">Byte</td><td class="p-2">B</td><td class="p-2">8 bit</td><td class="p-2 font-medium">Petabyte</td><td class="p-2">PB</td><td class="p-2">2¹⁰ TB</td></tr>
                    <tr class="border-b"><td class="p-2 font-medium">Kilobyte</td><td class="p-2">KB</td><td class="p-2 font-bold text-brand-600">2¹⁰ B (1024 B)</td><td class="p-2 font-medium">Exabyte</td><td class="p-2">EB</td><td class="p-2">2¹⁰ PB</td></tr>
                    <tr class="border-b"><td class="p-2 font-medium">Megabyte</td><td class="p-2">MB</td><td class="p-2 font-bold text-brand-600">2¹⁰ KB (1024 KB)</td><td class="p-2 font-medium">Zettabyte</td><td class="p-2">ZB</td><td class="p-2">2¹⁰ EB</td></tr>
                    <tr><td class="p-2 font-medium">Gigabyte</td><td class="p-2">GB</td><td class="p-2 font-bold text-brand-600">2¹⁰ MB (1024 MB)</td><td class="p-2 font-medium">Yottabyte</td><td class="p-2">YB</td><td class="p-2">2¹⁰ ZB</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>3. Ưu điểm của Thiết bị số</h3>
              <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-dashed border-amber-400 dark:border-amber-600 my-4">
                <div class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-bookmark text-amber-500"></i> THIẾT BỊ SỐ CÓ CÁC ƯU ĐIỂM (SGK Trang 10):
                </div>
                <ul class="list-disc pl-5 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <li><strong>Xử lí nhanh và chính xác:</strong> Xử lí thông tin với tốc độ cực nhanh, chính xác cao và làm việc liên tục.</li>
                  <li><strong>Lưu trữ khổng lồ, giá rẻ:</strong> Khả năng lưu trữ dữ liệu với dung lượng lớn, giá thành rẻ, tìm kiếm nhanh và dễ dàng.</li>
                  <li><strong>Truyền tin tốc độ cao:</strong> Khả năng truyền tin qua mạng Internet gần như tức thời.</li>
                  <li><strong>Tự động hoá:</strong> Giúp thực hiện tự động nhiều công việc một cách chính xác, chi phí thấp và tiện lợi.</li>
                </ul>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                <div class="p-3.5 bg-rose-50 dark:bg-slate-800/80 rounded-xl border border-rose-200 dark:border-rose-900">
                  <div class="font-bold text-rose-700 dark:text-rose-400 text-xs uppercase mb-1">
                    <i class="fa-solid fa-pen-to-square mr-1"></i> Luyện tập (SGK Trang 10)
                  </div>
                  <p class="text-xs text-slate-700 dark:text-slate-300">
                    <strong>Bài 1:</strong> Từ dữ liệu điểm các môn học của học sinh, có thể rút ra những thông tin gì? Mô tả sơ bộ xử lí để rút ra một thông tin trong số đó.<br>
                    <strong>Bài 2:</strong> Một thẻ nhớ 16 GB có thể chứa tối đa bao nhiêu ảnh trung bình khoảng 10 MB? &rarr; <em>(16 × 1024) / 10 ≈ 1.638 ảnh!</em>
                  </p>
                </div>
                <div class="p-3.5 bg-teal-50 dark:bg-slate-800/80 rounded-xl border border-teal-200 dark:border-teal-900">
                  <div class="font-bold text-teal-700 dark:text-teal-400 text-xs uppercase mb-1">
                    <i class="fa-solid fa-lightbulb mr-1"></i> Vận dụng (SGK Trang 10)
                  </div>
                  <p class="text-xs text-slate-700 dark:text-slate-300">
                    Trong thẻ căn cước công dân gắn chip, thông tin được in trực tiếp, mã hoá trong mã QR và ghi vào chip nhớ. Theo em điều đó có lợi ích gì trong việc quản lí và chống làm giả?
                  </p>
                </div>
              </div>
            </div>
          `
        },
        {
          id: "lesson-2",
          number: "Bài 2",
          title: "Bài 2: Vai trò của thiết bị thông minh và tin học đối với xã hội",
          page: "Trang 11",
          duration: "45 phút",
          tag: "Xã hội tri thức",
          objectives: [
            "Biết được các thiết bị thông minh là thiết bị số có khả năng xử lí thông tin, kết nối mạng và hoạt động tự chủ.",
            "Nêu được ví dụ về các thiết bị thông minh trong đời sống (smartphone, smartwatch, robot hút bụi...).",
            "Hiểu khái niệm Internet vạn vật (IoT) và cuộc Cách mạng công nghiệp 4.0."
          ],
          warmup: "Em hãy kể tên những đồ dùng gia đình hoặc thiết bị xung quanh có gắn từ 'thông minh' (Smart). Chúng có điểm gì khác biệt so với các thiết bị truyền thống?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Thiết bị thông minh là gì?</h3>
              <p>Khái niệm <strong>Thiết bị thông minh (Smart Device)</strong> được định nghĩa là thiết bị số có khả năng kết nối với thiết bị khác qua mạng, có khả năng hoạt động tự động, thích ứng với bối cảnh không cần sự can thiệp của con người, hoặc có tích hợp các yếu tố trí tuệ nhân tạo (AI).</p>
              
              <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-dashed border-amber-400 dark:border-amber-600 my-4">
                <div class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1">
                  <i class="fa-solid fa-bookmark text-amber-500"></i> HỘP KIẾN THỨC (SGK KNTT Trang 12):
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Thiết bị thông minh là thiết bị điện tử có thể hoạt động một cách tự chủ, tích hợp khả năng tính toán, kết nối mạng và tương tác với môi trường thông qua cảm biến. Các thiết bị thông minh đóng vai trò cốt lõi trong hệ thống <strong>Internet vạn vật (Internet of Things - IoT)</strong>.
                </p>
              </div>

              <h3>2. Đóng góp của Tin học đối với xã hội</h3>
              <ul class="list-disc pl-5 space-y-2 text-xs my-2">
                <li><strong>Chính phủ điện tử (E-Government):</strong> Dịch vụ công trực tuyến, cổng thông tin dân cư quốc gia, tiết kiệm thời gian và minh bạch thủ tục.</li>
                <li><strong>Kinh tế số & Thương mại điện tử:</strong> Mua sắm trực tuyến, ngân hàng số, thanh toán không dùng tiền mặt (QR Code).</li>
                <li><strong>Giáo dục thông minh (E-Learning):</strong> Học tập trực tuyến, bài giảng số, tương tác mọi lúc mọi nơi.</li>
                <li><strong>Nông nghiệp & Y tế chính xác:</strong> Drone phun thuốc trừ sâu, robot phẫu thuật, hồ sơ bệnh án điện tử.</li>
              </ul>
            </div>
          `
        },
        {
          id: "lesson-3",
          number: "Bài 3",
          title: "Bài 3: Một số kiểu dữ liệu và dữ liệu văn bản",
          page: "Trang 16",
          duration: "45 phút",
          tag: "Dữ liệu & Mã hoá",
          objectives: [
            "Biết các kiểu dữ liệu cơ bản: số, văn bản, hình ảnh, âm thanh, lôgic.",
            "Hiểu cách biểu diễn văn bản trong máy tính bằng bảng mã ASCII và Unicode.",
            "Nắm vững các chuẩn gõ tiếng Việt (VNI, Telex) và bảng mã tiếng Việt."
          ],
          warmup: "Khi gõ một phím trên bàn phím (ví dụ chữ cái 'A'), máy tính làm thế nào để lưu trữ và hiển thị được chữ cái đó?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Các kiểu dữ liệu cơ bản</h3>
              <p>Dữ liệu trong máy tính rất phong phú nhưng có thể chia thành các nhóm chính: <em>Dữ liệu số (nguyên, thực), Dữ liệu văn bản, Dữ liệu lôgic, Dữ liệu đa phương tiện (âm thanh, hình ảnh, video)</em>.</p>

              <h3>2. Biểu diễn dữ liệu văn bản: Từ ASCII đến Unicode</h3>
              <p>Mỗi kí tự được gán một số nguyên gọi là <strong>mã kí tự</strong>.</p>
              <ul class="list-disc pl-5 space-y-1 text-xs my-2">
                <li><strong>Bảng mã ASCII:</strong> Sử dụng 7 bit (hoặc 8 bit - 1 Byte) để mã hoá 128 (hoặc 256) kí tự Latinh, chữ số và dấu câu thông dụng.</li>
                <li><strong>Bảng mã Unicode:</strong> Bảng mã quốc tế sử dụng nhiều byte (như UTF-8 dùng từ 1 đến 4 byte) để mã hoá thống nhất mọi ngôn ngữ trên toàn cầu, bao gồm đầy đủ bộ chữ tiếng Việt có dấu.</li>
              </ul>

              <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-dashed border-amber-400 dark:border-amber-600 my-4">
                <div class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1">
                  <i class="fa-solid fa-bookmark text-amber-500"></i> HỘP KIẾN THỨC (SGK KNTT Trang 19):
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Văn bản được số hoá bằng cách gán cho mỗi kí tự một số nhị phân gọi là mã kí tự. Bộ mã <strong>Unicode</strong> là bộ mã chuẩn quốc tế hiện nay dùng để mã hoá văn bản cho tất cả các ngôn ngữ trên thế giới.
                </p>
              </div>
            </div>
          `
        },
        {
          id: "lesson-4",
          number: "Bài 4",
          title: "Bài 4: Hệ nhị phân và dữ liệu số nguyên",
          page: "Trang 20",
          duration: "45 phút",
          tag: "Số học nhị phân",
          objectives: [
            "Hiểu biểu diễn số nguyên trong hệ nhị phân (hệ cơ số 2).",
            "Thực hiện được phép chuyển đổi qua lại giữa số nguyên hệ thập phân và nhị phân.",
            "Hiểu các phép toán số học nhị phân: cộng (+), nhân (×)."
          ],
          warmup: "Vì sao máy tính điện tử lại sử dụng hệ đếm cơ số 2 (chỉ gồm 0 và 1) mà không dùng hệ thập phân như con người?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Biểu diễn số trong hệ nhị phân</h3>
              <p>Mỗi số tự nhiên có thể phân tích thành tổng các lũy thừa của 2:</p>
              <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-mono text-xs my-2">
                19₁₀ = 16 + 2 + 1 = 1×2⁴ + 0×2³ + 0×2² + 1×2¹ + 1×2⁰ = <strong>10011₂</strong>
              </div>

              <h3>2. Quy tắc cộng hai số nhị phân</h3>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2 text-center text-xs font-mono">
                <div class="p-2 bg-blue-50 dark:bg-slate-800 rounded">0 + 0 = 0</div>
                <div class="p-2 bg-blue-50 dark:bg-slate-800 rounded">0 + 1 = 1</div>
                <div class="p-2 bg-blue-50 dark:bg-slate-800 rounded">1 + 0 = 1</div>
                <div class="p-2 bg-amber-50 dark:bg-slate-800 rounded font-bold text-amber-600">1 + 1 = 10 (nhớ 1)</div>
              </div>

              <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-dashed border-amber-400 dark:border-amber-600 my-4">
                <div class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1">
                  <i class="fa-solid fa-bookmark text-amber-500"></i> HỘP KIẾN THỨC (SGK KNTT Trang 23):
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Trong hệ nhị phân, chỉ sử dụng hai chữ số 0 và 1. Giá trị của mỗi chữ số phụ thuộc vào vị trí của nó theo lũy thừa của 2. Mọi số nguyên đều có thể biểu diễn chính xác trong máy tính dưới dạng nhị phân.
                </p>
              </div>
            </div>
          `
        },
        {
          id: "lesson-5",
          number: "Bài 5",
          title: "Bài 5: Dữ liệu lôgic",
          page: "Trang 24",
          duration: "45 phút",
          tag: "Đại số Boole",
          objectives: [
            "Biết được giá trị chân lí và các phép toán lôgic AND, OR, XOR, NOT.",
            "Biết cách biểu diễn dữ liệu lôgic trong máy tính.",
            "Vận dụng bảng chân lí để giải quyết bài toán điều kiện logic."
          ],
          warmup: "Việc thiết kế các mạch điện tử của máy tính có liên quan đến lôgic toán mà người có đóng góp nhiều nhất là nhà toán học người Anh George Boole (1815 - 1864). Ông đã xây dựng nên đại số lôgic, trong đó có các phép toán liên quan đến các yếu tố 'đúng' và 'sai'. Vậy phép toán trên các yếu tố đúng/sai là các phép toán nào?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Các giá trị chân lí và các phép toán lôgic</h3>
              <p>Mệnh đề là một khẳng định có tính chất hoặc đúng hoặc sai. Các giá trị 'Đúng' (True) hay 'Sai' (False) chính là <strong>giá trị chân lí</strong> của mệnh đề.</p>
              <p>Trong máy tính, người ta dùng số <code>1</code> để biểu diễn Đúng và số <code>0</code> để biểu diễn Sai.</p>

              <h4>Bảng các phép toán lôgic cơ bản (SGK Trang 25-26):</h4>
              <div class="overflow-x-auto my-3">
                <table class="w-full text-xs text-center border rounded-lg overflow-hidden">
                  <thead class="bg-slate-200 dark:bg-slate-700 font-bold">
                    <tr><th class="p-2">p</th><th class="p-2">q</th><th class="p-2 text-blue-600">NOT p (Phủ định)</th><th class="p-2 text-emerald-600">p AND q (Phép hội)</th><th class="p-2 text-amber-600">p OR q (Phép tuyển)</th><th class="p-2 text-purple-600">p XOR q (Tuyển loại trừ)</th></tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr class="border-b"><td class="p-2">1 (Đúng)</td><td class="p-2">1 (Đúng)</td><td class="p-2">0</td><td class="p-2 font-bold text-emerald-600">1</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                    <tr class="border-b"><td class="p-2">1 (Đúng)</td><td class="p-2">0 (Sai)</td><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">1</td><td class="p-2 font-bold text-purple-600">1</td></tr>
                    <tr class="border-b"><td class="p-2">0 (Sai)</td><td class="p-2">1 (Đúng)</td><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">1</td><td class="p-2 font-bold text-purple-600">1</td></tr>
                    <tr><td class="p-2">0 (Sai)</td><td class="p-2">0 (Sai)</td><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                  </tbody>
                </table>
              </div>

              <!-- Hộp kiến thức chuẩn KNTT -->
              <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-dashed border-amber-400 dark:border-amber-600 my-4">
                <div class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-bookmark text-amber-500"></i> HỘP KIẾN THỨC (SGK KNTT Trang 27):
                </div>
                <ul class="list-disc pl-5 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <li><strong>Phép NOT:</strong> Phủ định của Đúng là Sai; phủ định của Sai là Đúng.</li>
                  <li><strong>Phép AND:</strong> Chỉ cho kết quả Đúng khi CẢ HAI mệnh đề đều Đúng.</li>
                  <li><strong>Phép OR:</strong> Cho kết quả Đúng khi CÓ ÍT NHẤT MỘT mệnh đề Đúng.</li>
                  <li><strong>Phép XOR:</strong> Cho kết quả Đúng khi HAI MỆNH ĐỀ CÓ GIÁ TRỊ KHÁC NHAU.</li>
                  <li>Mỗi giá trị lôgic chỉ cần <strong>1 bit</strong> để lưu trữ (1 là Đúng, 0 là Sai).</li>
                </ul>
              </div>

              <div class="p-3 bg-rose-50 dark:bg-slate-800/80 rounded-xl border border-rose-200 dark:border-rose-900 my-3">
                <div class="font-bold text-rose-700 dark:text-rose-400 text-xs uppercase mb-1">
                  <i class="fa-solid fa-pen-to-square mr-1"></i> Luyện tập (SGK Trang 27)
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  Cho hai mệnh đề p: "Hôm nay là Chủ nhật", q: "Em được đi công viên". Hãy xác định giá trị của mệnh đề p AND q nếu hôm nay là Thứ Hai và em đang ở trường học. &rarr; <em>Cả hai đều Sai (0), nên p AND q nhận giá trị Sai (0).</em>
                </p>
              </div>
            </div>
          `
        },
        {
          id: "lesson-6",
          number: "Bài 6",
          title: "Bài 6: Dữ liệu âm thanh và hình ảnh",
          page: "Trang 28",
          duration: "45 phút",
          tag: "Đa phương tiện",
          objectives: [
            "Giải thích được nguyên lí số hoá âm thanh (phương pháp PCM).",
            "Giải thích được nguyên lí số hoá hình ảnh (Pixel, độ sâu màu Bit depth, RGB).",
            "Tính toán được dung lượng tệp âm thanh và hình ảnh số."
          ],
          warmup: "Trong tin học, âm thanh và hình ảnh là hai trong các dạng thông tin quan trọng của đa phương tiện (multimedia) mà con người tiếp nhận qua các giác quan. Những thông tin này được lưu trong máy tính như thế nào?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Biểu diễn âm thanh trong máy tính</h3>
              <p>Âm thanh thực tế là sóng âm liên tục dạng hình sin (tín hiệu tương tự - analog). Để máy tính xử lí được, âm thanh phải được số hoá thông qua <strong>Điều chế mã xung (Pulse Code Modulation - PCM)</strong> gồm hai bước:</p>
              <ul class="list-disc pl-5 space-y-1 text-xs my-2">
                <li><strong>Bước 1: Lấy mẫu (Sampling):</strong> Đo biên độ tín hiệu âm thanh ở những khoảng thời gian đều đặn (tần số lấy mẫu, ví dụ chuẩn CD là 44.1 kHz = 44 100 lần/giây).</li>
                <li><strong>Bước 2: Lượng tử hoá & Mã hoá:</strong> Gán biên độ đo được thành một số nhị phân (ví dụ thang 16 bit có 65 536 mức phân biệt).</li>
              </ul>

              <div class="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl my-2 text-xs">
                <strong>Công thức tính Tốc độ bit (Bit rate):</strong><br>
                <code>Bit rate = Tần số lấy mẫu × Số bit cho mỗi mẫu × Số kênh âm thanh</code><br>
                <em>Ví dụ âm thanh Stereo chuẩn CD: 44 100 Hz × 16 bit × 2 kênh = 1 411 200 bit/giây (≈ 1.411 Mbps).</em>
              </div>

              <h3>2. Biểu diễn hình ảnh trong máy tính</h3>
              <p>Hình ảnh được chia thành một lưới các ô vuông rất nhỏ gọi là <strong>Điểm ảnh (Pixel)</strong>.</p>
              <ul class="list-disc pl-5 space-y-1 text-xs my-2">
                <li><strong>Độ sâu màu (Bit depth):</strong> Là số bit cần thiết để mang thông tin màu sắc của một điểm ảnh.</li>
                <li><strong>Hệ màu RGB:</strong> Pha trộn 3 màu gốc Đỏ (Red), Xanh lá (Green), Xanh dương (Blue). Với ảnh màu 24 bit (True Color), mỗi kênh màu dùng 8 bit (nhận từ 0 đến 255), tạo ra hơn <code>256 × 256 × 256 ≈ 16.7 triệu màu</code>.</li>
              </ul>

              <!-- Hộp kiến thức chuẩn KNTT -->
              <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-dashed border-amber-400 dark:border-amber-600 my-4">
                <div class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-bookmark text-amber-500"></i> HỘP KIẾN THỨC (SGK KNTT Trang 32):
                </div>
                <ul class="list-disc pl-5 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <li>Âm thanh được số hoá bằng phương pháp <strong>điều chế mã xung (PCM)</strong> thông qua lấy mẫu và lượng tử hoá tín hiệu tương tự.</li>
                  <li>Hình ảnh số được tạo thành từ các <strong>điểm ảnh (Pixel)</strong>. Mỗi điểm ảnh mang thông tin màu sắc được xác định bởi <strong>độ sâu màu (Bit depth)</strong>.</li>
                  <li>Dung lượng ảnh = <code>Chiều dài (pixel) × Chiều rộng (pixel) × Độ sâu màu (bit)</code>.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          id: "lesson-7",
          number: "Bài 7",
          title: "Bài 7: Thực hành sử dụng thiết bị số thông dụng",
          page: "Trang 33",
          duration: "45 phút",
          tag: "Thực hành thiết bị",
          objectives: [
            "Biết được các thiết bị số cá nhân thông dụng (Smartphone, Tablet, Smartwatch...).",
            "Biết một số tính năng tiêu biểu của thiết bị số cá nhân.",
            "Khai thác sử dụng ứng dụng và dữ liệu trên thiết bị di động, đồng bộ hóa và sao lưu dữ liệu."
          ],
          warmup: "Em có biết các thiết bị trợ thủ số cá nhân hiện nay như điện thoại thông minh, đồng hồ thông minh có thể hỗ trợ những công việc gì trong học tập và sinh hoạt hàng ngày?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Trợ thủ số cá nhân (PDA)</h3>
              <p>Trợ thủ số cá nhân (Personal Digital Assistant - PDA) ban đầu là thiết bị cầm tay nhỏ gọn giúp quản lí lịch công tác, danh bạ, sổ ghi chép. Ngày nay, các chức năng này đã được tích hợp hoàn hảo vào <strong>Điện thoại thông minh (Smartphone)</strong> và <strong>Máy tính bảng (Tablet)</strong>.</p>

              <h3>2. Các kĩ năng thực hành thiết yếu (SGK Trang 34-37)</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
                <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl border-l-4 border-blue-500">
                  <strong>Nhiệm vụ 1: Kết nối và Truyền dữ liệu</strong>
                  <p class="mt-1">Kết nối điện thoại với máy tính qua cáp USB, Wi-Fi Direct hoặc Bluetooth để sao chép hình ảnh, tài liệu học tập.</p>
                </div>
                <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl border-l-4 border-emerald-500">
                  <strong>Nhiệm vụ 2: Đồng bộ hoá đám mây</strong>
                  <p class="mt-1">Thiết lập tài khoản Google/iCloud để tự động sao lưu danh bạ, lịch biểu, ghi chú và hình ảnh lên đám mây tránh mất mát khi hỏng thiết bị.</p>
                </div>
              </div>

              <!-- Hộp kiến thức chuẩn KNTT -->
              <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-dashed border-amber-400 dark:border-amber-600 my-4">
                <div class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-bookmark text-amber-500"></i> HỘP KIẾN THỨC (SGK KNTT Trang 37):
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Thiết bị số cá nhân giúp nâng cao hiệu quả làm việc và học tập. Cần chú ý bảo mật thiết bị (khoá màn hình vân tay/khuôn mặt), thường xuyên cập nhật hệ điều hành và định kì sao lưu dữ liệu quan trọng.
                </p>
              </div>
            </div>
          `
        }
      ]
    },
    {
      id: "topic-2",
      code: "CHỦ ĐỀ 2",
      title: "Mạng máy tính và Internet",
      icon: "fa-solid fa-network-wired",
      color: "from-teal-600 to-emerald-600",
      accent: "#0d9488",
      desc: "Mạng máy tính trong cuộc sống hiện đại, an toàn trên không gian mạng, thực hành khai thác tài nguyên số.",
      lessons: [
        {
          id: "lesson-8",
          number: "Bài 8",
          title: "Bài 8: Mạng máy tính trong cuộc sống hiện đại",
          page: "Trang 38",
          duration: "45 phút",
          tag: "Mạng & Dịch vụ đám mây",
          objectives: [
            "Hiểu mạng máy tính giúp kết nối, chia sẻ tài nguyên và dữ liệu.",
            "Nắm khái niệm Điện toán đám mây (Cloud Computing) và Dịch vụ đám mây (Cloud Service).",
            "Hiểu kết nối IoT (Internet vạn vật) trong đời sống hiện đại."
          ],
          warmup: "Khi em lưu ảnh hoặc bài tập lên Google Drive, dữ liệu đó thực chất nằm ở đâu? Đó có phải là một ví dụ về dịch vụ đám mây không?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Mạng máy tính và sự phát triển của Internet</h3>
              <p>Mạng máy tính ra đời từ nhu cầu chia sẻ dữ liệu và thiết bị phần cứng (như máy in, máy chủ). Ngày nay, Internet kết nối hàng tỉ người dùng và thiết bị trên khắp thế giới thông qua bộ giao thức chuẩn TCP/IP.</p>

              <h3>2. Điện toán đám mây (Cloud Computing)</h3>
              <p>Là mô hình cung cấp các tài nguyên điện toán (máy chủ, lưu trữ, phần mềm, mạng) qua Internet theo nhu cầu, người dùng chỉ trả tiền theo dung lượng hoặc thời gian sử dụng thực tế.</p>
              
              <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-dashed border-amber-400 dark:border-amber-600 my-4">
                <div class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1">
                  <i class="fa-solid fa-bookmark text-amber-500"></i> HỘP KIẾN THỨC (SGK KNTT Trang 41):
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Dịch vụ đám mây (Cloud Service):</strong> Là dịch vụ phân phối/chia sẻ các tài nguyên tin học (phần cứng, phần mềm, cơ sở dữ liệu,...) theo nhu cầu qua Internet với chính sách thanh toán linh hoạt theo hạn mức sử dụng. Ví dụ: Google Drive, OneDrive, iCloud, AWS.
                </p>
              </div>
            </div>
          `
        },
        {
          id: "lesson-9",
          number: "Bài 9",
          title: "Bài 9: An toàn trên không gian mạng",
          page: "Trang 44",
          duration: "45 phút",
          tag: "An toàn thông tin",
          objectives: [
            "Nhận biết các loại phần mềm độc hại: Virus, Sâu máy tính (Worm), Trojan, Ransomware.",
            "Hiểu các hình thức lừa đảo trực tuyến (Phishing, mạo danh).",
            "Áp dụng các biện pháp bảo vệ dữ liệu: mật khẩu mạnh, sao lưu, xác thực 2 bước."
          ],
          warmup: "Em đã từng nhận được email hoặc tin nhắn lạ thông báo trúng thưởng lớn và yêu cầu bấm vào đường link chưa? Đó có thể là chiêu trò gì?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Phân loại phần mềm độc hại (Malware)</h3>
              <div class="space-y-2 my-3 text-xs">
                <div class="p-3 rounded-lg bg-rose-50 dark:bg-slate-800 border-l-4 border-rose-500">
                  <strong class="text-rose-600 text-sm">Virus:</strong> Một đoạn mã độc hại, lây lan bằng cách gắn vào một chương trình/tệp khác. Khi tệp đó chạy, virus được kích hoạt và tiếp tục lây lan sang các tệp khác.
                </div>
                <div class="p-3 rounded-lg bg-amber-50 dark:bg-slate-800 border-l-4 border-amber-500">
                  <strong class="text-amber-600 text-sm">Sâu máy tính (Worm):</strong> Là phần mềm độc hại hoàn chỉnh, tồn tại độc lập, có khả năng tự động nhân bản và phát tán qua mạng Internet bằng cách khai thác lỗ hổng bảo mật hệ điều hành.
                </div>
                <div class="p-3 rounded-lg bg-purple-50 dark:bg-slate-800 border-l-4 border-purple-500">
                  <strong class="text-purple-600 text-sm">Phần mềm nội gián (Trojan):</strong> Đội lốt một ứng dụng hữu ích (trò chơi, tiện ích) nhưng ngầm thực hiện các hành vi gián điệp, mở cửa sau (backdoor) hoặc đánh cắp mật khẩu.
                </div>
              </div>

              <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-dashed border-amber-400 dark:border-amber-600 my-4">
                <div class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1">
                  <i class="fa-solid fa-bookmark text-amber-500"></i> HỘP KIẾN THỨC (SGK KNTT Trang 46):
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Để đảm bảo an toàn trên không gian mạng: Cần cài đặt phần mềm diệt virus có bản quyền, thường xuyên cập nhật hệ điều hành, đặt mật khẩu mạnh (trên 10 kí tự), không mở liên kết lạ, và luôn bật xác thực hai bước (2FA).
                </p>
              </div>
            </div>
          `
        },
        {
          id: "lesson-10",
          number: "Bài 10",
          title: "Bài 10: Thực hành khai thác tài nguyên trên Internet",
          page: "Trang 50",
          duration: "45 phút",
          tag: "Thực hành mạng",
          objectives: [
            "Sử dụng công cụ tìm kiếm nâng cao trên Google (từ khoá trong ngoặc kép, cú pháp filetype:, site:).",
            "Sử dụng dịch vụ lưu trữ và chia sẻ tệp đám mây (Google Drive).",
            "Khai thác bản đồ số và các dịch vụ trực tuyến."
          ],
          warmup: "Làm thế nào để tìm chính xác một tệp đề cương ôn tập môn Tin học dưới dạng tệp PDF trên trang web của Bộ Giáo dục mà không bị lẫn lộn các trang quảng cáo?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Kĩ năng tìm kiếm nâng cao với Google</h3>
              <ul class="list-disc pl-5 space-y-1 text-xs my-2">
                <li><code>"cụm từ chính xác"</code>: Tìm kiếm chính xác thứ tự các từ trong ngoặc kép.</li>
                <li><code>filetype:pdf</code>: Chỉ tìm các tài liệu định dạng tệp PDF.</li>
                <li><code>site:edu.vn</code>: Chỉ tìm kiếm trên các trang web giáo dục có tên miền .edu.vn.</li>
              </ul>
              <h3>2. Khai thác dịch vụ lưu trữ đám mây Google Drive</h3>
              <p>Tạo thư mục, tải tệp lên và phân quyền chia sẻ: Người xem (Viewer), Người nhận xét (Commenter), Người chỉnh sửa (Editor).</p>
            </div>
          `
        }
      ]
    },
    {
      id: "topic-3",
      code: "CHỦ ĐỀ 3",
      title: "Đạo đức, pháp luật và văn hoá trong môi trường số",
      icon: "fa-solid fa-scale-balanced",
      color: "from-purple-600 to-pink-600",
      accent: "#9333ea",
      desc: "Ứng xử trên môi trường số, nghĩa vụ tôn trọng bản quyền, luật an ninh mạng và sở hữu trí tuệ.",
      lessons: [
        {
          id: "lesson-11",
          number: "Bài 11",
          title: "Bài 11: Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền",
          page: "Trang 55",
          duration: "45 phút",
          tag: "Văn hoá số & Bản quyền",
          objectives: [
            "Hiểu các quy tắc ứng xử văn minh, tôn trọng người khác trong không gian mạng.",
            "Nhận biết hành vi vi phạm bản quyền và trách nhiệm pháp lí.",
            "Tôn trọng quyền sở hữu trí tuệ và sử dụng tài nguyên số hợp pháp."
          ],
          warmup: "Việc tự ý tải phim ảnh lậu hoặc sao chép bài văn của bạn đăng lên mạng xã hội mà không ghi nguồn có vi phạm đạo đức và pháp luật không?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Văn hoá và quy tắc ứng xử trên mạng</h3>
              <p>Môi trường số là không gian giao tiếp thực của con người. Mọi hành vi vu khống, xúc phạm danh dự, lan truyền tin giả hoặc bắt nạt trực tuyến đều bị xử phạt theo <strong>Luật An ninh mạng</strong>.</p>

              <h3>2. Bản quyền và quyền tác giả</h3>
              <p>Tác phẩm văn học, nghệ thuật, phần mềm máy tính đều được bảo hộ quyền tác giả ngay khi được sáng tạo ra. Việc bẻ khóa phần mềm (crack), chia sẻ tài liệu có bản quyền khi chưa được phép là hành vi vi phạm pháp luật.</p>

              <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-dashed border-amber-400 dark:border-amber-600 my-4">
                <div class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1">
                  <i class="fa-solid fa-bookmark text-amber-500"></i> HỘP KIẾN THỨC (SGK KNTT Trang 59):
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Tôn trọng bản quyền là nghĩa vụ và đạo đức của người dùng trong môi trường số. Hãy ưu tiên sử dụng <strong>phần mềm nguồn mở (Open Source)</strong> hoặc phần mềm có bản quyền hợp pháp.
                </p>
              </div>
            </div>
          `
        }
      ]
    },
    {
      id: "topic-4",
      code: "CHỦ ĐỀ 4",
      title: "Ứng dụng tin học (Đồ hoạ Inkscape)",
      icon: "fa-solid fa-palette",
      color: "from-rose-500 to-amber-600",
      accent: "#f43f5e",
      desc: "Phần mềm thiết kế đồ hoạ vector Inkscape, đối tượng đồ hoạ, làm việc với đường dẫn (path) và văn bản nghệ thuật.",
      lessons: [
        {
          id: "lesson-12",
          number: "Bài 12",
          title: "Bài 12: Phần mềm thiết kế đồ hoạ",
          page: "Trang 63",
          duration: "45 phút",
          tag: "Đồ hoạ Vector",
          objectives: [
            "Phân biệt đồ hoạ điểm ảnh (Raster / Bitmap) và đồ hoạ vector.",
            "Làm quen giao diện và công cụ cơ bản của phần mềm mã nguồn mở Inkscape.",
            "Vẽ các hình cơ bản: chữ nhật, elip, đa giác, sao."
          ],
          warmup: "Vì sao khi phóng to một bức ảnh chụp thì ảnh bị vỡ hạt (răng cưa), trong khi phóng to logo của một hãng xe thì nét vẽ vẫn mượt mà sắc sảo?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Đồ hoạ điểm ảnh (Raster) vs Đồ hoạ vector</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  <h4 class="font-bold text-blue-600 text-sm">Ảnh Raster (Bitmap)</h4>
                  <p class="text-xs mt-1">Cấu tạo từ lưới các điểm ảnh (pixel). Phóng to sẽ bị vỡ hạt, mờ nét. Định dạng: JPG, PNG, BMP.</p>
                </div>
                <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  <h4 class="font-bold text-emerald-600 text-sm">Ảnh Vector</h4>
                  <p class="text-xs mt-1">Biểu diễn bằng các phương trình toán học (đoạn thẳng, đường cong, màu tô). Phóng to thu nhỏ tùy ý không bao giờ vỡ nét! Định dạng: SVG, EPS.</p>
                </div>
              </div>

              <h3>2. Khái niệm Màu tô (Fill) và Màu vẽ viền (Stroke)</h3>
              <p>Mỗi đối tượng hình học trong Inkscape có hai thuộc tính màu chính: <strong>Fill</strong> (màu bên trong) và <strong>Stroke</strong> (màu đường viền xung quanh).</p>
            </div>
          `
        }
      ]
    },
    {
      id: "topic-5",
      code: "CHỦ ĐỀ 5",
      title: "Giải quyết vấn đề với sự trợ giúp của máy tính (Python)",
      icon: "fa-brands fa-python",
      color: "from-amber-500 to-orange-600",
      accent: "#f59e0b",
      desc: "Trọng tâm SGK KNTT: Ngôn ngữ lập trình Python, biến, lệnh gán, vào ra, rẽ nhánh if, vòng lặp for/while, danh sách list, xâu kí tự str, hàm def, kiểm thử và gỡ lỗi.",
      lessons: [
        {
          id: "lesson-16",
          number: "Bài 16",
          title: "Bài 16: Ngôn ngữ lập trình bậc cao và Python",
          page: "Trang 86",
          duration: "45 phút",
          tag: "Khởi đầu Python",
          objectives: [
            "Hiểu khái niệm ngôn ngữ lập trình bậc cao và chương trình dịch.",
            "Làm quen với môi trường lập trình Python (chế độ gõ lệnh trực tiếp Shell và chế độ soạn thảo Script).",
            "Thực hiện các lệnh tính toán đơn giản trong cửa sổ tương tác."
          ],
          warmup: "Máy tính chỉ hiểu ngôn ngữ máy (dãy bit 0 và 1). Vậy làm thế nào để con người có thể viết chỉ lệnh bằng tiếng Anh ngắn gọn mà máy tính vẫn hiểu được?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Ngôn ngữ lập trình bậc cao</h3>
              <p>Ngôn ngữ máy trực tiếp sử dụng mã nhị phân nên cực kì khó viết. <strong>Ngôn ngữ lập trình bậc cao</strong> (như Python, C++, Java) sử dụng các từ ngữ gần gũi với tiếng Anh tự nhiên và toán học, giúp con người dễ đọc, dễ viết và bảo trì mã nguồn.</p>
              <p>Chương trình dịch (Trình thông dịch Interpreter hoặc Trình biên dịch Compiler) sẽ chuyển đổi mã nguồn bậc cao thành ngôn ngữ máy để CPU thực thi.</p>

              <h3>2. Hai chế độ làm việc trong Python</h3>
              <ul class="list-disc pl-5 space-y-1 text-xs my-2">
                <li><strong>Chế độ gõ lệnh trực tiếp (Interactive Mode):</strong> Dấu nhắc lệnh <code>>>></code>. Gõ từng dòng lệnh, nhấn Enter là có ngay kết quả.</li>
                <li><strong>Chế độ soạn thảo (Script Mode):</strong> Soạn thảo toàn bộ chương trình trong tệp <code>.py</code>, lưu lại và nhấn <strong>Run (F5)</strong> để thực thi.</li>
              </ul>
            </div>
          `
        },
        {
          id: "lesson-17",
          number: "Bài 17",
          title: "Bài 17: Biến và lệnh gán",
          page: "Trang 91",
          duration: "45 phút",
          tag: "Biến & Toán tử",
          objectives: [
            "Hiểu khái niệm biến và quy tắc đặt tên biến trong Python.",
            "Sử dụng lệnh gán giá trị cho biến (=).",
            "Nhận biết các từ khoá (Keyword) của Python.",
            "Thực hiện các phép toán số học: +, -, *, /, //, %, **."
          ],
          warmup: "Trong toán học x = 5 có nghĩa là khẳng định x bằng 5. Nhưng trong lập trình, câu lệnh x = x + 1 có ý nghĩa là gì?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Biến và Lệnh gán</h3>
              <p><strong>Biến (Variable)</strong> là một tên (định danh) được tạo ra khi lập trình để tham chiếu đến một vùng nhớ chứa dữ liệu.</p>
              <pre><code class="language-python">x = 10
tong = x + 5
print(tong) # 15
</code></pre>
            </div>
          `
        },
        {
          id: "lesson-18",
          number: "Bài 18",
          title: "Bài 18: Các lệnh vào ra đơn giản",
          page: "Trang 97",
          duration: "45 phút",
          tag: "Nhập xuất dữ liệu",
          objectives: [
            "Sử dụng hàm print() để xuất dữ liệu ra màn hình với các tham số sep và end.",
            "Sử dụng hàm input() để nhập dữ liệu từ bàn phím.",
            "Thực hiện chuyển đổi kiểu dữ liệu bằng các hàm int(), float(), str()."
          ],
          warmup: "Làm thế nào để chương trình có thể hỏi tên học sinh và sau đó in ra lời chào mừng kèm theo tên của bạn đó?",
          content: `
            <div class="lesson-rich-text">
              <h3>1. Lệnh xuất dữ liệu: <code>print()</code></h3>
              <p>Lệnh <code>print()</code> in các giá trị ra màn hình, phân cách nhau bởi dấu cách và tự động xuống dòng ở cuối.</p>
              <h3>2. Lệnh nhập dữ liệu: <code>input()</code></h3>
              <p>Lệnh <code>input()</code> luôn trả về kiểu xâu kí tự (str). Do đó khi cần tính toán số học, ta phải ép kiểu bằng <code>int()</code> hoặc <code>float()</code>.</p>
            </div>
          `
        },
        {
          id: "lesson-19",
          number: "Bài 19",
          title: "Bài 19: Câu lệnh rẽ nhánh if",
          page: "Trang 101",
          duration: "45 phút",
          tag: "Cấu trúc rẽ nhánh",
          objectives: [
            "Hiểu biểu thức lôgic (nhận giá trị True hoặc False).",
            "Sử dụng câu lệnh rẽ nhánh dạng thiếu (if) và dạng đầy đủ (if - else).",
            "Hiểu quy tắc thụt lề (Indentation) bắt buộc để xác định khối lệnh trong Python."
          ],
          warmup: "Trong đời sống: 'Nếu trời mưa thì em mang theo áo mưa, ngược lại thì em đi bộ cùng bạn'. Máy tính mô tả cấu trúc quyết định này như thế nào?",
          content: `
            <div class="lesson-rich-text">
              <h3>Cú pháp câu lệnh if - else</h3>
              <pre><code class="language-python">if &lt;điều kiện&gt;:
    &lt;khối lệnh khi Đúng&gt;
else:
    &lt;khối lệnh khi Sai&gt;
</code></pre>
            </div>
          `
        },
        {
          id: "lesson-20",
          number: "Bài 20",
          title: "Bài 20: Câu lệnh lặp for",
          page: "Trang 105",
          duration: "45 phút",
          tag: "Vòng lặp for",
          objectives: [
            "Hiểu hàm sinh dãy số range().",
            "Sử dụng câu lệnh lặp for để lặp với số lần biết trước.",
            "Áp dụng vòng lặp for để giải quyết các bài toán tính tổng, đếm số."
          ],
          warmup: "Nếu cần in 100 lần dòng chữ 'Em hứa sẽ làm bài tập đầy đủ', thay vì gõ 100 lệnh print, em sẽ dùng cấu trúc nào?",
          content: `
            <div class="lesson-rich-text">
              <h3>Hàm <code>range()</code> và vòng lặp for</h3>
              <p>Hàm <code>range(start, stop, step)</code> sinh dãy số. Vòng lặp <code>for</code> duyệt tuần tự từng phần tử trong dãy số đó.</p>
            </div>
          `
        },
        {
          id: "lesson-29",
          number: "Bài 29",
          title: "Bài 29: Nhận biết lỗi chương trình",
          page: "Trang 141",
          duration: "45 phút",
          tag: "Sửa lỗi code",
          objectives: [
            "Phân biệt 3 loại lỗi chính: Lỗi cú pháp (Syntax error), Lỗi ngoại lệ khi chạy (Runtime error) và Lỗi ngữ nghĩa (Logic error).",
            "Đọc và hiểu thông báo lỗi tiếng Anh của trình thông dịch Python.",
            "Rèn luyện kỹ năng gỡ lỗi (Debugging)."
          ],
          warmup: "Khi chương trình báo lỗi màu đỏ và dừng lại, đó là lỗi gì? Có phải mọi lỗi đều làm chương trình dừng lại không?",
          content: `
            <div class="lesson-rich-text">
              <h3>Ba loại lỗi chương trình (SGK Trang 141-143)</h3>
              <ul class="space-y-2 text-xs">
                <li><strong>1. Lỗi cú pháp (SyntaxError):</strong> Vi phạm quy tắc ngôn ngữ Python (quên dấu :, thụt lề sai...).</li>
                <li><strong>2. Lỗi ngoại lệ (Exceptions):</strong> Xảy ra khi đang chạy (chia cho 0 ZeroDivisionError, sai kiểu dữ liệu TypeError...).</li>
                <li><strong>3. Lỗi ngữ nghĩa (Logic Error):</strong> Chương trình chạy bình thường nhưng kết quả ra sai lệch.</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      id: "topic-6",
      code: "CHỦ ĐỀ 6",
      title: "Hướng nghiệp với tin học",
      icon: "fa-solid fa-user-tie",
      color: "from-sky-600 to-cyan-600",
      accent: "#0284c7",
      desc: "Nghề thiết kế đồ hoạ máy tính và Nghề phát triển phần mềm trong kỉ nguyên số.",
      lessons: [
        {
          id: "lesson-33",
          number: "Bài 33",
          title: "Bài 33: Nghề thiết kế đồ hoạ máy tính",
          page: "Trang 156",
          duration: "45 phút",
          tag: "Hướng nghiệp",
          objectives: [
            "Hiểu đặc thù công việc của nhà thiết kế đồ hoạ máy tính.",
            "Nắm vững các kĩ năng và kiến thức cần chuẩn bị.",
            "Nhận biết nhu cầu nhân lực trong nền kinh tế sáng tạo."
          ],
          warmup: "Em có thích sáng tạo logo, poster, banner hay giao diện ứng dụng điện thoại không? Nghề đó được gọi là gì?",
          content: `
            <div class="lesson-rich-text">
              <h3>Nghề thiết kế đồ hoạ máy tính</h3>
              <p>Là ngành nghề sử dụng các phần mềm máy tính (như Inkscape, Photoshop, Illustrator) để truyền tải thông điệp bằng hình ảnh, màu sắc, chữ viết và không gian nghệ thuật.</p>
            </div>
          `
        },
        {
          id: "lesson-34",
          number: "Bài 34",
          title: "Bài 34: Nghề phát triển phần mềm",
          page: "Trang 160",
          duration: "45 phút",
          tag: "Hướng nghiệp",
          objectives: [
            "Mô tả quy trình phát triển một sản phẩm phần mềm.",
            "Hiểu các vị trí: Lập trình viên (Developer), Kiểm thử viên (Tester), Thiết kế hệ thống.",
            "Định hướng học tập và rèn luyện tư duy lập trình."
          ],
          warmup: "Làm thế nào một ứng dụng như TikTok, Zalo hay game Liên Quân có thể đến tay hàng triệu người dùng?",
          content: `
            <div class="lesson-rich-text">
              <h3>Quy trình phát triển phần mềm</h3>
              <p>Gồm các giai đoạn: Khảo sát yêu cầu &rarr; Thiết kế hệ thống &rarr; Lập trình viết mã (Coding) &rarr; Kiểm thử gỡ lỗi (Testing) &rarr; Triển khai và bảo trì.</p>
            </div>
          `
        }
      ]
    }
  ],

  // BẢNG GIẢI THÍCH THUẬT NGỮ CHÍNH THỨC CỦA BỘ SÁCH KNTT (Trang 166 - 167 SGK)
  glossary: [
    {
      term: "Biến (Variable)",
      category: "Lập trình Python",
      pageRef: "Trang 91 SGK",
      vietnamese: "Tên định danh tham chiếu dữ liệu bộ nhớ",
      definition: "Một tên (định danh) được tạo ra khi lập trình để tham chiếu dữ liệu trong bộ nhớ máy tính.",
      example: "tuoi = 16 (biến tên là tuoi tham chiếu đến giá trị số nguyên 16).",
      icon: "fa-solid fa-tag"
    },
    {
      term: "Dịch vụ đám mây (Cloud Service)",
      category: "Mạng máy tính & Internet",
      pageRef: "Trang 41 SGK",
      vietnamese: "Dịch vụ chia sẻ tài nguyên tin học trực tuyến",
      definition: "Dịch vụ phân phối/chia sẻ các tài nguyên tin học (phần cứng, phần mềm,...) theo nhu cầu qua Internet với chính sách thanh toán theo hạn mức sử dụng.",
      example: "Google Drive, Microsoft OneDrive, máy chủ đám mây AWS.",
      icon: "fa-solid fa-cloud"
    },
    {
      term: "Điểm neo (Nodes)",
      category: "Ứng dụng tin học (Đồ hoạ)",
      pageRef: "Trang 76 SGK",
      vietnamese: "Điểm nối và biến đổi đối tượng dạng đường",
      definition: "Điểm đầu mút hoặc điểm nối giữa các đoạn của đối tượng dạng đường thường được dùng để biến đổi hình trong Inkscape.",
      example: "Điểm neo trơn có hai đường chỉ hướng cùng phương; điểm neo góc có thể đổi hướng cong độc lập.",
      icon: "fa-solid fa-bezier-curve"
    },
    {
      term: "Điều chế mã xung (PCM)",
      category: "Máy tính và xã hội tri thức",
      pageRef: "Trang 28 SGK",
      vietnamese: "Pulse Code Modulation - Số hoá âm thanh",
      definition: "Mã hoá tín hiệu âm thanh bằng cách lấy mẫu biên độ tín hiệu theo những khoảng thời gian đều đặn. PCM là dạng tiêu chuẩn của âm thanh kĩ thuật số.",
      example: "Tệp âm thanh chuẩn định dạng WAV không nén chất lượng phòng thu.",
      icon: "fa-solid fa-wave-square"
    },
    {
      term: "Độ sâu màu (Bit depth)",
      category: "Máy tính và xã hội tri thức",
      pageRef: "Trang 30 SGK",
      vietnamese: "Số bit mang thông tin màu của điểm ảnh",
      definition: "Số bit cần thiết để mang thông tin màu của một điểm ảnh (pixel) trong biểu diễn ảnh số.",
      example: "Ảnh TrueColor 24 bit cho phép biểu diễn hơn 16,7 triệu sắc thái màu khác nhau.",
      icon: "fa-solid fa-palette"
    },
    {
      term: "Đối số (Argument) của hàm",
      category: "Lập trình Python",
      pageRef: "Trang 131 SGK",
      vietnamese: "Giá trị thực tế truyền vào cho tham số",
      definition: "Giá trị thực tế truyền vào cho tham số khi gọi hàm thực thi.",
      example: "Trong lệnh tinh_tong(15, 20), hai giá trị 15 và 20 là các đối số truyền vào.",
      icon: "fa-solid fa-arrow-right-to-bracket"
    },
    {
      term: "Hàm (Function)",
      category: "Lập trình Python",
      pageRef: "Trang 127 SGK",
      vietnamese: "Khối lệnh đóng gói tái sử dụng",
      definition: "Một nhóm các lệnh có liên quan được đóng gói thành một đơn vị độc lập để thực hiện một tác vụ/nhiệm vụ cụ thể nào đó.",
      example: "Định nghĩa bằng từ khoá def: def chao_hoi(ten): print('Xin chào', ten).",
      icon: "fa-solid fa-cubes"
    },
    {
      term: "Kết nối vạn vật (IoT)",
      category: "Máy tính và xã hội tri thức",
      pageRef: "Trang 12 SGK",
      vietnamese: "Internet of Things - Mạng lưới vạn vật kết nối",
      definition: "Liên kết các thiết bị thông minh để tự động thu thập, truyền và xử lí dữ liệu phục vụ cho mục đích ứng dụng.",
      example: "Nhà thông minh (Smart Home): cảm biến tự động bật máy điều hòa và đèn chiếu sáng.",
      icon: "fa-solid fa-network-wired"
    },
    {
      term: "Kiểm thử (Test)",
      category: "Lập trình Python",
      pageRef: "Trang 145 SGK",
      vietnamese: "Chạy thử nghiệm tìm lỗi chương trình",
      definition: "Công việc kiểm tra và chạy thử chương trình với các bộ dữ liệu đầu vào khác nhau nhằm mục đích tìm ra lỗi của chương trình.",
      example: "Kiểm thử với các trường hợp đặc biệt: n = 0, n âm, số rất lớn.",
      icon: "fa-solid fa-vial-circle-check"
    },
    {
      term: "Kiểu dữ liệu (Data type)",
      category: "Lập trình Python",
      pageRef: "Trang 88 SGK",
      vietnamese: "Phân loại dữ liệu và các phép xử lí",
      definition: "Phân loại dữ liệu sử dụng trong chương trình có chung cách biểu diễn và các phép xử lí (int, float, str, bool, list).",
      example: "int (số nguyên 5), float (số thực 3.14), str (xâu 'Tin học'), bool (True/False).",
      icon: "fa-solid fa-cubes-stacked"
    },
    {
      term: "Lỗi ngoại lệ (Exception error)",
      category: "Lập trình Python",
      pageRef: "Trang 141 SGK",
      vietnamese: "Lỗi phát sinh khi điều kiện xử lí không thích hợp",
      definition: "Lỗi gây ra do điều kiện xử lí không thích hợp như chia cho 0 (ZeroDivisionError), mở tệp không tồn tại,...",
      example: "10 / 0 gây ra ZeroDivisionError: division by zero.",
      icon: "fa-solid fa-triangle-exclamation"
    },
    {
      term: "Sâu máy tính (Worm)",
      category: "Mạng máy tính & Internet",
      pageRef: "Trang 46 SGK",
      vietnamese: "Mã độc tự nhân bản lây lan qua mạng",
      definition: "Phần mềm độc hại, hoàn chỉnh, tồn tại độc lập, có khả năng tự động nhân bản và lây lan nhờ khai thác lỗ hổng bảo mật của hệ điều hành.",
      example: "Sâu Conficker, WannaCry lây lan qua các máy tính trong cùng mạng nội bộ.",
      icon: "fa-solid fa-worm"
    },
    {
      term: "Tham số (Parameters) của hàm",
      category: "Lập trình Python",
      pageRef: "Trang 131 SGK",
      vietnamese: "Biến mô tả trong định nghĩa hàm",
      definition: "Biến được mô tả trong danh sách khai báo đầu vào của hàm.",
      example: "Trong dòng lệnh def chu_vi(a, b):, hai biến a và b là các tham số.",
      icon: "fa-solid fa-sliders"
    },
    {
      term: "Thiết bị số",
      category: "Máy tính và xã hội tri thức",
      pageRef: "Trang 6 SGK",
      vietnamese: "Thiết bị làm việc với thông tin số",
      definition: "Thiết bị dùng với thông tin số - thông tin được mã hoá trong hệ nhị phân (gồm các bit 0 và 1).",
      example: "Máy tính xách tay, thẻ nhớ, điện thoại thông minh, máy ảnh số.",
      icon: "fa-solid fa-laptop-code"
    },
    {
      term: "Thiết bị thông minh (Smart device)",
      category: "Máy tính và xã hội tri thức",
      pageRef: "Trang 11 SGK",
      vietnamese: "Thiết bị tự chủ, kết nối mạng và có yếu tố AI",
      definition: "Thiết bị có khả năng kết nối mạng, hoạt động tự động thích ứng với bối cảnh không cần sự can thiệp của con người; thiết bị có các yếu tố trí tuệ nhân tạo.",
      example: "Đồng hồ thông minh theo dõi nhịp tim, robot hút bụi tự quét bản đồ nhà.",
      icon: "fa-solid fa-microchip"
    },
    {
      term: "Từ khoá (Keyword)",
      category: "Lập trình Python",
      pageRef: "Trang 91 SGK",
      vietnamese: "Từ dành riêng quy định ý nghĩa cú pháp",
      definition: "Từ dành riêng quy định ý nghĩa câu lệnh của chương trình, không được dùng để đặt tên cho các đối tượng (như biến, hàm) của chương trình.",
      example: "Các từ khoá trong Python: if, else, for, while, def, return, in, and, or...",
      icon: "fa-solid fa-key"
    },
    {
      term: "Virus máy tính",
      category: "Mạng máy tính & Internet",
      pageRef: "Trang 46 SGK",
      vietnamese: "Đoạn mã độc lây nhiễm gắn vào tệp khác",
      definition: "Một đoạn mã độc hại lây lan bằng cách gắn vào một chương trình/tệp tin, khi tệp được thực hiện, đoạn mã sẽ gây hại và giải phóng mã độc để lây lan.",
      example: "Virus lây qua USB hoặc tệp tài liệu Office có chứa macro độc hại.",
      icon: "fa-solid fa-virus"
    }
  ],

  // PHÒNG THI & KIỂM TRA TRỰC TUYẾN (EXAMS & TESTS SUITE)
  exams: [
    {
      id: "exam_15m_1",
      title: "Kiểm Tra 15 Phút - Đề Số 1 (Chủ Đề 1)",
      category: "15min",
      badge: "15 Phút",
      durationMinutes: 15,
      scope: "Chủ đề 1: Thông tin, thiết bị số & hệ nhị phân",
      description: "Đề kiểm tra nhanh 10 câu trắc nghiệm nhằm kiểm tra mức độ hiểu bài về dữ liệu, thông tin, bảng mã và hệ nhị phân.",
      questions: [
        {
          id: "ex1_q1",
          question: "Đơn vị dữ liệu nhỏ nhất mà máy tính truy cập được là gì?",
          options: ["A. bit", "B. Byte", "C. Kilobyte", "D. Megabyte"],
          correct: 1,
          explanation: "Theo SGK KNTT Trang 8: Byte là đơn vị dữ liệu nhỏ nhất mà máy tính truy cập được. Một byte gồm 8 bit."
        },
        {
          id: "ex1_q2",
          question: "1 Megabyte (MB) tương đương với bao nhiêu Kilobyte (KB)?",
          options: ["A. 1000 KB", "B. 1024 KB", "C. 8 KB", "D. 2048 KB"],
          correct: 1,
          explanation: "1 MB = 2¹⁰ KB = 1024 KB."
        },
        {
          id: "ex1_q3",
          question: "Số nhị phân 1011₂ khi chuyển đổi sang hệ thập phân có giá trị là bao nhiêu?",
          options: ["A. 9", "B. 10", "C. 11", "D. 13"],
          correct: 2,
          explanation: "1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11."
        },
        {
          id: "ex1_q4",
          question: "Theo SGK KNTT, phát biểu nào sau đây về thông tin và dữ liệu là ĐÚNG?",
          options: [
            "A. Thông tin và dữ liệu là hai khái niệm hoàn toàn đồng nhất",
            "B. Dữ liệu là ý nghĩa của thông tin",
            "C. Cùng một thông tin có thể được thể hiện bởi nhiều loại dữ liệu khác nhau",
            "D. Dữ liệu không bao giờ bị sai lệch khi truyền đi"
          ],
          correct: 2,
          explanation: "Theo Hộp kiến thức trang 7: Cùng một thông tin có thể được thể hiện bởi nhiều loại dữ liệu khác nhau (văn bản, hình ảnh, âm thanh...)."
        },
        {
          id: "ex1_q5",
          question: "Mệnh đề nào sau đây về bảng mã Unicode là ĐÚNG?",
          options: [
            "A. Chỉ dùng được cho bảng chữ cái tiếng Anh",
            "B. Chỉ mã hoá được tối đa 128 kí tự",
            "C. Là bộ mã chuẩn quốc tế mã hoá thống nhất mọi ngôn ngữ trên thế giới",
            "D. Do công ty Microsoft phát minh độc quyền"
          ],
          correct: 2,
          explanation: "Unicode là chuẩn quốc tế mã hoá mọi ngôn ngữ, bao gồm trọn vẹn tiếng Việt có dấu (Trang 19 SGK)."
        },
        {
          id: "ex1_q6",
          question: "Thiết bị nào sau đây KHÔNG PHẢI là thiết bị số?",
          options: [
            "A. Máy tính bảng (Tablet)",
            "B. Đồng hồ cơ học dùng dây cót",
            "C. Thẻ nhớ micro SD",
            "D. Điện thoại thông minh"
          ],
          correct: 1,
          explanation: "Đồng hồ cơ dùng dây cót hoạt động thuần cơ học, không xử lí dữ liệu số hoá 0 và 1 (Xem Hình 1.2 Trang 9 SGK)."
        },
        {
          id: "ex1_q7",
          question: "Kết quả của phép cộng nhị phân 1₂ + 1₂ là:",
          options: ["A. 2₂", "B. 10₂", "C. 11₂", "D. 0₂"],
          correct: 1,
          explanation: "Trong hệ nhị phân, 1 + 1 = 10 (viết 0 nhớ 1 sang hàng bên trái)."
        },
        {
          id: "ex1_q8",
          question: "Trong đại số lôgic, phép toán nào chỉ cho kết quả Đúng (1) khi cả hai mệnh đề đều Đúng (1)?",
          options: ["A. Phép OR", "B. Phép AND", "C. Phép NOT", "D. Phép XOR"],
          correct: 1,
          explanation: "Phép hội AND chỉ cho kết quả 1 khi cả hai toán hạng đều bằng 1 (Trang 26 SGK)."
        },
        {
          id: "ex1_q9",
          question: "Phương pháp cơ bản để số hoá âm thanh trong máy tính hiện nay là gì?",
          options: [
            "A. Điều chế mã xung (PCM)",
            "B. Bảng mã Unicode",
            "C. Nén đồ hoạ Vector",
            "D. Chuyển đổi mã ASCII"
          ],
          correct: 0,
          explanation: "Số hoá âm thanh sử dụng phương pháp điều chế mã xung Pulse Code Modulation (PCM) (Trang 28 SGK)."
        },
        {
          id: "ex1_q10",
          question: "Độ sâu màu (Bit depth) 24 bit trong ảnh True Color cho phép biểu diễn khoảng bao nhiêu màu?",
          options: [
            "A. 256 màu",
            "B. 65 536 màu",
            "C. Hơn 16.7 triệu màu",
            "D. 4 tỉ màu"
          ],
          correct: 2,
          explanation: "2²⁴ = 16 777 216 (khoảng hơn 16.7 triệu màu) (Trang 30 SGK)."
        }
      ]
    },
    {
      id: "exam_15m_2",
      title: "Kiểm Tra 15 Phút - Đề Số 2 (Chủ Đề 2 & 3)",
      category: "15min",
      badge: "15 Phút",
      durationMinutes: 15,
      scope: "Chủ đề 2: Mạng, Internet & An toàn thông tin, Chủ đề 3: Đạo đức số",
      description: "Đề kiểm tra nhanh đánh giá kiến thức về dịch vụ đám mây, các loại mã độc hại và văn hoá ứng xử số.",
      questions: [
        {
          id: "ex2_q1",
          question: "Dịch vụ nào sau đây KHÔNG PHẢI là dịch vụ lưu trữ đám mây?",
          options: ["A. Google Drive", "B. Microsoft OneDrive", "C. Ổ cứng gắn ngoài USB", "D. Apple iCloud"],
          correct: 2,
          explanation: "Ổ cứng ngoài USB là thiết bị phần cứng cục bộ, không phải dịch vụ mạng đám mây qua Internet."
        },
        {
          id: "ex2_q2",
          question: "Phần mềm độc hại nào có khả năng tự động nhân bản và lây lan độc lập qua mạng Internet?",
          options: ["A. Sâu máy tính (Worm)", "B. Phần mềm gõ tiếng Việt Unikey", "C. Trình duyệt Google Chrome", "D. Hệ điều hành Linux"],
          correct: 0,
          explanation: "Sâu máy tính (Worm) tồn tại độc lập và tự động phát tán qua mạng khai thác lỗ hổng bảo mật (Trang 46 SGK)."
        },
        {
          id: "ex2_q3",
          question: "Biện pháp nào sau đây là thói quen tốt nhất để bảo vệ tài khoản cá nhân?",
          options: [
            "A. Dùng ngày sinh nhật làm mật khẩu cho dễ nhớ",
            "B. Bật tính năng xác thực hai yếu tố (2FA)",
            "C. Đăng nhập tài khoản trên các máy tính công cộng mà không đăng xuất",
            "D. Gửi mật khẩu qua tin nhắn cho bạn bè giữ hộ"
          ],
          correct: 1,
          explanation: "Xác thực hai bước (2FA) bảo vệ tài khoản ngay cả khi mật khẩu bị lộ."
        },
        {
          id: "ex2_q4",
          question: "Phần mềm mã nguồn mở (Open Source) có đặc điểm nổi bật nào?",
          options: [
            "A. Bắt buộc người dùng phải trả phí bản quyền hàng tháng",
            "B. Giấu kín mã nguồn không cho ai xem",
            "C. Công khai mã nguồn cho phép cộng đồng xem, sửa đổi và cải tiến",
            "D. Chỉ chạy được trên điện thoại iPhone"
          ],
          correct: 2,
          explanation: "Mã nguồn mở công khai mã nguồn để mọi người học hỏi và phát triển tự do (Trang 57 SGK)."
        },
        {
          id: "ex2_q5",
          question: "Hành vi nào sau đây vi phạm bản quyền và Luật An ninh mạng?",
          options: [
            "A. Tự vẽ tranh và đăng lên trang cá nhân",
            "B. Tải phần mềm bẻ khoá (crack) và chia sẻ lên mạng xã hội",
            "C. Dẫn nguồn tác giả khi trích dẫn bài thơ",
            "D. Sử dụng phần mềm nguồn mở Python"
          ],
          correct: 1,
          explanation: "Phát tán phần mềm bẻ khoá là hành vi xâm phạm quyền tác giả và vi phạm bản quyền nghiêm trọng."
        },
        {
          id: "ex2_q6",
          question: "Hình thức tấn công mạng nào dùng email hoặc website giả mạo ngân hàng để lừa mật khẩu người dùng?",
          options: ["A. Phishing (Lừa đảo giả mạo)", "B. Cập nhật hệ điều hành", "C. Nén tệp Zip", "D. Sao lưu đám mây"],
          correct: 0,
          explanation: "Phishing là chiêu trò giả mạo tổ chức uy tín để chiếm đoạt thông tin đăng nhập."
        },
        {
          id: "ex2_q7",
          question: "Cú pháp tìm kiếm nào trên Google giúp tìm chính xác cụm từ 'Tin học 10'?",
          options: ["A. Tin học 10", "B. \"Tin học 10\"", "C. [Tin học 10]", "D. search: Tin học 10"],
          correct: 1,
          explanation: "Đặt cụm từ trong cặp ngoặc kép \"...\" để tìm kiếm chính xác thứ tự các từ (Trang 50 SGK)."
        },
        {
          id: "ex2_q8",
          question: "Để tìm kiếm tài liệu ôn tập định dạng PDF trên Google, ta dùng từ khoá nào?",
          options: ["A. filetype:pdf", "B. format=pdf", "C. type:document", "D. extension:pdf"],
          correct: 0,
          explanation: "Cú pháp filetype:pdf lọc chính xác các tệp PDF."
        },
        {
          id: "ex2_q9",
          question: "Đặc điểm của Trojan (Phần mềm nội gián) là gì?",
          options: [
            "A. Ngụy trang dưới dạng ứng dụng hữu ích để ngầm đánh cắp dữ liệu",
            "B. Tự động sửa lỗi cho máy tính",
            "C. Tăng tốc độ đường truyền Wi-Fi",
            "D. Giúp máy tính không bị nóng"
          ],
          correct: 0,
          explanation: "Trojan ẩn mình trong các ứng dụng có vẻ vô hại để thực hiện hành vi gián điệp (Trang 46 SGK)."
        },
        {
          id: "ex2_q10",
          question: "Internet vạn vật (IoT) là gì?",
          options: [
            "A. Mạng liên kết các thiết bị thông minh để tự động thu thập và xử lí dữ liệu",
            "B. Một trang web thương mại điện tử",
            "C. Trò chơi trực tuyến có nhiều người tham gia",
            "D. Một loại cáp mạng mới"
          ],
          correct: 0,
          explanation: "IoT là liên kết các thiết bị thông minh phục vụ tự động hoá đời sống (Trang 12 SGK)."
        }
      ]
    },
    {
      id: "exam_midterm_1",
      title: "Đề Thi Giữa Học Kỳ I - Đề Số 1 (Chuẩn Ma Trận GDPT 2018)",
      category: "midterm",
      badge: "Giữa Kỳ I",
      durationMinutes: 45,
      scope: "Chủ đề 1 (Máy tính & xã hội tri thức) và Chủ đề 2 (Mạng & Internet)",
      description: "Đề thi chính thức 20 câu trắc nghiệm bao quát toàn bộ kiến thức nửa đầu học kỳ I theo đúng khung ma trận kiểm tra đánh giá của Bộ Giáo dục & Đào tạo.",
      questions: [
        {
          id: "gk1_q1",
          question: "Thiết bị nào sau đây thực hiện chức năng biến đổi dữ liệu thành thông tin có ích?",
          options: ["A. Bàn phím máy tính", "B. Bộ vi xử lý CPU", "C. Màn hình máy tính", "D. Chuột quang"],
          correct: 1,
          explanation: "CPU là bộ não thực hiện tính toán và biến đổi dữ liệu trong bộ nhớ thành thông tin."
        },
        {
          id: "gk1_q2",
          question: "Một thẻ nhớ dung lượng 32 GB bằng bao nhiêu Megabyte (MB)?",
          options: ["A. 32 000 MB", "B. 32 768 MB", "C. 3 200 MB", "D. 65 536 MB"],
          correct: 1,
          explanation: "32 GB = 32 × 1024 MB = 32 768 MB."
        },
        {
          id: "gk1_q3",
          question: "Số nhị phân 11100₂ có giá trị thập phân bằng bao nhiêu?",
          options: ["A. 24", "B. 26", "C. 28", "D. 30"],
          correct: 2,
          explanation: "11100₂ = 1×2⁴ + 1×2³ + 1×2² + 0×2¹ + 0×2⁰ = 16 + 8 + 4 = 28."
        },
        {
          id: "gk1_q4",
          question: "Số thập phân 25 khi đổi sang hệ nhị phân sẽ là dãy bit nào?",
          options: ["A. 11001₂", "B. 10101₂", "C. 11100₂", "D. 10011₂"],
          correct: 0,
          explanation: "25 = 16 + 8 + 1 = 1×2⁴ + 1×2³ + 0×2² + 0×2¹ + 1×2⁰ = 11001₂."
        },
        {
          id: "gk1_q5",
          question: "Cho biểu thức lôgic: (1 AND 0) OR (NOT 0). Kết quả của biểu thức là gì?",
          options: ["A. 0 (Sai)", "B. 1 (Đúng)", "C. Không xác định", "D. 2"],
          correct: 1,
          explanation: "1 AND 0 = 0. NOT 0 = 1. Do đó: 0 OR 1 = 1 (Đúng)."
        },
        {
          id: "gk1_q6",
          question: "Độ phân giải của một màn hình là 1920 × 1080 có nghĩa là gì?",
          options: [
            "A. Màn hình có 1920 điểm ảnh chiều ngang và 1080 điểm ảnh chiều dọc",
            "B. Màn hình có kích thước đường chéo 1920 cm",
            "C. Màn hình nặng 1920 gram",
            "D. Tần số quét của màn hình là 1080 Hz"
          ],
          correct: 0,
          explanation: "Độ phân giải biểu thị số lượng điểm ảnh (pixel) theo chiều ngang và dọc."
        },
        {
          id: "gk1_q7",
          question: "Tính dung lượng của bức ảnh không nén có kích thước 1000 × 1000 pixel, độ sâu màu 24 bit:",
          options: ["A. 3 MB", "B. 3 000 000 Byte (≈ 2.86 MB)", "C. 24 MB", "D. 1 MB"],
          correct: 1,
          explanation: "Dung lượng = 1000 × 1000 × 24 bit = 24 000 000 bit = 3 000 000 Byte ≈ 2.86 MB."
        },
        {
          id: "gk1_q8",
          question: "Phát biểu nào sau đây về RAM là ĐÚNG?",
          options: [
            "A. RAM lưu dữ liệu vĩnh viễn không bao giờ mất",
            "B. Dữ liệu trong RAM sẽ bị mất sạch khi mất nguồn điện",
            "C. RAM là bộ nhớ ngoài",
            "D. RAM chứa chương trình khởi động máy tính BIOS"
          ],
          correct: 1,
          explanation: "RAM là bộ nhớ truy cập ngẫu nhiên tạm thời, mất dữ liệu khi tắt nguồn điện."
        },
        {
          id: "gk1_q9",
          question: "Phần mềm nào sau đây được coi là 'trợ thủ số cá nhân' tích hợp sẵn trên điện thoại?",
          options: ["A. Ứng dụng ghi chú và lịch hẹn", "B. Trò chơi trực tuyến", "C. Cáp sạc", "D. Vỏ ốp lưng điện thoại"],
          correct: 0,
          explanation: "Lịch hẹn, danh bạ, ghi chú là tính năng kinh điển của trợ thủ số PDA (Trang 33 SGK)."
        },
        {
          id: "gk1_q10",
          question: "Mô hình điện toán đám mây đem lại lợi ích lớn nhất nào cho người dùng?",
          options: [
            "A. Không cần kết nối Internet vẫn dùng được",
            "B. Truy cập dữ liệu mọi lúc mọi nơi và không phải đầu tư máy chủ vật lí tốn kém",
            "C. Giúp máy tính chạy mà không tốn điện",
            "D. Miễn phí 100% dung lượng không giới hạn"
          ],
          correct: 1,
          explanation: "Điện toán đám mây cho phép truy cập tài nguyên linh hoạt qua Internet theo nhu cầu."
        },
        {
          id: "gk1_q11",
          question: "Phát biểu nào sau đây phân biệt ĐÚNG giữa mạng LAN và mạng WAN?",
          options: [
            "A. Mạng LAN phạm vi nhỏ (phòng học, gia đình); Mạng WAN phạm vi rộng lớn (quốc gia, toàn cầu)",
            "B. Mạng LAN luôn chậm hơn mạng WAN",
            "C. Mạng LAN không thể kết nối bằng dây cáp",
            "D. Mạng WAN chỉ dành riêng cho trường học"
          ],
          correct: 0,
          explanation: "LAN (Local Area Network) phạm vi hẹp; WAN (Wide Area Network) phạm vi diện rộng toàn cầu."
        },
        {
          id: "gk1_q12",
          question: "Một tin nhắn Messenger có nội dung 'Chúc mừng bạn trúng iPhone 15, hãy bấm vào link abc.xyz để nhận quà' là hình thức gì?",
          options: ["A. Email công vụ", "B. Tấn công lừa đảo giả mạo (Phishing)", "C. Tin nhắn của nhà trường", "D. Bản cập nhật hệ điều hành"],
          correct: 1,
          explanation: "Đây là hình thức lừa đảo Phishing điển hình nhằm đánh cắp tài khoản của người dùng."
        },
        {
          id: "gk1_q13",
          question: "Phần mềm tống tiền mã hoá dữ liệu máy tính của nạn nhân rồi đòi tiền chuộc gọi là gì?",
          options: ["A. Ransomware", "B. Adware", "C. Antivirus", "D. Firewall"],
          correct: 0,
          explanation: "Ransomware là phần mềm mã độc tống tiền (Trang 45 SGK)."
        },
        {
          id: "gk1_q14",
          question: "Bảng mã ASCII mở rộng sử dụng mấy bit cho mỗi kí tự?",
          options: ["A. 7 bit", "B. 8 bit (1 Byte)", "C. 16 bit", "D. 32 bit"],
          correct: 1,
          explanation: "Bảng mã ASCII mở rộng sử dụng 8 bit (1 Byte) mã hoá được 256 kí tự (Trang 17 SGK)."
        },
        {
          id: "gk1_q15",
          question: "Để đồng bộ dữ liệu ảnh trên điện thoại lên đám mây, em cần:",
          options: [
            "A. Đăng nhập tài khoản đám mây (Google/Apple) và bật tính năng đồng bộ ảnh",
            "B. Tắt kết nối mạng Wi-Fi và 4G",
            "C. Tháo thẻ nhớ ra khỏi điện thoại",
            "D. Xóa hết ảnh trên điện thoại"
          ],
          correct: 0,
          explanation: "Cần tài khoản đám mây và kết nối Internet để đồng bộ tự động."
        },
        {
          id: "gk1_q16",
          question: "Tại sao thiết bị số lại tính toán nhanh và chính xác hơn con người?",
          options: [
            "A. Vì máy tính có cảm xúc",
            "B. Vì các vi mạch điện tử thực hiện hàng tỉ phép tính nhị phân mỗi giây với trạng thái điện áp ổn định",
            "C. Vì máy tính không bao giờ cần nguồn điện",
            "D. Vì máy tính tự nghĩ ra công thức mới"
          ],
          correct: 1,
          explanation: "Mạch điện tử bán dẫn transistor xử lí xung nhịp hàng tỉ lần/giây một cách ổn định."
        },
        {
          id: "gk1_q17",
          question: "Phép toán lôgic XOR (Tuyển loại trừ) cho kết quả 1 khi:",
          options: [
            "A. Hai toán hạng có giá trị giống nhau",
            "B. Hai toán hạng có giá trị khác nhau (một bên 1, một bên 0)",
            "C. Cả hai toán hạng đều bằng 0",
            "D. Không bao giờ cho kết quả 1"
          ],
          correct: 1,
          explanation: "XOR (Exclusive OR) chỉ trả về 1 khi hai toán hạng có giá trị đối nghịch nhau (Trang 26 SGK)."
        },
        {
          id: "gk1_q18",
          question: "Thiết bị thông minh nào sau đây có chức năng theo dõi nhịp tim và bước đi của người dùng?",
          options: ["A. Đồng hồ thông minh (Smartwatch)", "B. Máy in laser", "C. Bàn phím cơ", "D. Ổ cắm điện truyền thống"],
          correct: 0,
          explanation: "Smartwatch tích hợp cảm biến sinh học theo dõi sức khỏe con người."
        },
        {
          id: "gk1_q19",
          question: "Dữ liệu thời tiết ghi: 'Nhiệt độ: 39°C, Độ ẩm: 85%'. Thông tin rút ra cho học sinh là gì?",
          options: [
            "A. 'Thời tiết rất oi bức, cần uống nhiều nước và tránh ra ngoài trời nắng gắt'",
            "B. Chỉ là các con số vô nghĩa",
            "C. 'Hôm nay trời có tuyết rơi'",
            "D. 'Nhiệt độ đóng băng'"
          ],
          correct: 0,
          explanation: "Thông tin là ý nghĩa hiểu biết được con người rút ra từ dữ liệu thực tế."
        },
        {
          id: "gk1_q20",
          question: "Trong thẻ căn cước gắn chip, dữ liệu số được ghi vào đâu để chống làm giả hiệu quả nhất?",
          options: ["A. Chip nhớ bán dẫn vi mạch", "B. Vỏ bọc ni-lông", "C. Mặt sau in mực", "D. Chữ ký viết tay"],
          correct: 0,
          explanation: "Chip nhớ điện tử mã hóa thông tin bằng thuật toán mật mã học bảo mật cao."
        }
      ]
    },
    {
      id: "exam_final_sem1",
      title: "Đề Thi Cuối Học Kỳ I (Tổng Hợp Chủ Đề 1, 2, 3 & Python Cơ Bản)",
      category: "final",
      badge: "Cuối Kỳ I",
      durationMinutes: 45,
      scope: "Toàn bộ kiến thức Học kỳ I (Chủ đề 1, 2, 3, 4 và Khởi đầu Lập trình Python)",
      description: "Đề thi học kỳ 25 câu trắc nghiệm chuẩn cấu trúc đề thi chính thức của các trường THPT.",
      questions: [
        {
          id: "ck1_q1",
          question: "Trong Python, phần mở rộng mặc định của tệp chương trình là gì?",
          options: ["A. .py", "B. .pt", "C. .python", "D. .code"],
          correct: 0,
          explanation: "Tệp mã nguồn Python luôn có phần đuôi mở rộng là .py."
        },
        {
          id: "ck1_q2",
          question: "Từ khoá nào được dùng để in thông tin ra màn hình trong Python?",
          options: ["A. echo()", "B. print()", "C. write()", "D. output()"],
          correct: 1,
          explanation: "Lệnh print() xuất dữ liệu ra màn hình chuẩn (Trang 97 SGK)."
        },
        {
          id: "ck1_q3",
          question: "Sau khi thực hiện câu lệnh `a = int('15') + 5`, biến `a` nhận giá trị nào?",
          options: ["A. '155'", "B. 20", "C. Báo lỗi TypeError", "D. 15"],
          correct: 1,
          explanation: "Hàm int('15') đổi xâu '15' thành số nguyên 15. Do đó: 15 + 5 = 20."
        },
        {
          id: "ck1_q4",
          question: "Trong Python, kết quả của phép toán `2 ** 4` là bao nhiêu?",
          options: ["A. 8", "B. 16", "C. 6", "D. 32"],
          correct: 1,
          explanation: "** là toán tử lũy thừa: 2⁴ = 16 (Trang 93 SGK)."
        },
        {
          id: "ck1_q5",
          question: "Đoạn mã sau in ra gì?\n```python\nx = 10\nif x % 2 == 0:\n    print('A')\nelse:\n    print('B')\n```",
          options: ["A. A", "B. B", "C. Cả A và B", "D. Báo lỗi cú pháp"],
          correct: 0,
          explanation: "10 chia 2 dư 0 (10 % 2 == 0 là True), nên khối if được thực thi và in chữ 'A'."
        },
        {
          id: "ck1_q6",
          question: "Cú pháp vòng lặp `for i in range(3):` sẽ cho `i` lần lượt nhận các giá trị nào?",
          options: ["A. 1, 2, 3", "B. 0, 1, 2", "C. 0, 1, 2, 3", "D. 3, 2, 1"],
          correct: 1,
          explanation: "Hàm range(n) luôn sinh dãy số từ 0 đến n - 1. range(3) sinh: 0, 1, 2."
        },
        {
          id: "ck1_q7",
          question: "Theo SGK KNTT, thụt lề (Indentation) trong Python có vai trò gì?",
          options: [
            "A. Chỉ để cho đẹp mắt, không ảnh hưởng đến chương trình",
            "B. Bắt buộc để xác định khối lệnh con của if, for, while, def",
            "C. Làm cho chương trình chạy chậm hơn",
            "D. Thay thế dấu chấm phẩy ở cuối dòng"
          ],
          correct: 1,
          explanation: "Thụt lề là quy tắc cú pháp bắt buộc trong Python để phân định khối lệnh con (Trang 103 SGK)."
        },
        {
          id: "ck1_q8",
          question: "Trong Inkscape, ảnh vector có ưu điểm vượt trội nào so với ảnh bitmap?",
          options: [
            "A. Khi phóng to tùy ý không bao giờ bị vỡ hạt, răng cưa",
            "B. Chụp được ảnh phong cảnh chân thực hơn",
            "C. Tệp luôn có dung lượng hàng gigabyte",
            "D. Không thể đổi màu"
          ],
          correct: 0,
          explanation: "Ảnh vector xây dựng bằng phương trình toán học nên phóng to không bị mờ vỡ nét (Trang 63 SGK)."
        },
        {
          id: "ck1_q9",
          question: "Lỗi `SyntaxError: invalid syntax` xảy ra khi nào?",
          options: [
            "A. Vi phạm quy tắc ngữ pháp của Python (quên dấu hai chấm :, thiếu ngoặc...)",
            "B. Khi người dùng chia một số cho số 0",
            "C. Khi máy tính bị mất mạng Internet",
            "D. Khi nhập dữ liệu quá lớn"
          ],
          correct: 0,
          explanation: "SyntaxError là lỗi cú pháp vi phạm quy tắc ngôn ngữ Python (Trang 141 SGK)."
        },
        {
          id: "ck1_q10",
          question: "Giá trị của biểu thức lôgic `(5 > 3) and (2 > 7)` là:",
          options: ["A. True", "B. False", "C. None", "D. Báo lỗi"],
          correct: 1,
          explanation: "5 > 3 là True, nhưng 2 > 7 là False. True and False = False."
        },
        {
          id: "ck1_q11",
          question: "Một terabyte (TB) bằng bao nhiêu Gigabyte (GB)?",
          options: ["A. 1000 GB", "B. 1024 GB", "C. 2048 GB", "D. 8 GB"],
          correct: 1,
          explanation: "1 TB = 2¹⁰ GB = 1024 GB."
        },
        {
          id: "ck1_q12",
          question: "Dãy bit 10101₂ có giá trị thập phân bằng bao nhiêu?",
          options: ["A. 21", "B. 23", "C. 25", "D. 19"],
          correct: 0,
          explanation: "10101₂ = 16 + 4 + 1 = 21."
        },
        {
          id: "ck1_q13",
          question: "Phần mềm mã nguồn mở nổi tiếng để vẽ đồ hoạ vector được học trong SGK Tin học 10 KNTT là gì?",
          options: ["A. Adobe Photoshop", "B. Inkscape", "C. Paint 3D", "D. CorelDRAW"],
          correct: 1,
          explanation: "Chủ đề 4 SGK KNTT giảng dạy phần mềm mã nguồn mở Inkscape (Trang 63 SGK)."
        },
        {
          id: "ck1_q14",
          question: "Hai thuộc tính màu cơ bản của một hình vẽ trong Inkscape là:",
          options: [
            "A. Màu tô (Fill) và Màu viền (Stroke)",
            "B. Màu sáng và Màu tối",
            "C. Màu đen và Màu trắng",
            "D. Màu đậm và Màu nhạt"
          ],
          correct: 0,
          explanation: "Fill là màu ruột bên trong, Stroke là màu đường viền bao quanh (Trang 65 SGK)."
        },
        {
          id: "ck1_q15",
          question: "Trong Python, tên biến nào sau đây là KHÔNG HỢP LỆ?",
          options: ["A. _ten_hoc_sinh", "B. diem1", "C. 2_tong_diem", "D. tong_diem_toan"],
          correct: 2,
          explanation: "Tên biến không được bắt đầu bằng chữ số (Trang 92 SGK)."
        },
        {
          id: "ck1_q16",
          question: "Kết quả của lệnh `print(13 // 3, 13 % 3)` trong Python là:",
          options: ["A. 4.33 và 1", "B. 4 và 1", "C. 1 và 4", "D. 4 và 0"],
          correct: 1,
          explanation: "13 chia 3 được phần nguyên là 4, phần dư là 1 (13 // 3 = 4, 13 % 3 = 1)."
        },
        {
          id: "ck1_q17",
          question: "Để nhập một số thực từ bàn phím vào biến `diem`, ta viết câu lệnh nào chuẩn nhất?",
          options: [
            "A. diem = input('Nhập điểm: ')",
            "B. diem = float(input('Nhập điểm: '))",
            "C. diem = str(input('Nhập điểm: '))",
            "D. diem = bool(input('Nhập điểm: '))"
          ],
          correct: 1,
          explanation: "Cần ép kiểu float() để biến nhận giá trị số thực có dấu phẩy thập phân (Trang 98 SGK)."
        },
        {
          id: "ck1_q18",
          question: "Điều kiện kiểm tra 'x là số dương chẵn' trong Python viết là:",
          options: [
            "A. x > 0 and x % 2 == 0",
            "B. x > 0 or x % 2 == 0",
            "C. x > 0 and x // 2 == 0",
            "D. x >= 0 and x % 2 != 0"
          ],
          correct: 0,
          explanation: "x > 0 (dương) và x % 2 == 0 (chia hết cho 2 là số chẵn)."
        },
        {
          id: "ck1_q19",
          question: "Vòng lặp `for i in range(2, 9, 3):` sẽ duyệt qua các giá trị nào của `i`?",
          options: ["A. 2, 5, 8", "B. 2, 3, 4, 5, 6, 7, 8", "C. 3, 6, 9", "D. 2, 4, 6, 8"],
          correct: 0,
          explanation: "Bắt đầu từ 2, bước nhảy là 3, nhỏ hơn 9: 2, 5, 8."
        },
        {
          id: "ck1_q20",
          question: "Hành động nào sau đây là văn minh trên không gian mạng?",
          options: [
            "A. Lan truyền thông tin chưa được kiểm chứng để câu view",
            "B. Tôn trọng ý kiến khác biệt và bình luận lịch sự, có văn hoá",
            "C. Bắt nạt, body-shaming người khác trên Facebook",
            "D. Lập tài khoản giả mạo bạn cùng lớp"
          ],
          correct: 1,
          explanation: "Ứng xử lịch sự, tôn trọng người khác là chuẩn mực đạo đức số (Trang 55 SGK)."
        },
        {
          id: "ck1_q21",
          question: "Dịch vụ đám mây giúp giải quyết vấn đề nào sau đây?",
          options: [
            "A. Giảm nguy cơ mất dữ liệu khi hỏng thiết bị phần cứng cá nhân",
            "B. Làm cho máy tính không bao giờ hỏng màn hình",
            "C. Không cần sạc pin cho máy tính xách tay",
            "D. Tự động viết bài tập về nhà thay học sinh"
          ],
          correct: 0,
          explanation: "Dữ liệu lưu trên đám mây được nhà cung cấp sao lưu an toàn trên nhiều máy chủ dự phòng."
        },
        {
          id: "ck1_q22",
          question: "Một file âm thanh có tần số lấy mẫu 44 100 Hz, 16 bit, 1 kênh mono. Trong 10 giây cần bao nhiêu byte?",
          options: [
            "A. 44 100 × 2 × 10 = 882 000 Byte (≈ 861 KB)",
            "B. 441 000 Byte",
            "C. 1 000 000 Byte",
            "D. 10 000 Byte"
          ],
          correct: 0,
          explanation: "16 bit = 2 Byte. Dung lượng = 44 100 × 2 Byte × 10 giây = 882 000 Byte."
        },
        {
          id: "ck1_q23",
          question: "Tác phẩm số nào sau đây được bảo hộ quyền tác giả theo Luật Sở hữu trí tuệ?",
          options: [
            "A. Chương trình phần mềm máy tính",
            "B. Bức ảnh nghệ thuật chụp bằng máy ảnh số",
            "C. Bài viết nghiên cứu khoa học đăng trên website",
            "D. Tất cả các phương án trên đều đúng"
          ],
          correct: 3,
          explanation: "Mọi sản phẩm trí tuệ sáng tạo đều được bảo hộ quyền tác giả (Trang 58 SGK)."
        },
        {
          id: "ck1_q24",
          question: "Để thoát khỏi một chương trình Python đang bị treo do vòng lặp vô tận, em nhấn tổ hợp phím nào?",
          options: ["A. Ctrl + C", "B. Alt + F4", "C. Ctrl + Z", "D. Enter"],
          correct: 0,
          explanation: "Tổ hợp Ctrl + C gửi tín hiệu ngắt bàn phím KeyboardInterrupt dừng chương trình ngay lập tức."
        },
        {
          id: "ck1_q25",
          question: "Người làm nghề phát triển phần mềm (Software Developer) cần rèn luyện tốt nhất năng lực nào?",
          options: [
            "A. Năng lực tư duy giải quyết vấn đề và kỹ năng lập trình",
            "B. Năng lực may vá quần áo",
            "C. Kỹ năng nấu ăn nhanh",
            "D. Năng lực lái xe đường dài"
          ],
          correct: 0,
          explanation: "Tư duy thuật toán và lập trình là năng lực cốt lõi của nghề phát triển phần mềm (Trang 160 SGK)."
        }
      ]
    }
  ],

  // BÀI TẬP THỰC HÀNH LẬP TRÌNH PYTHON TRÍCH XUẤT CHÍNH XÁC THEO NHIỆM VỤ THỰC HÀNH SGK KNTT
  exercises: [
    {
      id: "ex-1",
      title: "Bài tập 1: Tính số tiền mua sách (Nhiệm vụ 1 - Bài 17 & 18 Trang 99 SGK)",
      difficulty: "Cơ bản",
      stars: 1,
      topic: "Biến & Nhập xuất",
      description: "Em hãy viết chương trình nhập vào đơn giá (nghìn đồng) và số lượng sách cần mua từ bàn phím. Hãy tính và in ra tổng số tiền phải thanh toán.",
      inputSample: "Đơn giá = 12.5 (nghìn đồng), Số lượng = 4",
      outputSample: "Số tiền cần thanh toán là: 50.0 nghìn đồng",
      hint: "Sử dụng float(input()) để nhận đơn giá và int(input()) để nhận số lượng. Tổng tiền = đơn_giá * số_lượng.",
      starterCode: `# Nhập đơn giá và số lượng sách từ bàn phím
don_gia = float(input("Nhập đơn giá sách (nghìn đồng): "))
so_luong = int(input("Nhập số lượng sách cần mua: "))

# Tính tổng số tiền tại đây:
tong_tien = 0

print("Số tiền cần thanh toán là:", tong_tien, "nghìn đồng")
`,
      solutionCode: `# Lời giải chuẩn theo SGK KNTT:
don_gia = float(input("Nhập đơn giá sách (nghìn đồng): "))
so_luong = int(input("Nhập số lượng sách cần mua: "))

tong_tien = don_gia * so_luong

print("Số tiền cần thanh toán là:", tong_tien, "nghìn đồng")`
    },
    {
      id: "ex-2",
      title: "Bài tập 2: Kiểm tra năm nhuận (Luyện tập - Bài 19 Trang 104 SGK)",
      difficulty: "Cơ bản",
      stars: 1,
      topic: "Cấu trúc rẽ nhánh if - else",
      description: "Năm nhuận là năm chia hết cho 400, hoặc chia hết cho 4 nhưng không chia hết cho 100. Hãy viết chương trình nhập vào một năm dương lịch nam và kiểm tra năm đó có phải năm nhuận không.",
      inputSample: "nam = 2024",
      outputSample: "2024 là năm nhuận",
      hint: "Điều kiện năm nhuận trong Python: (nam % 400 == 0) or (nam % 4 == 0 and nam % 100 != 0).",
      starterCode: `nam = int(input("Nhập năm dương lịch cần kiểm tra: "))

# Viết câu lệnh rẽ nhánh if - else:
if (nam % 400 == 0) or (nam % 4 == 0 and nam % 100 != 0):
    print(nam, "là năm nhuận")
else:
    # Điền phần else tại đây
    pass
`,
      solutionCode: `nam = int(input("Nhập năm dương lịch cần kiểm tra: "))

if (nam % 400 == 0) or (nam % 4 == 0 and nam % 100 != 0):
    print(nam, "là năm nhuận")
else:
    print(nam, "không phải là năm nhuận")`
    },
    {
      id: "ex-3",
      title: "Bài tập 3: Tính tổng S = 1 + 2 + ... + N (Nhiệm vụ 1 - Bài 20 Trang 107 SGK)",
      difficulty: "Trung bình",
      stars: 2,
      topic: "Vòng lặp for & range()",
      description: "Viết chương trình nhập vào số nguyên dương n. Sử dụng vòng lặp for và hàm range() để tính tổng các số tự nhiên từ 1 đến n.",
      inputSample: "n = 10",
      outputSample: "Tổng các số từ 1 đến 10 là: 55",
      hint: "Khởi tạo tong = 0. Sử dụng for i in range(1, n + 1): và cộng dồn tong = tong + i.",
      starterCode: `n = int(input("Nhập số nguyên dương n: "))

tong = 0
# Viết vòng lặp for tại đây:


print(f"Tổng các số từ 1 đến {n} là: {tong}")
`,
      solutionCode: `n = int(input("Nhập số nguyên dương n: "))

tong = 0
for i in range(1, n + 1):
    tong += i

print(f"Tổng các số từ 1 đến {n} là: {tong}")`
    },
    {
      id: "ex-4",
      title: "Bài tập 4: Đếm các số chia hết cho 3 trong danh sách (Bài 22 & 23 SGK)",
      difficulty: "Trung bình",
      stars: 2,
      topic: "Kiểu dữ liệu danh sách list",
      description: "Cho một danh sách các số nguyên: A = [12, 7, 9, 15, 22, 30, 41, 18]. Hãy viết chương trình duyệt qua danh sách để đếm xem có bao nhiêu số chia hết cho 3.",
      inputSample: "Danh sách A = [12, 7, 9, 15, 22, 30, 41, 18]",
      outputSample: "Có 5 số chia hết cho 3 trong danh sách",
      hint: "Khởi tạo bien_dem = 0. Duyệt từng phần tử: for x in A: nếu x % 3 == 0 thì bien_dem += 1.",
      starterCode: `A = [12, 7, 9, 15, 22, 30, 41, 18]

bien_dem = 0
# Viết vòng lặp duyệt qua danh sách A tại đây:


print(f"Có {bien_dem} số chia hết cho 3 trong danh sách")
`,
      solutionCode: `A = [12, 7, 9, 15, 22, 30, 41, 18]

bien_dem = 0
for x in A:
    if x % 3 == 0:
        bien_dem += 1

print(f"Có {bien_dem} số chia hết cho 3 trong danh sách")`
    },
    {
      id: "ex-5",
      title: "Bài tập 5: Viết hàm tìm ước chung lớn nhất UCLN (Bài 26 & 27 SGK)",
      difficulty: "Nâng cao",
      stars: 3,
      topic: "Hàm trong Python (def)",
      description: "Viết hàm ucln(a, b) bằng từ khoá def sử dụng thuật toán Ơ-clit (lặp khi b > 0: r = a % b; a = b; b = r). Trả về ước chung lớn nhất của hai số nguyên dương a và b.",
      inputSample: "a = 48, b = 18",
      outputSample: "Ước chung lớn nhất của 48 và 18 là: 6",
      hint: "Sử dụng vòng lặp while b > 0: a, b = b, a % b. Cuối cùng return a.",
      starterCode: `def ucln(a, b):
    # Sử dụng thuật toán Ơ-clit tại đây:
    while b > 0:
        r = a % b
        a = b
        b = r
    return a

# Nhập dữ liệu và gọi hàm:
x = int(input("Nhập số a: "))
y = int(input("Nhập số b: "))
kq = ucln(x, y)
print(f"Ước chung lớn nhất của {x} và {y} là: {kq}")
`,
      solutionCode: `def ucln(a, b):
    while b > 0:
        r = a % b
        a = b
        b = r
    return a

x = int(input("Nhập số a: "))
y = int(input("Nhập số b: "))
kq = ucln(x, y)
print(f"Ước chung lớn nhất của {x} và {y} là: {kq}")`
    }
  ]
};
