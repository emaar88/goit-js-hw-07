"use strict";
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function changeName() {
  if (nameInput.value.length !== 0) {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = "незнакомец";
  }
}
nameInput.addEventListener("input", changeName);
