const images = [
"img1.jpg", 
"img2.jpg",
"img3.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`; // <img src="img/배열내원소"> 요렇게 만들어줌

//이렇게 만든 경로 문자열을 html의 body에 넣어준다.

document.body.appendChild(bgImage); 
// html의 body라는 부분에 이 아이를 넣어주세요