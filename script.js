
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function initCards() {
    const challenges = ["Hát một bài bất kỳ quay video vaf đăng lên Facebook hoặc uống 1 ly", "BÁO ĐỘNG !!! Từ giờ tới đến hết cuộc chơi ai dùng “Mày” “Tao” sẽ phải uống 1 ly", "Để người bên phải bạn ngồi lên bàn tay của bạn cho tới hết round này", "Selfle một bức ảnh thật xấu và đăng lên story của bạn hoặc là cạn 2 ly", "Ngã vào vong tay của người ngồi bên cạnh 2 phút hoặc uống 1 ly", "Thơm má tất cả mọi người hoặc uống 2 ly", "Gọi cho một người bất kỳ do mọi người chọn và bật loa ngoài bạn sẽ phải tán tỉnh người đó hoặc uống 2 ly", "Đưa điện thoại cho người bên trái của bạn họ có quyền chọn 1 ảnh bất kỳ và đăng lên story của bạn hoặc phải uống 3 ly", "Để người bên phải bạn gửi tin nhắn bằng messenger cho một người bất kỳ nhưng chỉ bằng sticker hoặc emojie hoặc cạn 1 ly", "Đăng một tấm hình hầu trẻ trâu lên story hoặc uống 1 ly", "Ngửi nách người ngồi kế bên tay phải của bạn hoặc uống 2 ly", "Nhắn tin cho người yêu mới của người yêu cũ của bạn một thứ bất kỳ hoặc uống 2 ly “nếu bạn không có người yêu cũ uống 1 ly”", "Cho người bên trai bạn 1 đô hoặc uống 1 ly", "Ăn một miếng chanh hoặc 1 xíu muối mà không nhăn mặt hoặc uống 2 ly nếu nhăn mặt thì uống 1 ly", "Sủa “Gâu Gâu” mỗi khi ai đó gọi tên bạn cho đến vòng kế tiếp hoặc uống 3 ly", "Lần lượt chơi oẳn tù tì với từng người trong vòng ai thua phải uống 1 ly", "Bạn có quyên chọn 1 người khác giới bất kỳ trong vòng và đăng story ảnh sefle của người đó với vong caption “I love you” hoặc uống 3 ly", "Tât cả mọi người cùng nhau thi flank ai guck đầu tiên uống 2 ly", "Để 1 người khác giới make up cho bạn hoặc uống 2 ly", "Uống 1 ly nếu bạn đã từng nhân “CLIP NÓNG” từ người yêu bạn", "Uống 2 ly hoặc trả lời nếu bạn phải chọn giữa “Quần lọt khe” hay “Quần lót ren” thì bạn sẽ chọn cái nào? (Con trai uống double)", "Tất cả đều uống nếu đã dùng teencode để nhắn tin với ai đó", "Uống 2 ly hoặc trả lời lý do chia tay người yêu cũ?? (Nếu không có người yêu cux uống 1 ly)", "Bạn sẽ bị bịt mắt và người đối diện sẽ cho bạn liếm một thứ bất kỳ haowjc uống 2 ly", "Tất cả uống 1 ly nếu bạn đã từng khen ai đó đẹp “mà người đó xấu vl”", "Uống 1 ly hoặc trả lời kể về thói quen cực xấu của bạn", "Những ai đeo kính thì hãy nắm tay nhau và uống 1 ly “hãy bên nhau bạn né”", "Những ai họ “Nguyễn” uống 1 ly", "Tất cả cùng nhau chọn 1 trong 2 phương án “đi du lịch vùng cao hay biển” team nào có ít người nhất uống 2 ly", "Những ai từng dùng và đang dùng dating app uống 1 ly", "Bạn có quyền chọn bất cứ người nào và 2 người liếm tai nhau hoặc uống 3 ly", "Ai đang đi giày size nhỏ nhất và to nhất cùng nhau uống 1 ly", "Những ai đang xài hệ điều hành “APPLE” thí uống", "Những ai từng làm cán sự lớp thì uống", "Uống nếu bạn từng khóc hoặc buòn vì 1 người", "Đổi áo với một người khác giới bất kỳ sau đó cả 2 chụo bức hình và đăng lên story hoặc uống 2 ly", "Uống 2 ly hoặc trả lời Ai là người làm bạn đau buồn nhất? Tại sao?", "Để người bên phải vỗ mong bạn thiệt mạnh hoặc uống 2 ly", "Ai có lượt follow trên IG nhiều nhất uống 1 ly", "Bạn sẽ phải giao môi với 1 người bất kỳ", "Thơm má một người bất kỳ không được để họ từ chối hoặc uống 1 ly", "Liếm cùi chor của 1 người bất kỳ hoặc uống 2 ly", "Kể 5 tư thế bạn thích 18+ hoặc uống 1 ly", "Đọc rõ “5 điều bác hồ dạy” đọc sai phải uống 1 ly", "Gọi cho một người bạn khác giới và nói mình đang say hoặc uống 1 ly", "2 người ngồi cạnh người cầm bài uống 2 ly", "Người chơi hệ “Khói” “Máy thở” phải uống 1 ly", "Ai hay đi làm muộn uống 1 ly", "Đen bạc Đen luôn tình yêu uống", "Ai mới có bồ uống 1 ly", "Kể về một điều xấu hổ nhất mà bạn từng làm hoặc uống 2 ly"]
    // Shuffle the array of challenges
    shuffleArray(challenges);
    for (let i = 0; i < challenges.length; i++) {
        var container = document.createElement('div');
        container.style.display = "inline-block";
        container.className = 'container unflipped';
        container.onclick = function(event) {
            clickCard(event);
          };

        var card = document.createElement('div');
        card.className = 'card';

        var front = document.createElement('div');
        front.className = 'front';

        var paragraph = document.createElement('p');
        paragraph.textContent = challenges[i];
        front.appendChild(paragraph);

        var back = document.createElement('div');
        back.className = 'back';

        card.appendChild(front);
        card.appendChild(back);

        container.appendChild(card);

        document.body.appendChild(container);
    }
}

initCards();

var prev; 
var cardPos = 1;

function clickCard(event) {

  // Hide previous card
  if(prev) {
    prev.classList.remove('show-challenge'); 
    prev.classList.remove('current'); 
    prev.classList.add('flipped');  
  }

  var container = event.target.closest('.container');

  container.classList.remove('unflipped');
  container.classList.add('current');

  // Show clicked card
  var card = container.querySelector('.card');
  card.classList.remove('flipped');
  card.classList.add('show-challenge');
  
  prev = container; // Set current card as previous for next click
  
  // Set z-index
  container.style.zIndex = cardPos;
  cardPos++;

}