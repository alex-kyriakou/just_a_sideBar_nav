const shrinkBtn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const input = document.getElementById("input");

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
