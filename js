const carousel = document.getElementById("carousel");
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
let interval;

/* Update Slide */
function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

/* Next Slide */
function nextSlide() {
  index = (index + 1) % slides.length;
  updateCarousel();
}

/* Previous Slide */
function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
}

/* Auto Rotate */
function startAutoRotate() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoRotate() {
  clearInterval(interval);
}

/* Event Listeners */
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    index = Number(dot.dataset.slide);
    updateCarousel();
  });
});

/* Pause on Hover */
carousel.addEventListener("mouseenter", stopAutoRotate);
carousel.addEventListener("mouseleave", startAutoRotate);

/* Init */
startAutoRotate();
