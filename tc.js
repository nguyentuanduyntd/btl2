document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0; 
    const sections = document.querySelectorAll('main > section');

    function showSection(index) {
        for (let i = 0; i < sections.length; i++) {
            if (i === index) {
                sections[i].style.display = 'flex'; 
            } else {
                sections[i].style.display = 'none'; 
            }
        }
    }

    document.querySelector('.fa-angle-left').addEventListener('click', () => {
     
        currentIndex = (currentIndex === 0) ? sections.length - 1 : currentIndex - 1;
        showSection(currentIndex);
    });

    document.querySelector('.fa-angle-right').addEventListener('click', () => {
    
        currentIndex = (currentIndex === sections.length - 1) ? 0 : currentIndex + 1;
        showSection(currentIndex);
    });
    showSection(currentIndex);
});