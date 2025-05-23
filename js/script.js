



//button counters on flights page 
let plus = document.querySelector("marsPlus"); //making mars the default plus, and reference back to html 
let minus = document.querySelector("marsMinus"); //making mars the default minus, and reference back to html
let num = document.querySelector("marsNum"); //making mars the default num, and reference back to html

let marsCounter = 0;
let neptuneCounter = 0;
let jupiterCounter = 0;
let saturnCounter = 0;
let uranusCounter = 0;
let moonCounter = 0;
//num = 0 default on all counters 

//event listeners to search for correct planet 
function SetSelector(planetString){
  plus = document.querySelector (`.${planetString}Plus`);
  minus = document.querySelector (`.${planetString}Minus`);
  num = document.querySelector (`.${planetString}Num`);

}

function Plus(planetString) {
  SetSelector(planetString);
    if (planetString === "mars") {
      marsCounter++;
      console.log(marsCounter);
      num.innerHTML = marsCounter;
    } else if (planetString === "neptune") {
      neptuneCounter++;
      console.log(neptuneCounter);
      num.innerHTML = neptuneCounter;
    }
    else if (planetString === "jupiter") {
      jupiterCounter++;
      console.log(jupiterCounter);
      num.innerHTML = jupiterCounter;
    }
    else if (planetString === "saturn") {
      saturnCounter++;
      console.log(saturnCounter);
      num.innerHTML = saturnCounter;
    }
    else if (planetString === "uranus") {
      uranusCounter++;
      console.log(uranusCounter);
      num.innerHTML = uranusCounter;
    }
    else if (planetString === "moon") {
      moonCounter++;
      console.log(moonCounter);
      num.innerHTML = moonCounter;
    }
}//if runs through all code to check which planet is being counted and ensures they have seperate values 



function Minus(planetString) {
  SetSelector(planetString);
    if (planetString === "mars" && marsCounter > 0) { //ensures minus doesnt go beyond 0
      marsCounter--;
      console.log(marsCounter);
      num.innerHTML = marsCounter;
    } else if (planetString === "neptune" && neptuneCounter > 0) {
      neptuneCounter--;
      console.log(neptuneCounter);
      num.innerHTML = neptuneCounter;
    }
    else if (planetString === "jupiter" && jupiterCounter > 0) {
      jupiterCounter--;
      console.log(jupiterCounter);
      num.innerHTML = jupiterCounter;
    }
    else if (planetString === "saturn" && saturnCounter > 0) {
      saturnCounter--;
      console.log(saturnCounter);
      num.innerHTML = saturnCounter;
    }
    else if (planetString === "uranus" && uranusCounter > 0) {
      uranusCounter--;
      console.log(uranusCounter);
      num.innerHTML = uranusCounter;
    }
    else if (planetString === "moon" && moonCounter > 0) {
      moonCounter--;
      console.log(moonCounter);
      num.innerHTML = moonCounter;
    }
}







//thank you popup on form 

const form = document.forms["contactForm"] 
form.addEventListener ("submit", openPopup);

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
function openSearchOptions(){
  if (!searchOptionDisplay.classList.contains("showOptions")) {
  searchOptionDisplay.classList.add("showOptions");
}
}
//visibility of search display
function displaySearchOptions() {

  searchOptionDisplay = document.querySelector(".searchBarList");
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






