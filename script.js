let section = document.querySelectorAll(".bg");
let firstP = document.querySelectorAll(".firstP");
let secondP = document.querySelectorAll(".secondP");

for(let i = 0; i < section.length; i++){
    function spread(){
        this.classList.toggle("open")
        firstP[i].classList.toggle("active");
        secondP[i].classList.add("active");
    }

    section[i].addEventListener("click", spread);
}