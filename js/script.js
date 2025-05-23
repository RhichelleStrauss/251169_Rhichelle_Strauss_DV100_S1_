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

window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("formPopup");

  window.openPopup = function () {
    popup.classList.add("openPopup");
  };

  window.closePopup = function () {
    popup.classList.remove("openPopup");
  };
});