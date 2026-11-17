<!-- Adapted for public reading from Tim’s resource library. -->
# Dùng NotebookLM làm kho kiến thức cho một công việc

*Nguồn: Nate's Zero to AI — "How to use NotebookLM as a knowledge base" (nateszerotoai.substack.com/p/notebooklm-guide)*

---

## Vấn đề

Bạn có một đống tài liệu: vài file PDF, một bản ghi cuộc họp, mấy báo cáo lưu lại vì thấy quan trọng rồi quên mất. Việc cần làm là hiểu đống tài liệu đó đủ rõ để làm ra một thứ gì đó — một bản tóm tắt cho sếp, một bài giảng, một quyết định.

Chat với AI có thể tóm tắt một file. Nhưng câu trả lời rời rạc không cho đống tài liệu một chỗ ở ổn định. Câu trả lời đầu thành bối cảnh cho câu sau, câu sau lại là bản mờ hơn của câu đầu. Cuối cùng bạn vừa làm bài, vừa phải giữ cả đống nguồn trong đầu.

Bạn cần một nơi để **file PDF, câu hỏi, câu trả lời có trích dẫn, và ghi chú** nằm chung với nhau trong lúc làm việc.

---

## "Kho kiến thức cỡ một dự án" nghĩa là gì

Không phải một hệ thống khổng lồ. Chỉ là **một notebook chứa tài liệu của một công việc cụ thể**, cộng với các câu hỏi bạn hỏi, các câu trả lời có trích dẫn, và các ghi chú bạn lưu lại. Rời đi rồi quay lại mà không phải dựng lại từ đầu.

So sánh nhanh:

| Cách làm | Hạn chế |
|---|---|
| **Thư mục file** | Chỉ lưu file. Không cho biết báo cáo nào trả lời câu hỏi nào, đoạn hữu ích nằm ở đâu. |
| **Cửa sổ chat** | Cuộc trò chuyện mới là vật chính. Mở chat mới, đổi công cụ, hay quay lại tuần sau là mất mạch. |
| **Tài liệu hoàn chỉnh** | Đó là thứ bạn làm ra *sau khi* đã hiểu. Không xử lý được giai đoạn giữa lộn xộn. |
| **Notebook** | Giữ file nguồn + câu hỏi + câu trả lời có trích dẫn + ghi chú chung một chỗ trong lúc bản nháp còn đang thành hình. |

Ví dụ thực tế: sinh viên gom bài giảng và ghi chú để làm đề cương ôn thi. Người mới vào công ty gom tài liệu onboarding và biên bản họp cũ để biết quy trình chính thức và những câu còn phải hỏi người thật. Người làm nghiên cứu tách bằng chứng trực tiếp khỏi tài liệu nền nghe có vẻ liên quan nhưng không gánh nổi kết luận chính.

---

## Nguyên tắc cốt lõi: **tra cứu trước, phán xét sau**

Sai lầm phổ biến nhất là **hỏi kết luận quá sớm**.

Bạn tải một đống tài liệu lên và hỏi ngay "vậy kết luận là gì?". NotebookLM sẽ trả lời trơn tru, có trích dẫn, và có thể đúng phần lớn. Nhưng:

> **Một câu trả lời có trích dẫn không phải là một câu trả lời đã được kiểm chứng.**

Trích dẫn chỉ cho bạn biết *chỗ để nhìn*. Nó không chứng minh câu bạn sắp lặp lại được nguồn hậu thuẫn mạnh như giọng văn của AI khiến bạn tưởng. Nguồn có thể chỉ hậu thuẫn một khẳng định hẹp hơn, đo một thứ khác, hoặc chỉ hữu ích như bối cảnh.

Nên chia làm hai việc:

1. **Tra cứu (máy làm tốt):** Trong các nguồn này có gì? Mỗi nguồn nói gì, đo cái gì, đoạn nào tôi cần mở ra xem?
2. **Phán xét (bạn làm):** Nói được gì chắc chắn? Chỗ nào phải nói nhẹ đi? Chỗ nào cần thêm nguồn? Chỗ nào nên bỏ hẳn khỏi bản cuối?

---

## Quy trình 8 bước

