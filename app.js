const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');
const slidesContainer = document.getElementById('slides-container');

let currentSlide = 0; // Initialize the current slide index

prevButton.addEventListener('click', () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    scrollToSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = Math.min(currentSlide + 1, slidesContainer.children.length - 1);
    scrollToSlide(currentSlide);
});

function scrollToSlide(index) {
    slidesContainer.scrollTo({
        left: slidesContainer.children[index].offsetLeft,
        behavior: 'smooth',
    });
}
