let burgerMenu = document.querySelector(".burger_menu");
let burgerOpenButton = document.querySelector(".burger_image");
let burgerCloseButton = document.querySelector(".burger_close");
let burgerMenulink = document.querySelectorAll(".burger_nav_item");
let overLay = document.querySelector(".overlay");
let buttonsService = document.querySelectorAll(".button_service");
let cards = document.querySelectorAll(".service_card");
let nameOfCards = document.querySelectorAll(".card_name");
let buttonsArrow = document.querySelectorAll(".arrow_circle");
let pricesMenu = document.querySelectorAll(".choise_price");
let pricesTitle = document.querySelectorAll(".choise_title");

console.log(buttonsArrow);
console.log(pricesMenu);
console.log(pricesTitle);
let buttonsServiceArray = Array.prototype.slice.call(buttonsService);
console.log(buttonsServiceArray);
let nameOfCardsArray = Array.prototype.slice.call(nameOfCards);

function burgerOpen() {
  burgerMenu.style.right = "0%";
  overLay.style.display = "block";
}

function burgerClose() {
  burgerMenu.style.right = "-100%";
  overLay.style.display = "none";
}

burgerOpenButton.addEventListener("click", burgerOpen);
burgerCloseButton.addEventListener("click", burgerClose);
burgerMenulink.forEach((element) =>
  element.addEventListener("click", burgerClose)
);
overLay.addEventListener("click", burgerClose);
var event;

function focusCard(eventButton) {
  for (let j = 0; j < nameOfCardsArray.length; j++) {
    if (nameOfCardsArray[j].innerHTML[0] === eventButton.innerHTML[0]) {
      cards[j].classList.add("service_focus");
      cards[j].classList.remove("service_nonefocus");
    } else if (nameOfCardsArray[j].innerHTML[0] !== eventButton.innerHTML[0]) {
      if (cards[j].classList.contains("service_focus")) {
        cards[j].classList.remove("service_nonefocus");
      } else {
        cards[j].classList.add("service_nonefocus");
      }
    }
  }
}

function blurCard(eventButton) {
  let count = 0;
  for (let i = 0; i < nameOfCardsArray.length; i++) {
    if (cards[i].classList.contains("service_nonefocus")) {
      count++;
    } else {
      count;
    }
  }

  for (let j = 0; j < nameOfCardsArray.length; j++) {
    if (nameOfCardsArray[j].innerHTML[0] === eventButton.innerHTML[0]) {
      cards[j].classList.remove("service_focus");
      if (count < 4 && eventButton.innerHTML[0] === "G") {
        cards[j].classList.add("service_nonefocus");
      } else if (count < 5 && eventButton.innerHTML[0] === "L") {
        cards[j].classList.add("service_nonefocus");
      } else if (count < 3 && eventButton.innerHTML[0] === "P") {
        cards[j].classList.add("service_nonefocus");
      }
    } else if (nameOfCardsArray[j].innerHTML[0] !== eventButton.innerHTML[0]) {
      if (count >= 4 && eventButton.innerHTML[0] === "G") {
        cards[j].classList.remove("service_nonefocus");
      } else if (count >= 5 && eventButton.innerHTML[0] === "L") {
        cards[j].classList.remove("service_nonefocus");
      } else if (count >= 3 && eventButton.innerHTML[0] === "P") {
        cards[j].classList.remove("service_nonefocus");
      }
    }
  }
}

