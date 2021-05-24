const btn = document.querySelector(".main-nav__toggle"),
  nav = document.querySelector(".main-nav"),
  map = document.querySelector(".map-canvas");

nav.classList.remove("main-nav_nojs");
map.classList.remove("map-canvas__nojs");
nav.classList.add("main-nav_closed-menu");

btn.addEventListener("click", () => {
  nav.classList.toggle("main-nav_closed-menu");
});
