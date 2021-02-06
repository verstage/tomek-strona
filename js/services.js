//DOM
const serviceButtons = document.querySelectorAll('.button-services');
const plusMinusIcon = document.querySelectorAll('.button-icon');
const serviceList = document.querySelectorAll('.module-services');

//Event Listeners
for (i = 0; i < serviceButtons.length; i++) {

    serviceButtons[i].addEventListener("click", toggleServiceVisibility);
}


//Functions

function toggleServiceVisibility(e){
    let panel = this.nextElementSibling;
    let icon = this.children[2];

    this.classList.toggle('active-button');

    if(panel.style.maxHeight > "0rem") { 
        gsap.to(panel, {duration: 0.3, opacity: 0, maxHeight: 0, onComplete: () => {
            icon.innerHTML = '<i class="fas fa-plus-square"></i>';
        }});
       
        
    } else {
        
        gsap.to(panel, {duration: 0.3, opacity: 1, maxHeight: 150, ease: "expo.out", onComplete: () => {
            icon.innerHTML = '<i class="fas fa-minus-square"></i>';
        }});
        
        
    }
    

}