Ví dụ mẫu của tác giả: **"AI đã gây mất việc làm chưa?"** — câu hỏi nghe đơn giản nhưng các nguồn thì không. Một bài về việc làm, một bài về tin tuyển dụng, một bài về mức độ nghề nghiệp bị AI ảnh hưởng — cả ba cùng nằm trong một cuộc thảo luận, nhưng **không cùng một loại bằng chứng**.

1. Tạo một notebook cho một công việc
2. Nạp bộ nguồn vào
3. Hỏi bản kiểm kê nguồn
4. Xếp loại nguồn theo thứ chúng gánh được
5. Biến nguồn thành ma trận bằng chứng
6. Chỉ hỏi tổng hợp **sau khi** đã có ma trận
7. Lưu lại các câu hỏi còn bỏ ngỏ
8. Chỉ khi đó mới dùng đa phương tiện làm lớp ôn tập

---

### Bước 1 — Tạo notebook và nạp nguồn

Tạo notebook mới, đặt tên theo **công việc** đang cần làm, không phải theo chủ đề chung chung. Tải tất cả PDF và link vào bảng Sources **trước khi** hỏi bất cứ kết luận nào.

NotebookLM chỉ làm việc được trong ranh giới bạn vẽ ra. Nếu notebook trộn lẫn nghiên cứu việc làm, nghiên cứu tin tuyển dụng, và ước lượng mức độ ảnh hưởng, bạn phải **làm cho sự khác nhau đó lộ ra** trước, nếu không câu trả lời sẽ âm thầm gộp các loại bằng chứng khác nhau vào một đống.

Tác giả còn thêm một bản tóm tắt dự án ngắn, kèm một cảnh báo rõ ràng: *đừng coi "mức độ ảnh hưởng", "tin tuyển dụng", và "việc làm thực tế" là ba thứ có thể thay thế cho nhau.*

Câu hỏi khung của cả notebook:

> Trong các nghiên cứu thị trường lao động gần đây, chỗ nào có bằng chứng cho thấy AI đã làm giảm việc làm, tuyển dụng, thu nhập, giờ làm, hoặc tin tuyển dụng — và chỗ nào các bài nghiên cứu thấy ít hoặc chưa thấy tác động rộng lên thị trường lao động?

Đủ rộng để phải so sánh, đủ hẹp để các nguồn thuộc về nhau.

---

### Bước 2 — Hỏi xem trong đống nguồn có những gì

**Prompt đầu tiên nên cố tình nhàm chán.**

```
Hãy tạo bản kiểm kê nguồn cho notebook này, về câu hỏi: [CÂU HỎI CỦA BẠN].

Với mỗi nguồn, cho tôi:
- tên nguồn
- loại nguồn
- năm hoặc ngày
- phạm vi địa lý
- bộ dữ liệu hoặc nền tảng bằng chứng được dùng
- kết quả/chỉ số được đo
- cách đo biến số chính
- phát hiện chính, viết trong một câu đơn giản
- nguồn này hậu thuẫn trực tiếp cho điều gì
- nguồn này KHÔNG chứng minh được điều gì
- trích dẫn nên kiểm tra trước tiên

Sau bản kiểm kê, cho tôi biết nguồn nào là trung tâm, nguồn nào là thứ cấp,
và nguồn nào tôi nên cẩn thận đừng dùng quá tay.
```

Các trường giống nhau lặp lại cho mọi nguồn → **các bài trở nên so sánh được**. Các trích dẫn → **so sánh đó kiểm tra được**.

**Trích dẫn không phải để trang trí.** Bấm vào con số nhỏ, NotebookLM mở đúng đoạn nguồn bên cạnh câu trả lời. Đổi câu hỏi trong đầu bạn từ *"Bản tóm tắt này nghe có đúng không?"* thành *"Tôi có lần ngược được câu này về nguồn không, và nguồn có thật sự nói như notebook bảo nó nói không?"*

NotebookLM cũng gợi ý câu hỏi tiếp theo phía dưới. Coi đó là **manh mối**, chọn cái nào làm rõ được một khác biệt giữa các nguồn hoặc một cảnh báo mà bản kiểm kê vừa lộ ra.

