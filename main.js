const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const timeUpdate = () =>{
  let date = new Date(),
  secTog =(date.getSeconds() / 60) * 360,
  minTog =(date.getMinutes() / 60) * 360,
  hrTog =(date.getHours() / 12) * 360;

  sec.style.transform = `rotate(${secTog}deg)`;
  min.style.transform = `rotate(${minTog}deg)`;
  hr.style.transform = `rotate(${hrTog}deg)`;

}
setInterval(timeUpdate, 1000);
