let burgerMenu = document.querySelector(".burger_menu");
let burgerOpenButton = document.querySelector(".burger_image");
let burgerCloseButton = document.querySelector(".burger_close");
let burgerMenulink = document.querySelectorAll(".burger_nav_item");
let overLay = document.querySelector(".overlay");
let buttonsService = document.querySelectorAll(".button_service");
let cards = document.querySelectorAll(".service_card");
let nameOfCards = document.querySelectorAll(".card_name");

console.log(buttonsService);
console.log(cards);
console.log(nameOfCards);
let buttonsServiceArray = Array.prototype.slice.call(buttonsService);
console.log(buttonsServiceArray);
let nameOfCardsArray = Array.prototype.slice.call(nameOfCards);
console.log(nameOfCardsArray);

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
  if (eventButton.innerHTML[0] === "G") {
    for (let j = 0; j < nameOfCardsArray.length; j++) {
      if (nameOfCardsArray[j].innerHTML[0] === eventButton.innerHTML[0]) {
        cards[j].classList.add("service_focus");
        cards[j].classList.remove("service_nonefocus");
      } else if (
        nameOfCardsArray[j].innerHTML[0] !== eventButton.innerHTML[0]
      ) {
        if (cards[j].classList.contains("service_focus")) {
          cards[j].classList.remove("service_nonefocus");
        } else {
          cards[j].classList.add("service_nonefocus");
        }
      }
    }
  }
  if (eventButton.innerHTML[0] === "L") {
    for (let j = 0; j < nameOfCardsArray.length; j++) {
      if (nameOfCardsArray[j].innerHTML[0] === eventButton.innerHTML[0]) {
        cards[j].classList.add("service_focus");
        cards[j].classList.remove("service_nonefocus");
      } else if (
        nameOfCardsArray[j].innerHTML[0] !== eventButton.innerHTML[0]
      ) {
        if (cards[j].classList.contains("service_focus")) {
          cards[j].classList.remove("service_nonefocus");
        } else {
          cards[j].classList.add("service_nonefocus");
        }
      }
    }
  }
  if (eventButton.innerHTML[0] === "P") {
    for (let j = 0; j < nameOfCardsArray.length; j++) {
      if (nameOfCardsArray[j].innerHTML[0] === eventButton.innerHTML[0]) {
        cards[j].classList.add("service_focus");
        cards[j].classList.remove("service_nonefocus");
      } else if (
        nameOfCardsArray[j].innerHTML[0] !== eventButton.innerHTML[0]
      ) {
        if (cards[j].classList.contains("service_focus")) {
          cards[j].classList.remove("service_nonefocus");
        } else {
          cards[j].classList.add("service_nonefocus");
        }
      }
    }
  }
}

function blurCard(eventButton) {
  if (eventButton.innerHTML[0] === "G") {
    console.log(eventButton.innerHTML[0]);
    let count = 0;
    for (let i = 0; i < nameOfCardsArray.length; i++) {
      if (cards[i].classList.contains("service_nonefocus")) {
        count++;
      } else {
        count;
      }
    }
    console.log(count);
    for (let j = 0; j < nameOfCardsArray.length; j++) {
      console.log(nameOfCardsArray[j].innerHTML[0]);
      if (nameOfCardsArray[j].innerHTML[0] === eventButton.innerHTML[0]) {
        cards[j].classList.remove("service_focus");
        if (count < 4) {
          cards[j].classList.add("service_nonefocus");
        }
      } else if (
        nameOfCardsArray[j].innerHTML[0] !== eventButton.innerHTML[0]
      ) {
        if (count >= 4) {
          cards[j].classList.remove("service_nonefocus");
        }
      }
    }
  }
  if (eventButton.innerHTML[0] === "L") {
    console.log(eventButton.innerHTML[0]);
    let count = 0;
    for (let i = 0; i < nameOfCardsArray.length; i++) {
      if (cards[i].classList.contains("service_nonefocus")) {
        count++;
      } else {
        count;
      }
    }
    console.log(count);
    for (let j = 0; j < nameOfCardsArray.length; j++) {
      console.log(nameOfCardsArray[j].innerHTML[0]);
      if (nameOfCardsArray[j].innerHTML[0] === eventButton.innerHTML[0]) {
        cards[j].classList.remove("service_focus");
        if (count < 5) {
          cards[j].classList.add("service_nonefocus");
        }
      } else if (
        nameOfCardsArray[j].innerHTML[0] !== eventButton.innerHTML[0]
      ) {
        if (count >= 5) {
          cards[j].classList.remove("service_nonefocus");
        }
      }
    }
  }
  if (eventButton.innerHTML[0] === "P") {
    console.log(eventButton.innerHTML[0]);
    let count = 0;
    for (let i = 0; i < nameOfCardsArray.length; i++) {
      if (cards[i].classList.contains("service_nonefocus")) {
        count++;
      } else {
        count;
      }
    }
    console.log(count);
    for (let j = 0; j < nameOfCardsArray.length; j++) {
      console.log(nameOfCardsArray[j].innerHTML[0]);
      if (nameOfCardsArray[j].innerHTML[0] === eventButton.innerHTML[0]) {
        cards[j].classList.remove("service_focus");
        if (count < 3) {
          cards[j].classList.add("service_nonefocus");
        }
      } else if (
        nameOfCardsArray[j].innerHTML[0] !== eventButton.innerHTML[0]
      ) {
        if (count >= 3) {
          cards[j].classList.remove("service_nonefocus");
        }
      }
    }
  }
}

function add(event) {
  let eventButton = event.target;
  console.log(eventButton);
  var countOfActiveButtons = 0;
  var countOfDisabledButtons = 0;
  for (let i = 0; i < buttonsService.length; i++) {
    if (buttonsService[i].disabled) {
      countOfDisabledButtons += 1;
    }
  }
  console.log(countOfDisabledButtons);
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
  console.log(countOfActiveButtons);
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

function remove(event) {
  let eventButton = event.target;
  eventButton.classList.remove("button_focus");
  console.log(eventButton);
  blurCard(eventButton);
  for (let i = 0; i < buttonsService.length; i++) {
    buttonsService[i].style.backgroundColor = "#edf2ec";
    buttonsService[i].style.color = "#e06733";
  }
}

buttonsService.forEach((element) => element.addEventListener("click", add));
//buttonsService.forEach((element) => element.addEventListener("blur", remove));
