"use strict";
let counterValue = 0;
const decrBtn = document.querySelector('button[data-action="increment"]');
const incrBtn = document.querySelector('button[data-action="decrement"]');
const valueCounter = document.querySelector("#value");

function inc() {
  counterValue += 1;
  valueCounter.textContent = counterValue;
}
function dec() {
  counterValue -= 1;
  valueCounter.textContent = counterValue;
}

incrBtn.addEventListener("click", inc);
decrBtn.addEventListener("click", dec);
