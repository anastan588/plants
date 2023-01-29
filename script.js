let burgerMenu = document.querySelector(".burger_menu");
let burgerOpenButton = document.querySelector(".burger_image");
let burgerCloseButton = document.querySelector(".burger_close");
let burgerMenulink = document.querySelectorAll(".burger_nav_item");
let overLay = document.querySelector('.overlay');
let buttonsService =document.querySelectorAll(".button_service");
let cards = document.querySelectorAll(".service_card");
let nameOfCards = document.querySelectorAll(".card_name");
let gardenButton = document.querySelector(".garden");
let lawnButton = document.querySelector(".lawn");
let plantButton = document.querySelector(".plant");


console.log(buttonsService);
console.log(cards);
console.log(nameOfCards);
let buttonsServiceArray =  Array.prototype.slice.call(buttonsService);
console.log(buttonsServiceArray);
let nameOfCardsArray= Array.prototype.slice.call(nameOfCards);
console.log(nameOfCardsArray);
let gardenCardsName = nameOfCardsArray.filter(function(element) {
  return element.innerHTML ==="Garden care";
});
console.log(gardenCardsName);

function burgerOpen() {
  burgerMenu.style.right="0%";
  overLay.style.display="block";
}

function burgerClose() {
    burgerMenu.style.right="-100%";
    overLay.style.display="none";
}



function focusCard(eventButton) {
  
   if (eventButton.innerHTML[0] ==="G") {
    console.log(eventButton.innerHTML[0]);
    for (let j=0; j<nameOfCardsArray.length; j++) {
      console.log(nameOfCardsArray[j].innerHTML[0]);
      if (nameOfCardsArray[j].innerHTML[0]===eventButton.innerHTML[0]) {
        cards[j].classList.add("service_focus"); 
        cards[j].classList.remove("service_nonefocus");       
        console.log(cards[j].className);
        } else if (nameOfCardsArray[j].innerHTML[0]!== eventButton.innerHTML[0]) {
          if (cards[j].classList.contains("service_focus"))  {
            cards[j].classList.remove("service_nonefocus");
          } else {
            cards[j].classList.add("service_nonefocus");
          }
          } 
      }
    }
    if (eventButton.innerHTML[0] ==="L") {
      console.log(eventButton.innerHTML[0]);
      for (let j=0; j<nameOfCardsArray.length; j++) {
        console.log(nameOfCardsArray[j].innerHTML[0]);
        if (nameOfCardsArray[j].innerHTML[0]===eventButton.innerHTML[0]) {
          cards[j].classList.add("service_focus");
          cards[j].classList.remove("service_nonefocus"); 
          console.log(cards[j].className);
          } else if (nameOfCardsArray[j].innerHTML[0]!== eventButton.innerHTML[0] ) {
            if (cards[j].classList.contains("service_focus"))  {
              cards[j].classList.remove("service_nonefocus");
            } else {
              cards[j].classList.add("service_nonefocus");
            }
                   
          
          }
         
        }
      } 
  if (eventButton.innerHTML[0] ==="P") {
        console.log(eventButton.innerHTML[0]);
        for (let j=0; j<nameOfCardsArray.length; j++) {
          console.log(nameOfCardsArray[j].innerHTML[0]);
          if (nameOfCardsArray[j].innerHTML[0]===eventButton.innerHTML[0]) {
            cards[j].classList.add("service_focus");
            cards[j].classList.remove("service_nonefocus"); 
            
            console.log(cards[j].className);
            } else if (nameOfCardsArray[j].innerHTML[0]!== eventButton.innerHTML[0]) {
              if (cards[j].classList.contains("service_focus"))  {
                cards[j].classList.remove("service_nonefocus");
              } else {
                cards[j].classList.add("service_nonefocus");
              }

             
            }
           
          }
        } 
};
  


function blurCard(eventButton) {
  
  if (eventButton.innerHTML[0] ==="G") {
   console.log(eventButton.innerHTML[0]);
   for (let j=0; j<nameOfCardsArray.length; j++) {
     console.log(nameOfCardsArray[j].innerHTML[0]);
     if (nameOfCardsArray[j].innerHTML[0]===eventButton.innerHTML[0]) {
       cards[j].classList.remove("service_focus");
       //cards[j].style.transform = "scale(1.05)";
       console.log(cards[j].className);
       } else if (nameOfCardsArray[j].innerHTML[0]!== eventButton.innerHTML[0]) {
         cards[j].classList.remove("service_nonefocus");
         //cards[j].style.filter = "blur(10px)";
       }
      
     }
   }
   if (eventButton.innerHTML[0] ==="L") {
     console.log(eventButton.innerHTML[0]);
     for (let j=0; j<nameOfCardsArray.length; j++) {
       console.log(nameOfCardsArray[j].innerHTML[0]);
       if (nameOfCardsArray[j].innerHTML[0]===eventButton.innerHTML[0]) {
         cards[j].classList.remove("service_focus");
         //cards[j].style.transform = "scale(1.05)";
         console.log(cards[j].className);
         } else if (nameOfCardsArray[j].innerHTML[0]!== eventButton.innerHTML[0]) {
           cards[j].classList.remove("service_nonefocus");
           //cards[j].style.filter = "blur(10px)";
         }
        
       }
     } 
 if (eventButton.innerHTML[0] ==="P") {
       console.log(eventButton.innerHTML[0]);
       for (let j=0; j<nameOfCardsArray.length; j++) {
         console.log(nameOfCardsArray[j].innerHTML[0]);
         if (nameOfCardsArray[j].innerHTML[0]===eventButton.innerHTML[0]) {
           cards[j].classList.remove("service_focus");
           //cards[j].style.transform = "scale(1.05)";
           console.log(cards[j].className);
           } else if (nameOfCardsArray[j].innerHTML[0]!== eventButton.innerHTML[0]) {
             cards[j].classList.remove("service_nonefocus");
             //cards[j].style.filter = "blur(10px)";
           }
          
         }
       } 
};


burgerOpenButton.addEventListener( "click", burgerOpen);
burgerCloseButton.addEventListener("click",burgerClose);
burgerMenulink.forEach( (element) => element.addEventListener("click", burgerClose));
overLay.addEventListener("click", burgerClose);
var event;

function add(event) {
  /*for (let i =0; i<buttonsService.length; i++) {
      buttonsService[i].classList.toggle(".active");
    }*/
   
   
  let eventButton = event.target;
  /*if(eventButton.classList.contains(".active")) {
    return eventButton.classList.remove(".active");
    
  }*/
  eventButton.classList.add(".active");
  console.log(eventButton);
  focusCard(eventButton);
};


function remove(event) {
  let eventButton = event.target;
  eventButton.classList.remove(".active");

  console.log(eventButton);
  blurCard(eventButton);
};


//gardenButton.addEventListener("click", add);
//lawnButton.addEventListener("click", add);
//plantButton.addEventListener("click", add);
buttonsService.forEach((element) => element.addEventListener("click", add));
//buttonsService.forEach((element) => element.addEventListener("blur", remove));