Đến đây bạn **vẫn chưa trả lời câu hỏi chính**. Bạn mới có một bản kiểm kê so sánh được và một đường đi thẳng về đoạn văn đứng sau mỗi khẳng định quan trọng.

---

### Bước 3 — Xếp loại nguồn theo mức độ trả lời trực tiếp

Bản kiểm kê cho biết trong notebook có gì. Prompt tiếp theo hỏi **nguồn nào nên gánh phần nào của câu trả lời**.

```
Hãy đánh giá xem mỗi nguồn trong notebook trả lời trực tiếp đến đâu cho câu hỏi:
[CÂU HỎI CỦA BẠN]

Xếp các nguồn vào 4 nhóm:
1. Bằng chứng trực tiếp về kết quả cần biết
2. Bằng chứng gián tiếp (tín hiệu xung quanh: nhu cầu, hành vi, thu nhập...)
3. Ước lượng mức độ ảnh hưởng / rủi ro — chưa cho thấy kết quả thực tế
4. Nguồn bối cảnh: giúp hiểu vấn đề nhưng KHÔNG được gánh kết luận chính

Với mỗi nguồn, chấm mức hữu ích cho câu hỏi này: cao / trung bình / thấp.
Giải thích lý do bằng lời lẽ đơn giản.

Sau đó liệt kê:
- 3 nguồn mạnh nhất để trả lời câu hỏi
- 3 nguồn dễ gây nói quá hoặc gây nhầm lẫn nhất
- bằng chứng còn thiếu nào sẽ làm notebook này mạnh hơn
```

Ví dụ trong bài: dữ liệu bảng lương, đăng ký lao động, thất nghiệp → nhóm bằng chứng trực tiếp. Tin tuyển dụng chỉ cho thấy nhu cầu tuyển thay đổi, **không** chứng minh người đang làm bị mất việc. Ước lượng mức độ ảnh hưởng chỉ ra nghề nào *có thể* dễ tổn thương, **không** cho thấy việc làm đã mất.

**Cảnh giác với chính ngôn từ của máy.** Trong lần chạy đó, NotebookLM dùng những cụm như *"chứng minh trực tiếp"*, *"chứng minh rằng"*. Một nguồn có thể hậu thuẫn một khẳng định mà không hề chứng minh phiên bản rộng mà người đọc sẽ nghe thấy. Coi thứ hạng này là **giả thuyết đầu tiên**, rồi tự kiểm lại những khẳng định bạn định dùng.

---

### Bước 4 — Biến notebook thành ma trận bằng chứng

Mục đích: **không cho các loại kết quả khác nhau nhòe vào một đoạn văn xuôi.**

```
Hãy dựng ma trận bằng chứng cho notebook này.

Các cột:
- Nguồn
- Năm
- Phạm vi địa lý
- Bộ dữ liệu / nền tảng bằng chứng
- Cách đo biến chính
- Kết quả được đo
- Phát hiện về [vấn đề bạn quan tâm]
- Nhóm hoặc lĩnh vực bị ảnh hưởng
- Đây là bằng chứng trực tiếp, gián tiếp, hay chỉ là ước lượng ảnh hưởng
- Hạn chế chính
- Trích dẫn nên mở ra kiểm tra

Sau ma trận, tóm tắt quy luật trong 5 gạch đầu dòng:
- chỗ nào bằng chứng cho thấy tác động có thể đã xảy ra
- chỗ nào bằng chứng chưa cho thấy tác động rộng
- chỗ nào các nghiên cứu đang đo những thứ khác nhau và KHÔNG được gộp lại thành một kết luận
- những phạm trù nào dễ bị nhầm lẫn với nhau
- khẳng định thận trọng nào là thứ bằng chứng thật sự hậu thuẫn
```

Khi có ma trận, **bấm "Save to note"** thay vì để nó chìm trong luồng chat. Ma trận sẽ nằm ở bảng ghi chú, mở lại được trước khi viết bản tổng hợp, khi kiểm tra trích dẫn, hoặc khi làm slide.

