"use strict";
const gallery = document.querySelector("#gallery");
const list = document.createElement("ul");
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

function createImg(images) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.classList.add("norm-image");
  img.src = images.url;
  list.append(li);
  li.append(img);
  return li;
}

const createGallery = images.map(drawImg => createImg(drawImg));
list.append(...createGallery);
list.classList.add("norm-list");
gallery.append(list);

// const showImages = images.reduce((acc, arr) => acc + arr.url, []);
