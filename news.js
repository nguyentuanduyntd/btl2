window.onscroll = function() {
    const button = document.querySelector(".scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

window.onload=function(){
    document.querySelector(".scrollToTop").onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };
};
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}