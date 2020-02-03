// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');

// //Buttons
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// //Counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// //Button Listeners

// nextBtn.addEventListener('click', () => {
//   if (counter >= carouselImages.length - 1) return;
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   counter++;
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// prevBtn.addEventListener('click', () => {
//   if (counter <= 0) return;
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   counter--;
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// carouselSlide.addEventListener('transitionend', () => {
//   if (carouselImages[counter].id === "lastClone") {
//     carouselSlide.style.transition = "none";
//     counter = carouselImages.length - 2;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }

//   if (carouselImages[counter].id === "firstClone") {
//     carouselSlide.style.transition = "none";
//     counter = carouselImages.length - counter;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }
// })


// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = x.length };
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// }


// Other Image Slider JS here:

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();




// HTML for the other image slider: 

// <!-- Image carousel here -->
// <div class="carousel-container">
//     <i class="fas fa-arrow-left" id="prevBtn"></i>
//     <i class="fas fa-arrow-right" id="nextBtn"></i>
//     <div class="carousel-slide">
//         <img src="./images/carousel-images/UT-Austin_Second_Degree_Audit.jpg" id="lastClone" alt="">
//         <img src="./images/carousel-images/Uni-Lux.png" alt="">
//         <img src="./images/carousel-images/AUB-BSN.png" alt="">
//         <img src="./images/carousel-images/AUB-CS.png" alt="">
//         <img src="./images/carousel-images/Flatiron-Completion.png" alt="">
//         <img src="./images/carousel-images/HebrewUniJerusalemPreArrivalPacket.png" alt="">
//         <img src="./images/carousel-images/KevinPeery_UniversityOfUtahCert.jpg" alt="">
//         <img src="./images/carousel-images/UT-Austin_Second_Degree_Audit.jpg" alt="">
//         <img src="./images/carousel-images/Uni-Lux.png" id="firstClone" alt="">
//     </div>
// </div>
