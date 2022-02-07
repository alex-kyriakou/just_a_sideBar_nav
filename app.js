const shrinkBtn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const input = document.getElementById("input");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab ");

let activeIndex;

shrinkBtn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  shrinkBtn.classList.add("hovered");

  input.value = "";

  setTimeout(() => {
    shrinkBtn.classList.remove("hovered");
  }, 500);
});

search.addEventListener("click", () => {
  document.body.classList.remove("shrink");
  search.lastElementChild.focus();
});

function moveActiveTab() {
  let topPosition = activeIndex * 58 + 2.5;
  active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");

  activeIndex = this.dataset.active;

  moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));
