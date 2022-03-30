const clockContainer = document.querySelector(".js-clock");
const clockTime = clockContainer.querySelector("h1");
const 월일 = document.querySelector(".월일");
const 요일 = document.querySelector(".요일");




function nowTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();



  clockTime.innerText =
    `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`

}


function dayTime() {
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const now = new Date();
  const 월 = now.getMonth() + 1;
  const 일 = now.getDate();
  const day = dayNames[now.getDay()];

  if (월 < 10) {
    월일.innerText = `0${월}-${일}`
  } else {
    월일.innerText = `${월}-${일}`
  }

  요일.innerText = day

}



function init() {
  nowTime();
  dayTime();
  setInterval(nowTime, 30000);
}
init();
