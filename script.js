const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

const interval = setInterval(blurring, 60);

function blurring() {

  load += 0.5;  
     
  if (load >= 100) {
  
    clearInterval(interval);
  }

  loadText.innerText = `${Math.floor(load)}%`;
 

  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, inMin, inMax, outMin, outMax) {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

