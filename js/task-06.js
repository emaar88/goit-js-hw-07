"use strict";

const valInput = document.querySelector("#validation-input");

function numberSymbols() {
  if (valInput.value.length === 6) {
    valInput.classList.add("valid");
    valInput.classList.remove("invalid");
  } else {
    valInput.classList.add("invalid");
    valInput.classList.remove("valid");
  }
}

valInput.addEventListener("blur", numberSymbols);
