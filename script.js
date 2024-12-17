
let currentIndex = 0;
const wheels = document.querySelectorAll('.wheel');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

function updateSlider() {
    
    wheels.forEach(wheel => {
        wheel.classList.remove('active');
    });
    
    
    wheels[currentIndex].classList.add('active');
    
    
    leftArrow.disabled = currentIndex === 0;
    rightArrow.disabled = currentIndex === wheels.length - 1;
}

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < wheels.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

updateSlider();
