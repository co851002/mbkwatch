import './sass/main.scss';

const hand = document.querySelector('.hand');
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalDiv = document.querySelector('.digital');
const dateDiv = document.querySelector('.date');

function setDate() {

  const now = new Date();
  //console.log(now.toGMTString())
  let seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  let mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  let hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if(secondsDegrees >= 360){
    secondHand.style.transition='none';
  }
  //Add Zero if number is < 10
  if (mins < 10) {
    mins = '0'+mins
  }
  if (hour < 10) {
    hour = '0'+hours
  }
  if (seconds < 10) {
    seconds = '0'+seconds
  }

  const digital = hour+':'+mins+':'+seconds;
  digitalDiv.innerHTML = digital;

  //Get Date
  let date = now.getDate();
  if (date < 10) {
    date = '0'+date
  }
  dateDiv.innerHTML = date;
  setInterval(setDate, 1000);
}

window.onload = function(){
  var anim = setTimeout(function(){
    hourHand.style.transition = 'all 2s'
    minsHand.style.transition = 'all 2s'
    secondHand.style.transition = 'all 2s'
    setDate();
    clearTimeout(anim);
  }, 100);

  setTimeout(function(){
    secondHand.style.transition = 'all 0.05s'
  }, 2000);
}
