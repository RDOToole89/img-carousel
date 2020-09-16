const slides = document.getElementsByClassName("carousel-item");
const nextBtn = document.querySelector("#carousel-button-next");
const prevBtn = document.querySelector("#carousel-button-previous");
const slideCounter = document.querySelector(".slide-counter");
const pageBullets = document.querySelector(".page-bullets");
const description = document.querySelector(".description");

console.log(slides);

let slidePosition = 0;
slideCounter.innerText = slidePosition + 1;

const totalSlides = slides.length;

nextBtn.addEventListener("click", moveToNextSlide);

prevBtn.addEventListener("click", moveToPrevSlide);

nextBtn.addEventListener("load", moveToNextSlide);

function moveToNextSlide() {
    hideAllSlides();

    pageBullets.innerHTML = "";

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-visible");
    slideCounter.innerText = slidePosition + 1;

    for (let i = 0; i < slidePosition + 1; i++) {
        const bullet = document.createElement("div");
        bullet.classList.add("bullet");
        pageBullets.appendChild(bullet);
    }
}

function moveToPrevSlide() {
    hideAllSlides();

    pageBullets.innerHTML = "";

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    slideCounter.innerText = slidePosition + 1;
    slides[slidePosition].classList.add("carousel-visible");

    for (let i = 0; i < slidePosition + 1; i++) {
        const bullet = document.createElement("div");
        bullet.classList.add("bullet");
        pageBullets.appendChild(bullet);
    }
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-visible");
        slide.classList.add("carousel-invisble");
    }
}

// let autoSlide = setInterval(moveToNextSlide, 4000);
