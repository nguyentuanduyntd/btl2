document.addEventListener('DOMContentLoaded', function () {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('show');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
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
}