Điều hay: **những mâu thuẫn bề ngoài trở nên hữu ích** khi bạn hỏi mỗi nghiên cứu *đo cái gì, trên ai, vào lúc nào*. Một bài không thấy tác động rộng lên việc làm, một bài thấy tin tuyển dụng giảm ở vài nghề bị ảnh hưởng, một bài thấy người mới ra trường trong một nhóm hẹp đang tệ đi — ba phát hiện đó **có thể khớp với nhau**.

---

### Bước 5 — Chỉ hỏi tổng hợp SAU KHI đã có ma trận

```
Viết một bản tổng hợp bằng ngôn ngữ đơn giản, trả lời:
[CÂU HỎI CỦA BẠN]

Theo cấu trúc:
1. Câu trả lời ngắn gọn.
2. Chỗ nào bằng chứng nói "có" hoặc "có thể".
3. Chỗ nào bằng chứng nói "chưa, ít nhất là chưa rộng".
4. Vì sao các nghiên cứu khác nhau.
5. Điều gì vẫn còn chưa chắc chắn.

Dùng trích dẫn xuyên suốt. Không được coi [loại A], [loại B] và [loại C] là cùng
một kết quả. Không được tỏ ra chắc chắn giả tạo.
```

Bản tổng hợp tốt sẽ **giữ cho bất đồng vẫn hiện ra**: không giả vờ rằng tin tuyển dụng giảm chứng minh việc làm giảm, và cũng không dùng số liệu việc làm quốc gia ổn định để xóa đi những tác động hẹp có thật.

Lưu bản tổng hợp thành một ghi chú nữa.

---

### Bước 6 — Lưu các câu hỏi còn bỏ ngỏ (trước khi làm đa phương tiện)

```
Dựa trên các nguồn trong notebook này, liệt kê các câu hỏi còn bỏ ngỏ sau ma trận
bằng chứng và bản tổng hợp đầu tiên.

Sắp xếp thành:
- lỗ hổng về bằng chứng
- lỗ hổng về thời điểm
- lỗ hổng về cách đo lường
- câu hỏi về nhóm người / lĩnh vực / khu vực cụ thể
- câu hỏi quan trọng với cách công chúng diễn giải nhưng các nguồn này không trả
  lời được rõ ràng

Với mỗi câu hỏi bỏ ngỏ, giải thích:
- vì sao nó quan trọng
- nguồn nào tiến gần nhất đến việc trả lời nó
- loại bằng chứng bổ sung nào sẽ trả lời nó tốt hơn
- nên coi nó là một lưu ý cảnh báo, một hướng nghiên cứu tương lai, hay một lý do
  để tránh nói quá
```

Kết quả đánh dấu **chỗ đống nguồn của bạn hết khả năng trả lời**. Nó cho phép bạn giữ lại sự không chắc chắn mà không làm cả bài viết trở nên mơ hồ. Lưu luôn thành ghi chú, để nó nằm cạnh ma trận và bản tổng hợp.

---

### Bước 7 — Đa phương tiện: có, nhưng phải tùy chỉnh trước

Cùng một notebook có thể sinh ra: audio, video, slide, báo cáo, flashcard, quiz, sơ đồ tư duy, bảng biểu. **Trước khi bấm tạo, kiểm tra xem định dạng đó cho tùy chỉnh những gì.** Sơ đồ tư duy hỏi bạn muốn map chủ đề nào. Audio Overview cho chọn định dạng, độ dài, ngôn ngữ, và prompt trọng tâm.

**Sơ đồ tư duy** — mặc định dễ thành mạng lưới chủ đề chung chung. Ép nó thành *bản đồ bằng chứng*:

```
Tạo sơ đồ tư duy về bằng chứng cho câu hỏi: [CÂU HỎI CỦA BẠN].

Tổ chức bản đồ theo LOẠI BẰNG CHỨNG, không theo chủ đề chung.

Các nhánh chính:
- bằng chứng trực tiếp
- bằng chứng gián tiếp
- ước lượng mức độ ảnh hưởng / rủi ro (chưa cho thấy kết quả thực)
- bằng chứng cho thấy có áp lực
- bằng chứng cho thấy tác động rộng CHƯA xuất hiện rõ
- câu hỏi bỏ ngỏ và lưu ý cảnh báo

Dưới mỗi nhánh, ghi các nguồn chính và khẳng định cụ thể mà từng nguồn hậu thuẫn được.
Giữ [loại A] tách khỏi [loại B]. Giữ [mức độ ảnh hưởng] tách khỏi [thiệt hại thực tế].
```

