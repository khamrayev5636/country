let elBtn = document.querySelector(".header__button-js");
let elBody = document.querySelector("body");
let elLabel = document.querySelector(".hero__form-label");
let elTop = document.querySelector(".hero__form-country");
let linkBtn = document.querySelector(".about__link");

elBtn.addEventListener("click", function(){
    elBody.classList.toggle("dark-mod");
    elLabel.classList.toggle("hero__form-label-show");
    elTop.classList.toggle("hero__form-country-show");
    linkBtn.classList.toggle("about__link-back");
})
