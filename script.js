let burgerMenu = document.querySelector(".burger_menu");
let burgerOpenButton = document.querySelector(".burger_image");
let burgerCloseButton = document.querySelector(".burger_close");
let burgerMenulink = document.querySelectorAll(".burger_nav_item");
let overLay = document.querySelector('.overlay');

function burgerOpen() {
  burgerMenu.style.right="0%";
  overLay.style.display="block";
}

function burgerClose() {
    burgerMenu.style.right="-100%";
    overLay.style.display="none";
  }


burgerOpenButton.addEventListener( "click", burgerOpen);
burgerCloseButton.addEventListener("click",burgerClose);
burgerMenulink.forEach( (element) => element.addEventListener("click", burgerClose));
overLay.addEventListener("click", burgerClose);