
document.querySelectorAll('.shoe-box').forEach(shoeBox => {
    let currentIndex = 0;
    const slides = shoeBox.querySelectorAll('.slide');
    const prevButton = shoeBox.querySelector('.btn-prev');
    const nextButton = shoeBox.querySelector('.btn-next');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });
});
