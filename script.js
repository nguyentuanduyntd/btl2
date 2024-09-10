window.addEventListener('load',function(){
    let main=document.getElementById("main");
    let images=document.querySelectorAll(".thumb img");
    for(let im of images){
        im.onclick = function(){
            main.src=this.src;
        }
    }
});
window.addEventListener('scroll', function() {
    const button = document.querySelector(".scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});
window.addEventListener('load', function() {
    document.querySelector(".scrollToTop").addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});
window.addEventListener('load', function() {
    const inputs = document.querySelectorAll('input');
    const submitButton = document.getElementById('submitButton');

    function checkInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value === '') {
                input.style.border = '2px solid red'; 
                allFilled = false;
            } else {
                input.style.border = ''; 
            }
        });
        return allFilled;
    }

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            checkInputs();
            submitButton.disabled = !checkInputs();
        });
    });

    submitButton.addEventListener('click', () => {
        if (checkInputs()) {
            alert('Đặt tiệc thành công!');
        } else {
            alert('Vui lòng điền đầy đủ thông tin!');
        }
    });
});
window.onload = function() {

    const datTiecMenu = document.getElementById('datTiecMenu');
    const datTiecSection = document.getElementById('datTiecSection');

    datTiecMenu.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const offset = 100; 
        const elementPosition = datTiecSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
};

function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}