function add(event) {
  event.stopPropagation();
  let eventButton = event.target;

  var countOfActiveButtons = 0;
  var countOfDisabledButtons = 0;
  for (let i = 0; i < buttonsService.length; i++) {
    if (buttonsService[i].disabled) {
      countOfDisabledButtons += 1;
    }
  }

  if (countOfDisabledButtons >= 1) {
    for (let j = 0; j < buttonsService.length; j++) {
      buttonsService[j].removeAttribute("disabled");
      buttonsService[j].style.cursor = "pointer";
    }
  }
  if (eventButton.classList.contains("button_focus")) {
    eventButton.classList.remove("button_focus");
    blurCard(eventButton);
    eventButton.style.backgroundColor = "#edf2ec";
    eventButton.style.color = "#e06733";
  } else {
    eventButton.disabled = false;
    eventButton.classList.toggle("button_focus");
    eventButton.style.backgroundColor = "#e06733";
    eventButton.style.color = "white";
    focusCard(eventButton);
  }
  for (let i = 0; i < buttonsService.length; i++) {
    if (buttonsService[i].classList.contains("button_focus")) {
      countOfActiveButtons += 1;
    }
  }

  for (let k = 0; k < buttonsService.length; k++) {
    if (countOfActiveButtons >= 2) {
      if (buttonsService[k].classList.contains("button_focus")) {
        buttonsService[k].removeAttribute("disabled");
        buttonsService[k].style.cursor = "pointer";
      } else {
        buttonsService[k].disabled = "true";
        buttonsService[k].style.cursor = "not-allowed";
      }
    }
  }
}

function remove() {
  for (let i = 0; i < buttonsService.length; i++) {
    eventButton = buttonsService[i];
    buttonsService[i].classList.remove("button_focus");
    buttonsService[i].style.backgroundColor = "#edf2ec";
    buttonsService[i].style.color = "#e06733";
    buttonsService[i].removeAttribute("disabled");
    buttonsService[i].style.cursor = "pointer"
  }
  for (let j = 0; j < nameOfCardsArray.length; j++) {
    cards[j].classList.remove("service_nonefocus");
    cards[j].classList.remove("service_focus");
  }
}

buttonsService.forEach((element) => element.addEventListener("click", add));
window.addEventListener("click", remove);

for (let i = 0; i < pricesTitle.length; i++) {
  pricesTitle[i].addEventListener("click", function () {
    event.stopPropagation();
    console.log(this);
    var countOfActiveArrows = 0;
    for (let j = 0; j < pricesTitle.length; j++) {
      if (pricesTitle[j].classList.contains("arrow_focus")) {
        countOfActiveArrows += 1;
        console.log(countOfActiveArrows);
        if (countOfActiveArrows >= 1 && this !== pricesTitle[j]) {
          pricesTitle[j].classList.remove("arrow_focus");
          buttonsArrow[j].style.transform = "rotate(0deg)";
          buttonsArrow[j].style.backgroundColor = "#d9d9d9";
          pricesTitle[j].style.backgroundColor = "#edf2ec";
          pricesTitle[j].style.borderBottomLeftRadius = "20px";
          pricesTitle[j].style.borderBottomRightRadius = "20px";
          pricesMenu[j].style.borderTopLeftRadius = "20px";
          pricesMenu[j].style.borderTopRightRadius = "20px";
          pricesMenu[j].style.maxHeight = "0px";
          pricesMenu[j].style.overflow = "hidden";
        }
      }
    }

    this.classList.toggle("arrow_focus");
    if (this.classList.contains("arrow_focus")) {
      buttonsArrow[i].style.backgroundColor = "#c1e698";
      buttonsArrow[i].style.transform = "rotate(180deg)";
      this.style.backgroundColor = "#d6e7d2";
      this.style.borderBottomLeftRadius = "0px";
      this.style.borderBottomRightRadius = "0px";
      pricesMenu[i].style.borderTopLeftRadius = "0px";
      pricesMenu[i].style.borderTopRightRadius = "0px";
      pricesMenu[i].style.maxHeight = pricesMenu[i].scrollHeight + "px";
      pricesMenu[i].style.overflow = "";
    } else {
      buttonsArrow[i].style.backgroundColor = "#d9d9d9";
      buttonsArrow[i].style.transform = "rotate(0deg)";
      this.style.backgroundColor = "#edf2ec";
      this.style.borderBottomLeftRadius = "20px";
      this.style.borderBottomRightRadius = "20px";
      pricesMenu[i].style.borderTopLeftRadius = "20px";
      pricesMenu[i].style.borderTopRightRadius = "20px";
      pricesMenu[i].style.maxHeight = "0px";
      pricesMenu[i].style.overflow = "hidden";
    }
  });
}
