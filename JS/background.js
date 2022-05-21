const body = document.querySelector("body");

const chosenNum = Math.floor(Math.random() * 20);

const bgImage = document.createElement("img");

bgImage.src = `IMAGE/${chosenNum}.jpg`

bgImage.style.zIndex = "-1"; // 맨 뒤로. 숫자 클수록 앞으로 옴

bgImage.style.height = "100vh";

bgImage.style.width = "100%";

bgImage.style.position = "absolute";

bgImage.style.opacity = "0.5";

document.body.appendChild(bgImage);