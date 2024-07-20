const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", ( ) => {
    burger.classList.toggle("change");
    menu.classList.toggle("active");
})