"use strict";
const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
let fontSizeText;

function calc() {
  fontSizeText = sizeControl.value;
  text.style.fontSize = `${fontSizeText}px`;
}

sizeControl.addEventListener("input", calc);
