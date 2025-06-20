



let marsCounter = parseInt(localStorage.getItem("marsCounter")) || 1; 
let neptuneCounter = parseInt(localStorage.getItem("neptuneCounter")) || 1;
let jupiterCounter = parseInt(localStorage.getItem("jupiterCounter")) || 1;
let saturnCounter = parseInt(localStorage.getItem("saturnCounter")) || 1;
let uranusCounter = parseInt(localStorage.getItem("uranusCounter")) || 1;
let moonCounter = parseInt(localStorage.getItem("moonCounter")) || 1;




//button counters on flights page 
let plus = document.querySelector("marsPlus"); //making mars the default plus, and reference back to html 
let minus = document.querySelector("marsMinus"); //making mars the default minus, and reference back to html
let num = document.querySelector("marsNum"); //making mars the default num, and reference back to html




//let marsCounter = 1;
//let neptuneCounter = 1;
//let jupiterCounter = 1;
//let saturnCounter = 1;
//let uranusCounter = 1;
//let moonCounter = 1;
//num = 1 default on all counters 

//flight prices declaration
const flightPrices = {
  mars: 25000,
  neptune: 45000, 
  jupiter: 65000, 
  saturn: 40000, 
  uranus: 50000, 
  moon: 15000
}

//event listeners to search for correct planet 
function SetSelector(planetString){
  plus = document.querySelector (`.${planetString}Plus`);
  minus = document.querySelector (`.${planetString}Minus`);
  num = document.querySelector (`.${planetString}Num`);

  cartNum = document.querySelector (`.${planetString}NumCart`)

}

let marsFlightPrice = marsCounter * flightPrices.mars;
let neptuneFlightPrice = neptuneCounter * flightPrices.neptune;
let jupiterFlightPrice = jupiterCounter * flightPrices.jupiter;
let saturnFlightPrice = saturnCounter * flightPrices.saturn;
let uranusFlightPrice = uranusCounter * flightPrices.uranus;
let moonFlightPrice = moonCounter * flightPrices.moon;




