"use strict";
const eats = document.querySelector("#ingredients");

const list = document.createElement("ul");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

function createLi(text) {
  const li = document.createElement("li");
  li.textContent = text;
  //list.append(li);
  return li;
}

const eatList = ingredients.map(menuItem => createLi(menuItem));
list.append(...eatList);
eats.append(list);
