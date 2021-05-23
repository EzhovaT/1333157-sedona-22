"use strict";

const btn = document.querySelector(".main-nav__toggle"),
  nav = document.querySelector(".main-nav");

nav.classList.remove("main-nav_nojs");
nav.classList.add("main-nav_closed-menu");

btn.addEventListener("click", () => {
  nav.classList.toggle("main-nav_closed-menu");
});
