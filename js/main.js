
//Home page
    //Stiky nav-bar

    //When user srcoll the page, execute function
    const upbar = document.getElementById("upbar");
    const navbar = document.getElementById("navbar");
    const main = document.getElementById("main");
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

const mobileMenuSlide = () => {
    mobileMenuContainer.classList.toggle("active");
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



 