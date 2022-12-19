let myForm = document.getElementById("myForm");
let yesEl = document.getElementById("yes");
let NoEl = document.getElementById("No");
let yesblock = document.getElementById("yesblock");
let noblock = document.getElementById("noblock");
let selectedOption = null;
yesEl.addEventListener("click", function(event) {
    yesblock.classList.remove("d-none");
    yesblock.classList.add("d-block");
    noblock.classList.remove("d-block");
    noblock.classList.add("d-none");
});
NoEl.addEventListener("click", function(event) {
    yesblock.classList.remove("d-block")
    yesblock.classList.add("d-none");
    noblock.classList.remove("d-none");
    noblock.classList.add("d-block");
});
