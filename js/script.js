//button counters on flights page 


const plus = document.querySelector (".plus");
minus = document.querySelector (".minus"),
num = document.querySelector (".num");


let a = 1;

plus.addEventListener("click", ()=>{

    a++;
    console.log(a);
    num.innerText = a;

});


minus.addEventListener("click", ()=>{

    if (a > 1){
        a--;
        num.innerText = a;
    }

});

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