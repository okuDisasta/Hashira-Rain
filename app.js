window.onload = () => {
const carouselSlide = document.querySelector('.carousel-slide');
console.log(carouselSlide.clientWidth)
console.log(carouselSlide.clientHeight)
const carouselImagesSize = document.querySelector('.last-clone');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const container = document.querySelector('.carousel-container');
/*const tree = document.querySelector('.tree');
console.log(tree.clientHeight)*/

//Buttons
const previousBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter

let counter = 1;
const size = carouselSlide.clientWidth;
//console.log(size);
carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
//console.log(counter)

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.2s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    //console.log(counter)
});

previousBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.2s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    //console.log(counter)
    //console.log(carouselSlide.style.transform)
});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        //console.log(counter)
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
        
    }

    if(carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        //console.log(counter)
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)'
    }

});
}

//console.log(carouselImages.length);