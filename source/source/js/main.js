"use strict";

const btn = document.querySelector(".main-nav__toggle"),
  nav = document.querySelector(".main-nav");

nav.classList.remove("menu-nojs");

btn.addEventListener("click", () => {
  nav.classList.toggle("closed-menu");
});
