/*Menu*/
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

/*Module Form*/
var link = document.querySelector(".modal-form__link");
var popup = document.querySelector(".modal-form");
var bg = document.querySelector(".modal-wrapper");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-form--show");
  bg.classList.add("modal-wrapper--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-form--show")) {
      popup.classList.remove("modal-form--show");
      bg.classList.remove("modal-wrapper--show");
    }
  }
});

/*Invalid status*/
var submit = document.querySelector(".form-order__submit");
var invalidList = document.querySelectorAll(".form-section__check");

submit.addEventListener("click", function(event) {
  for (index = 0; index < invalidList.length; index++) {
  invalidList[index].classList.add("form-section__submitting")
  }
});
