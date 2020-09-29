const body = document.querySelector("body");

const IMG_NUMBER = 4;

function handleImgLoad() {}

function paintImage(imgNumber) {
  const img = new Image();
  img.src = `./images/${imgNumber + 1}.jpg`;
  img.classList.add("bgImage");
  body.appendChild(img);
}
function genRandom() {
  const randomNumber = Math.floor(Math.random() * IMG_NUMBER);
  return randomNumber;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
