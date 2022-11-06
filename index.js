$(document).ready(function() {
    renderCurrentTime();
    renderQuote();
    renderRandomImage();

});


// 랜덤사진 꾸미기

function renderRandomImage() {
    let imageList = [];
    // 이미지 개수를 변경하려면 i=5의 값을 이미지 개수만큼 바꿔주세요!
    for (i = 0; i < 5; i++) {
        imageList.push(i);
    }
    let imageListLength = imageList.length;
    let randomImage = Math.floor(Math.random() * (imageListLength)) + 1
    randomImage = `${randomImage}.jpg`
    $(document.body).css("background-image", `url(${randomImage})`);
}




function renderCurrentTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let datetime = data['datetime'].substr(11, 5);
            $('#time').text(datetime);
        });
}

// greeting 랜덤으로 만들기

let Greetings = ["오늘도 무사히", "오늘도 화이팅", "오늘 할 일을 내일로 미루기", "오늘 뭐먹지?"]
const Greeting = document.getElementById("greeting")

Greetings[Math.floor(Math.random() * Greetings.length)];
let todaysGreet = Greetings[Math.floor(Math.random() * Greetings.length)];
console.log(todaysGreet)
Greeting.innerText = todaysGreet;






function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;
            let author = `- ${data['author']} -`;
            $('#content').text(content);
            $('#author').text(author);
        });
}