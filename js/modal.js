var openclose = document.querySelector(".search-button");
var popup = document.querySelector(".form");
popup.classList.add("modal-show");
openclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});
