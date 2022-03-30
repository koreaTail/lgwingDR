const body = document.querySelector('body');
const backgroundcenter = body.querySelector('.background-center');

const IMG_NUMBER = 12;

function paitImage(imgNumber) {
    //반복제거, url
    backgroundcenter.style.backgroundRepeat = "no-repeat";
    //이미지 등록
    backgroundcenter.style.backgroundImage = `url("./images/${imgNumber + 1}.jpg")`;
    // backgroundcenter.style.backgroundImage = 'url("./images/(2).jpg")'
}

function genRendom() {
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number;
}

function init() {
    const randomNumber = genRendom();
    paitImage(randomNumber)
}
init();




