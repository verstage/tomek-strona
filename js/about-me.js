//SLIDER
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll(".carousel-slide img");
const carouselContainer = document.querySelector(".carousel-container");
const prevBtnDiv = document.querySelector(".prevBtn");
const nextBtnDiv = document.querySelector(".nextBtn");

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
let size = carouselImages[counter].clientWidth;



carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener("click", () => {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    
});
prevBtn.addEventListener("click", () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    
});

carouselSlide.addEventListener("transitionend", () => {
    if(carouselImages[counter].id === "lastClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if(carouselImages[counter].id === "firstClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});

carouselContainer.addEventListener("mouseenter", () => {
    prevBtnDiv.classList.add("shadow-grey-effect-left");
    nextBtnDiv.classList.add("shadow-grey-effect-right");
    console.log("Hovered");
});
carouselContainer.addEventListener("mouseleave", () => {
    prevBtnDiv.classList.remove("shadow-grey-effect-left");
    nextBtnDiv.classList.remove("shadow-grey-effect-right");
    console.log("Unhovered");
});

///////////////////////////////////////////////////////////////////////

const qualificationsCards = document.querySelectorAll(".qualification");
const fullScreenDiv = document.querySelector(".image");
const fullScreenContainer = document.querySelector(".fullScreenImages");
const closeIcon = document.querySelector(".close-image-icon");

for(i=0; i < qualificationsCards.length; i++) {
    qualificationsCards[i].addEventListener("click", displayImageFullScreen);
    closeIcon.addEventListener("click", closeFullScreenImage);
}

function displayImageFullScreen(e) {
    fullScreenDiv.childNodes[1] = this.childNodes[0];
    fullScreenDiv.childNodes[2].textContent = this.childNodes[1].textContent;
    fullScreenContainer.style.display = "block";

}

function closeFullScreenImage(e) {
    fullScreenContainer.style.display = "none";
}