"use strict";

const btn = document.querySelector(".main-nav__toggle"),
  links = document.querySelectorAll(".nav-list__item"),
  logo = document.querySelector(".nav-list__item_logo");

btn.addEventListener("click", () => {
  for (let link of links) {
    if (link != logo) {
      link.classList.toggle("nav-list__item_close");
    }
  }
});
