"use strict";

const items = document.querySelectorAll("li.item");
console.log(`В списке ${items.length} категории.`);

function headerLiInfo(elements) {
  const headers = elements.firstElementChild.textContent;
  console.log(`Категория: ${headers}`);
  const countLi = elements.lastElementChild.children.length;
  console.log(`Количество элементов: ${countLi}`);
}
items.forEach(el => headerLiInfo(el));
