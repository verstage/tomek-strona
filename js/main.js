
//Home page
    //Stiky nav-bar

    //When user srcoll the page, execute function
    
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;
    
    function stickyClassFunction() {
        if(window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            
            
        } else {
            navbar.classList.remove("sticky");
        }
        return ;
    }

    window.onscroll = function () {
    stickyClassFunction()
    return;
    };
    /////////////////////////////////////////////////////

    
    
// Mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenuContainer = document.getElementById("mobile-menu-container");
const closeIconMobileMenu = document.getElementById("close-icon-mobile-menu");

const mobileMenuSlide = (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    if(mobileMenuContainer.classList.contains("inactive")){
        mobileMenuContainer.classList.replace("inactive", "active");
        gsap.fromTo(mobileMenuContainer, {right: "-100%"}, {right: "0%", duration: 0.5});
        
    } else {
        
        gsap.fromTo(mobileMenuContainer, {right: "0%"}, {right: "-100%", duration: 1, onComplete: () => {
            mobileMenuContainer.classList.replace("active", "inactive");
        }});
    }
}

hamburger.addEventListener("click", mobileMenuSlide);
closeIconMobileMenu.addEventListener("click", mobileMenuSlide);





// Srcolling button on in showcase home page
$('.scrollTo').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 300
        }, 1000);
    }
});



 