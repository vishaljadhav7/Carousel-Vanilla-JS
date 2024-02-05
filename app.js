const slides = document.querySelectorAll('.slide');
let counter = 0;
// console.log(slides);

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`;
    }
)

const Prev = ( ) =>{
    counter--;
    slideImage();
}

const Next = ( ) =>{
    counter++;
    slideImage();
}



const slideImage = ( ) =>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`;
        }  
    )
}

const slides = document.querySelectorAll('.slide');
let counter = 0;
// console.log(slides);

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`;
    }
)

const Prev = ( ) =>{
    counter--;
    slideImage();
}

const Next = ( ) =>{
    counter++;
    slideImage();
}



const slideImage = ( ) =>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`;
        }  
    )
}