function Plus(planetString) {
  SetSelector(planetString);
    if (planetString === "mars") {
      marsCounter++;
      console.log(marsCounter);
      num.innerHTML = marsCounter;

      marsFlightPrice = marsCounter * flightPrices.mars;
      const priceFlight = document.getElementById("marsFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${marsFlightPrice.toLocaleString()}`;

      if (cartNum) cartNum.innerHTML = marsCounter;
      syncTotalCart(); 

    } else if (planetString === "neptune") {
      neptuneCounter++;
      console.log(neptuneCounter);
      num.innerHTML = neptuneCounter;

      neptuneFlightPrice = neptuneCounter * flightPrices.neptune;
      const priceFlight = document.getElementById("neptuneFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${neptuneFlightPrice.toLocaleString()}`;

      if (cartNum) cartNum.innerHTML = neptuneCounter;
      syncTotalCart(); 

    }
    else if (planetString === "jupiter") {
      jupiterCounter++;
      console.log(jupiterCounter);
      num.innerHTML = jupiterCounter;

      jupiterFlightPrice = jupiterCounter * flightPrices.jupiter;
      const priceFlight = document.getElementById("jupiterFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${jupiterFlightPrice.toLocaleString()}`;

      if (cartNum) cartNum.innerHTML = jupiterCounter;
      syncTotalCart(); 

    }
    else if (planetString === "saturn") {
      saturnCounter++;
      console.log(saturnCounter);
      num.innerHTML = saturnCounter;

      saturnFlightPrice = saturnCounter * flightPrices.saturn;
      const priceFlight = document.getElementById("saturnFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${saturnFlightPrice.toLocaleString()}`;

      if (cartNum) cartNum.innerHTML = saturnCounter;
      syncTotalCart(); 

    }
    else if (planetString === "uranus") {
      uranusCounter++;
      console.log(uranusCounter);
      num.innerHTML = uranusCounter;

      uranusFlightPrice = uranusCounter * flightPrices.uranus;
      const priceFlight = document.getElementById("uranusFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${uranusFlightPrice.toLocaleString()}`;

      if (cartNum) cartNum.innerHTML = uranusCounter;
      syncTotalCart(); 

    }
    else if (planetString === "moon") {
      moonCounter++;
      console.log(moonCounter);
      num.innerHTML = moonCounter;

      moonFlightPrice = moonCounter * flightPrices.moon;
      const priceFlight = document.getElementById("moonFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${moonFlightPrice.toLocaleString()}`;

      if (cartNum) cartNum.innerHTML = moonCounter;
      syncTotalCart(); 

    }
}//if runs through all code to check which planet is being counted and ensures they have seperate values 



function Minus(planetString) {
  SetSelector(planetString);
  
    if (planetString === "mars" && marsCounter > 1) { //ensures minus doesnt go beyond 0
      marsCounter--;
      console.log(marsCounter);
      num.innerHTML = marsCounter;

      marsFlightPrice = marsCounter * flightPrices.mars;
      const priceFlight = document.getElementById("marsFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${marsFlightPrice.toLocaleString()}`;


      if (cartNum) cartNum.innerHTML = marsCounter;//live changes the cart and flights page counter
      syncTotalCart(); 

    } else if (planetString === "neptune" && neptuneCounter > 1) {
      neptuneCounter--;
      console.log(neptuneCounter);
      num.innerHTML = neptuneCounter;

      neptuneFlightPrice = neptuneCounter * flightPrices.neptune;
      const priceFlight = document.getElementById("neptunwFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${neptuneFlightPrice.toLocaleString()}`;

      if (cartNum) cartNum.innerHTML = neptuneCounter;
      syncTotalCart(); 

    }
    else if (planetString === "jupiter" && jupiterCounter > 1) {
      jupiterCounter--;
      console.log(jupiterCounter);
      num.innerHTML = jupiterCounter;

      jupiterFlightPrice = jupiterCounter * flightPrices.jupiter;
      const priceFlight = document.getElementById("jupiterFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${jupiterFlightPrice.toLocaleString()}`;

      if (cartNum) cartNum.innerHTML = jupiterCounter;
      syncTotalCart(); 

    }
    else if (planetString === "saturn" && saturnCounter > 1) {
      saturnCounter--;
      console.log(saturnCounter);
      num.innerHTML = saturnCounter;

      saturnFlightPrice = saturnCounter * flightPrices.saturn;
      const priceFlight = document.getElementById("saturnFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${saturnFlightPrice.toLocaleString()}`;

      if (cartNum) cartNum.innerHTML = saturnCounter;
      syncTotalCart(); 

    }
    else if (planetString === "uranus" && uranusCounter > 1) {
      uranusCounter--;
      console.log(uranusCounter);
      num.innerHTML = uranusCounter;

      uranusFlightPrice = uranusCounter * flightPrices.uranus;
      const priceFlight = document.getElementById("uranusFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${uranusFlightPrice.toLocaleString()}`;

      if (cartNum) cartNum.innerHTML = uranusCounter;
      syncTotalCart(); 

    }
    else if (planetString === "moon" && moonCounter > 1) {
      moonCounter--;
      console.log(moonCounter);
      num.innerHTML = moonCounter;

      moonFlightPrice = moonCounter * flightPrices.moon;
      const priceFlight = document.getElementById("moonFlightPrice");
      if (priceFlight) priceFlight.innerText = `R${moonFlightPrice.toLocaleString()}`;
      
      if (cartNum) cartNum.innerHTML = moonCounter;
      syncTotalCart(); 

    }
}







//thank you popup on form 

const form = document.forms["contactForm"] 
if (form!=null) {
  form.addEventListener ("submit", openPopup);
}
const popup = document.getElementById("formPopup");

function openPopup(e) {
  e.preventDefault(); //stops STUPID refreshing due to "submit" on button type 
  let formData = {
    "name":this.name.value,
    "subject":this.subject.value
  }
  let header=document.getElementById("popUpHeader");
  let message=document.getElementById("popUpText");


  header.innerHTML = `
  <p id="popUpHeader">Thank you, <span>${formData.name}!</span></p>
  `; //reads data from html to insert name value inserted into form
  message.innerHTML = `
  <p id="popUpText">We will contact you soon about,<span>${formData.subject}</span></p>
  `; //reads data from html to insert subject value into form 
  //form receives values and inserts name and subject value for more personal message - additional detail, NOT mentioned in brief
  popup.classList.add("openPopup"); 
}

closePopup = function () {
  popup.classList.remove("openPopup");
}



//search bar 


//to close search bar click on search
//clicking on the flight takes you to the exact flight - extra implementation, not mentioned in brief 
//when you start typing the search filters - extra implementation
//function openSearchOptions(){
  //if (!searchOptionDisplay.classList.contains("showOptions")) {
  //searchOptionDisplay.classList.add("showOptions");
//}
//}
//visibility of search display
function displaySearchOptions() {

  searchOptionDisplay = document.querySelector(".searchBarList");

if (searchOptionDisplay.classList.contains("showOptions")) {
  searchOptionDisplay.classList.remove("showOptions");
} else{
  searchOptionDisplay.classList.add("showOptions");
}
}

function filterSearchItems () {

  let input = document.getElementById("searchBar").value;
  input = input.toLowerCase ();
  console.log(input);;
  
  let searchOptions = document.getElementsByClassName("searchItem");

  let i = 0;

  for (let i = 0; i < searchOptions.length; i++){
    if (searchOptions[i].innerHTML.toLowerCase().includes(input)){
      searchOptions[i].style.display = "";

    }
    else{
      searchOptions[i].style.display = "none";
    }
  }
}

//visibility of items in cart (remove)
//let flightCart = document.getElementById("marsCartCard")
//const cartRemove = document.getElementById("cartRemove");

//cartRemove = function (){
//  cartRemove.classList.remove("flightCard");
//}

//const marsCart = getElementById("marsCartCard"); 
//marsCart.addEventListener("cartAddMars", displayMarsCart)

//var removeCartItemButton = document.getElementsByClassName("cartRemove")
//console.log(removeCartItemButton)

//for (var i=0; 1 < removeCartItemButton.length; i++){
  //var removeButton = removeCartItemButton[i]
  //removeButton.addEventListener("click", function (event){
    //var removeButtonClicked = event.target 
    //removeButtonClicked.parentElement.parentElement.remove()
  //})
//}


//cart visibility 
 



const cartBody = document.getElementById("cartModalFlights");



function DisplayMarsCart(){

  if (document.getElementById("marsCartCard")){
    return; //ensures that by clicking the book now button more than once, only one flight is added instead of multiple flight cards
  }


  let displayMarsCart = `<div class="marsCartCard card flex mb-3" id="marsCartCard" style="max-width: 100%;"
                                            justify-content-center align-items-center>
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="../assets/img/flighhtMars.png"
                                                        class="cartPlanetImg img-fluid rounded-start">
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="flightCartTitle card-title">The Classic Mars
                                                            Experience</h5>
                                                        <p class="cartModalInfo card-text">Embark on a Mars vacation:
                                                            red deserts, ancient relics, and towering
                                                            canyons await. Enjoy low-gravity hiking, rover trips to
                                                            Olympus Mons, and
                                                            stargazing under Phobos and Deimos. Unforgettable adventures
                                                            beckon
                                                            on the rust-colored landscapes of the Red Planet.</p>
                                                        <p class="flightPrice" id="marsFlightPrice">R${marsFlightPrice}</p>
                                                        <div class="cartModalButtons col-md-8 mt-5 flex">
                                                            <div class="numOfFlights btn-group" role="group">
                                                                <button class="marsMinus btn"
                                                                    onclick="Minus('mars')">-</button>
                                                                <button class="marsNumCart btn">${marsCounter}</button>
                                                                <button class="marsPlus btn"
                                                                    onclick="Plus('mars')">+</button>
                                                            </div>
                                                            <button class="cartRemove" id="cartRemove" 
                                                            onclick="RemoveMarsCart(this)"><i
                                                                    class="fa-solid fa-trash-can fa-lg"
                                                                    style="color: #ffffff;"
                                                                    ></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

  `;
  cartBody.innerHTML += displayMarsCart;

  syncTotalCart(); 
}

function RemoveMarsCart(cartRemove){
  const cartCard = cartRemove.closest(".marsCartCard");

  if (cartCard){
    cartCard.remove();
  }
  syncTotalCart(); 
}


function DisplayNeptuneCart(){

if (document.getElementById("neptuneCartCard")){
    return; //ensures that by clicking the book now button more than once, only one flight is added instead of multiple flight cards
  }


  let displayNeptuneCart = `<div class="neptuneCartCard card flex mb-3" id="neptuneCartCard" style="max-width: 100%;"
                                            justify-content-center align-items-center>
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="../assets/img/flightNeptune.png"
                                                        class="cartPlanetImg img-fluid rounded-start">
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="flightCartTitle card-title">Neptune's Cosmic Drive
                                                        </h5>
                                                        <p class="cartModalInfo card-text">Embark on a voyage to Neptune
                                                            aboard the "Neptune Voyager." Witness
                                                            surreal vistas of swirling clouds and rings. Experience
                                                            weightlessness and
                                                            explore frigid oceans. Engage in thrilling spacewalks,
                                                            observe celestial
                                                            phenomena, and savor gourmet space cuisine. An unforgettable
                                                            adventure awaits, blending luxury with cosmic exploration.
                                                        </p>
                                                        <p class="flightPrice" id="neptuneFlightPrice">R${neptuneFlightPrice}</p>
                                                        <div class="cartModalButtons col-md-8 mt-5 flex">
                                                            <div class="numOfFlights btn-group" role="group">
                                                                <button class="neptuneMinus btn"
                                                                    style="background-color: #55daeb;"
                                                                    onclick="Minus('neptune')">-</button>
                                                                <button class="neptuneNumCart btn"
                                                                    style="background-color: #55daeb;">${neptuneCounter}</button>
                                                                <button class="neptunePlus btn"
                                                                    style="background-color: #55daeb;"
                                                                    onclick="Plus('neptune')">+</button>
                                                            </div>
                                                            <button class="cartRemove" id="cartRemove" 
                                                            onclick="RemoveNeptuneCart(this)"><i
                                                                    class="fa-solid fa-trash-can fa-lg"
                                                                    style="color: #ffffff;"
                                                                    ></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

  `; 
cartBody.innerHTML += displayNeptuneCart;
syncTotalCart(); 
}

function RemoveNeptuneCart(cartRemove){
  const cartCard = cartRemove.closest(".neptuneCartCard");

  if (cartCard){
    cartCard.remove();
  }
  syncTotalCart(); 
}



function DisplayJupiterCart(){

if (document.getElementById("jupiterCartCard")){
    return; //ensures that by clicking the book now button more than once, only one flight is added instead of multiple flight cards
  }

let displayJupiterCart = `<div class="jupiterCartCard card flex mb-3" id="jupiterCartCard" style="max-width: 100%;"
                                            justify-content-center align-items-center>
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="../assets/img/flightJupiter.png"
                                                        class="cartPlanetImg img-fluid rounded-start">
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="flightCartTitle card-title">The Giant's Journey</h5>
                                                        <p class="cartModalInfo card-text">Embark on a Jupiter voyage
                                                            aboard the "Jupiter Odyssey." Witness its
                                                            majestic storms and swirling atmosphere. Dive into metallic
                                                            hydrogen
                                                            oceans. Explore its moons, each a world unto itself. Engage
                                                            in gravity
                                                            surfing, comet chasing, and space excursions. Experience
                                                            cosmic wonder
                                                            in luxury, blending exploration with adventure.</p>
                                                        <p class="flightPrice" id="jupiterFlightPrice">R${jupiterFlightPrice}</p>
                                                        <div class="cartModalButtons col-md-8 mt-5 flex">
                                                            <div class="numOfFlights btn-group" role="group">
                                                                <button class="jupiterMinus btn"
                                                                    onclick="Minus('jupiter')">-</button>
                                                                <button class="jupiterNumCart btn">${jupiterCounter}</button>
                                                                <button class="jupiterPlus btn"
                                                                    onclick="Plus('jupiter')">+</button>
                                                            </div>
                                                            <button class="cartRemove" id="cartRemove" 
                                                            onclick="RemoveJupiterCart(this)"><i
                                                                    class="fa-solid fa-trash-can fa-lg"
                                                                    style="color: #ffffff;"
                                                                    ></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
`;

cartBody.innerHTML += displayJupiterCart;
syncTotalCart(); 
}

function RemoveJupiterCart(cartRemove){
  const cartCard = cartRemove.closest(".jupiterCartCard");

  if (cartCard){
    cartCard.remove();
  }
  syncTotalCart(); 
}


function DisplaySaturnCart(){


  if (document.getElementById("saturnCartCard")){
    return; //ensures that by clicking the book now button more than once, only one flight is added instead of multiple flight cards
  }


  let displaySaturnCart = `<div class="saturnCartCard card flex mb-3" id="saturnCartCard" style="max-width: 100%;"
                                            justify-content-center align-items-center>
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="../assets/img/flightSaturn.png"
                                                        class="cartPlanetImg img-fluid rounded-start">
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="flightCartTitle card-title">Ring Around Saturn</h5>
                                                        <p class="cartModalInfo card-text">Embark on a thrilling voyage
                                                            to Saturn aboard the "Saturn Explorer."
                                                            Marvel at its iconic rings and turbulent storms. Explore its
                                                            diverse moons,
                                                            from icy Enceladus to mysterious Titan, with activities
                                                            including rover
                                                            expeditions and cave exploration. Experience the wonders of
                                                            the cosmos
                                                            amidst luxurious accommodations, where the thrill of
                                                            discovery
                                                            intertwines seamlessly with the excitement of adventure.</p>
                                                        <p class="flightPrice" id="saturnFlightPrice">R${saturnFlightPrice}</p>
                                                        <div class="cartModalButtons col-md-8 mt-5 flex">
                                                            <div class="numOfFlights btn-group" role="group">
                                                                <button class="saturnMinus btn"
                                                                    style="background-color: #55daeb;"
                                                                    onclick="Minus('saturn')">-</button>
                                                                <button class="saturnNumCart btn"
                                                                    style="background-color: #55daeb;">${saturnCounter}</button>
                                                                <button class="saturnPlus btn"
                                                                    style="background-color: #55daeb;"
                                                                    onclick="Plus('saturn')">+</button>
                                                            </div>
                                                            <button class="cartRemove" id="cartRemove" 
                                                            onclick="RemoveSaturnCart(this)"><i
                                                                    class="fa-solid fa-trash-can fa-lg"
                                                                    style="color: #ffffff;"
                                                                    ></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

  `; 
  cartBody.innerHTML += displaySaturnCart; 

  syncTotalCart(); 
}

function RemoveSaturnCart(cartRemove){
  const cartCard = cartRemove.closest(".saturnCartCard");

  if (cartCard){
    cartCard.remove();
  }
  syncTotalCart(); 
}




function DisplayUranusCart(){

if (document.getElementById("uranusCartCard")){
    return; //ensures that by clicking the book now button more than once, only one flight is added instead of multiple flight cards
  }


  let displayUraunsCart = `<div class="uranusCartCard card flex mb-3" id="uranusCartCard" style="max-width: 100%;"
                                            justify-content-center align-items-center>
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="../assets/img/flightUranus.png"
                                                        class="cartPlanetImg img-fluid rounded-start">
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="flightCartTitle card-title">Uranus Uncharted</h5>
                                                        <p class="cartModalInfo card-text">Embark on a cosmic adventure
                                                            to Uranus with our "Uranus Unveiled" tour.
                                                            Explore its icy atmosphere and captivating moons. Experience
                                                            thrilling
                                                            zero-gravity excursions, witness mesmerizing auroras, and
                                                            immerse
                                                            yourself in celestial photography workshops. With luxury
                                                            accommodations and expert guides, discover the wonders of
                                                            Uranus in a
                                                            journey of a lifetime.</p>
                                                        <p class="flightPrice" id="uranusFlightPrice">R${uranusFlightPrice}</p>
                                                        <div class="cartModalButtons col-md-8 mt-5 flex">
                                                            <div class="numOfFlights btn-group" role="group">
                                                                <button class="uranusMinus btn"
                                                                    onclick="Minus('uranus')">-</button>
                                                                <button class="uranusNumCart btn">${uranusCounter}</button>
                                                                <button class="uranusPlus btn"
                                                                    onclick="Plus('uranus')">+</button>
                                                            </div>
                                                            <button class="cartRemove" id="cartRemove" 
                                                            onclick="RemoveUranusCart(this)"><i
                                                                    class="fa-solid fa-trash-can fa-lg"
                                                                    style="color: #ffffff;"
                                                                    ></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

  `;

  cartBody.innerHTML += displayUraunsCart;
  syncTotalCart(); 

}

function RemoveUranusCart(cartRemove){
  const cartCard = cartRemove.closest(".uranusCartCard");

  if (cartCard){
    cartCard.remove();
  }
  syncTotalCart(); 
}




function DisplayMoonCart(){

if (document.getElementById("moonCartCard")){
    return; //ensures that by clicking the book now button more than once, only one flight is added instead of multiple flight cards
  }

  let displayMoonCart = `<div class="moonCartCard card flex mb-3" id="moonCartCard" style="max-width: 100%;"
                                            justify-content-center align-items-center>
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="../assets/img/flightMoon.png"
                                                        class="cartPlanetImg img-fluid rounded-start">
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="flightCartTitle card-title">Moonlight Meander</h5>
                                                        <p class="cartModalInfo card-text">Experience the ultimate lunar
                                                            getaway with our "Moonlight Meander"
                                                            package. Depart Earth's atmosphere aboard the "Celestial
                                                            Cruiser" for a
                                                            short but unforgettable journey to the Moon. Enjoy lunar
                                                            walks,
                                                            breathtaking views of Earthrise, and stargazing under the
                                                            moon's serene
                                                            glow. Immerse yourself in luxury accommodations amidst the
                                                            tranquility
                                                            of space.</p>
                                                        <p class="flightPrice" id="moonFlightPrice">R${moonFlightPrice}</p>
                                                        <div class="cartModalButtons col-md-8 mt-5 flex">
                                                            <div class="numOfFlights btn-group" role="group">
                                                                <button class="moonMinus btn"
                                                                    style="background-color: #55daeb;"
                                                                    onclick="Minus('moon')">-</button>
                                                                <button class="moonNumCart btn"
                                                                    style="background-color: #55daeb;">${moonCounter}</button>
                                                                <button class="moonPlus btn"
                                                                    style="background-color: #55daeb;"
                                                                    onclick="Plus('moon')">+</button>
                                                            </div>
                                                            <button class="cartRemove" id="cartRemove" 
                                                            onclick="RemoveMoonCart(this)"><i
                                                                    class="fa-solid fa-trash-can fa-lg"
                                                                    style="color: #ffffff;"
                                                                    ></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


  `;

  cartBody.innerHTML += displayMoonCart;
  syncTotalCart(); 
}

function RemoveMoonCart(cartRemove){
  const cartCard = cartRemove.closest(".moonCartCard");

  if (cartCard){
    cartCard.remove();
  }
  syncTotalCart(); 
}

let cart = {
  mars: marsCounter,
  neptune: neptuneCounter,
  jupiter: jupiterCounter,
  saturn: saturnCounter,
  uranus: uranusCounter,
  moon: moonCounter

}

let saveCart = JSON.parse(localStorage.getItem("cartInfo")) || {};
marsCounter = saveCart.mars || 0; 
neptuneCounter = saveCart.neptune || 0;
jupiterCounter = saveCart.jupiter|| 0;
saturnCounter = saveCart.saturn || 0;
uranusCounter = saveCart.uranus|| 0;
moonCounter = saveCart.moon || 0;

//cart total
function syncTotalCart(){
  let totalCart = 0; 
  let totalFlights =0 ;


  if (document.getElementById("marsCartCard")){
    totalCart += marsCounter * flightPrices.mars;

    totalFlights += marsCounter;

  }

  if (document.getElementById("neptuneCartCard")){
    totalCart +=  neptuneCounter * flightPrices.neptune;

  }

  if (document.getElementById("jupiterCartCard")){
    totalCart +=  jupiterCounter * flightPrices.jupiter;
    
  }

  if (document.getElementById("saturnCartCard")){
    totalCart +=  saturnCounter * flightPrices.saturn;
    
  }

  if (document.getElementById("uranusCartCard")){
    totalCart +=  uranusCounter * flightPrices.uranus;
    
  }

  if (document.getElementById("moonCartCard")){
    totalCart +=  moonCounter * flightPrices.moon;
    
  }

document.getElementById("totalCart").innerHTML = `Total : R${totalCart.toLocaleString()}`;

totalFlights = marsCounter, uranusCounter, jupiterCounter, saturnCounter, moonCounter, neptuneCounter;
const cartFlightCounter = document.getElementById("cartFlightCountDot");
  cartFlightCounter.textContent = totalFlights;

  
 
  
    cartFlightCounter.style.display = "inline-block"; 
  }
  

