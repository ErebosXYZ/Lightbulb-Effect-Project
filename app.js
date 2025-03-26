// Buena suerte ! Espero que se te encianda la "bombilla"!
// Hem d'afegir un event on click que canviï la classe de bulb-off a bulb-on
let bulb = document.querySelector("#bulb");

document.querySelector("#bulb").addEventListener("mouseover", function (){
    bulb.classList.toggle("bulb-on");
});
document.querySelector("#bulb").addEventListener("mouseout", function (){
    bulb.classList.toggle("bulb-on");
});