Nếu tất cả rơi vào chung một nhánh, bạn biết ngay: **hình ảnh đã làm phẳng bằng chứng.**

**Audio Overview** — chọn định dạng Critique hoặc Debate thay vì bản tóm tắt đơn giản:

```
Tạo một cuộc thảo luận cân bằng giữa hai người dẫn.

Một người bắt đầu từ nỗi lo của công chúng về [chủ đề]. Người kia liên tục quay về
việc mỗi bài nghiên cứu thật sự đo cái gì. Kết thúc bằng kết luận thận trọng mà các
nguồn hậu thuẫn.
```

---

## Cảnh báo lớn nhất: bản đẹp nghe chắc chắn hơn sự thật

Đây là phần trung thực nhất của bài gốc.

- **Video:** NotebookLM tự sinh nhân vật, biểu đồ, nhãn, chuyển cảnh — trông rất chuyên nghiệp. Nhưng đơn giản hóa vẫn là **một cách diễn giải**. Một biểu đồ hoạt hình sạch sẽ có thể **âm thầm xóa mất** đúng những lưu ý cảnh báo đã làm nên sự cẩn trọng của nghiên cứu gốc.
- **Ảnh chụp nguồn trong video có vẻ đáng tin, nhưng không phải trích dẫn bấm được.** Người xem không mở được đoạn văn xung quanh để kiểm tra.
- **Giọng đọc:** mượt đến mức mọi chuyển ý đều nghe như đã ngã ngũ — kể cả những câu như AI đang *"xóa sổ một cách có hệ thống"* công việc chuyên môn ở cấp khởi điểm, hay một hiện tượng là *"thay thế thuần túy"*. Đó là những kết luận mạnh, **đi xa hơn** bản tổng hợp thận trọng mà chính notebook đó đã viết ra trong chat.

> **Giọng đọc bóng bẩy làm cho việc đơn giản hóa trở nên khó nhận ra hơn.**

Cách dùng đúng: mỗi định dạng để **bắt một loại lỗi khác nhau** — hình ảnh để lộ chỗ trộn lẫn các loại bằng chứng, giọng đọc để lộ chỗ nói chắc hơn cả bài nghiên cứu. Coi mọi lời dẫn, mọi hình sinh ra, mọi ảnh chụp nguồn **là bản nháp**, không phải sản phẩm.

---

## Khi nào chuyển việc sang công cụ khác

| Tình huống | Công cụ |
|---|---|
| Vẫn đang **đi tìm** tài liệu | Công cụ tìm kiếm / deep research |
| Bắt đầu từ **trang trắng** | Trợ lý AI thông thường |
| **Đã có** bộ nguồn xác định, cần hỏi nhiều câu, câu trả lời phải bám vào tài liệu | **NotebookLM** |
| Đã xong phần nguồn, giờ cần **khuyến nghị, bản nháp, kế hoạch hành động** | Claude / ChatGPT / agent |

Cách bàn giao: **không cần NotebookLM tạo gói bàn giao riêng.** Ba ghi chú đã lưu chính là gói bàn giao —

- **ma trận** ghi lại mỗi nguồn đo cái gì,
- **bản tổng hợp** mang câu trả lời thận trọng,
- **ghi chú câu hỏi bỏ ngỏ** giữ lại các cảnh báo và lỗ hổng.

Copy các ghi chú đó sang trợ lý khác làm nguyên liệu cho memo, dàn ý, bản viết lại, hay quyết định. **Giữ notebook mở trong lúc viết** để quay về trích dẫn gốc khi một khẳng định cần soi lại.

---

## Tóm gọn

> Bỏ đống nguồn vào một notebook. Hỏi những câu hỏi có trọng tâm. So sánh những gì tìm thấy. Lưu lại những mảnh sẽ cần dùng lại. Rồi mới biến vật liệu đã kiểm chứng đó thành thứ mà công việc đòi hỏi.

**Khi bạn bắt đầu với một bộ nguồn đã xác định, hãy bắt đầu ở NotebookLM.**
