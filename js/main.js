const slides = document.querySelector(".slides");
const anh = document.querySelector(".anh");


let images = document.querySelectorAll(".slides img");


const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);


slides.insertBefore(lastClone, images[0]);
slides.appendChild(firstClone);


images = document.querySelectorAll(".slides img");


let current = 1;
const total = images.length;
let slideWidth = images[0].clientWidth;
slides.style.transform = `translateX(-${current * slideWidth}px)`;


function showSlide() {
  slides.style.transform = `translateX(-${current * slideWidth}px)`;
}


function nextSlide() {
  if (current >= total - 1) return; 
  slides.style.transition = "transform 0.5s ease";
  showSlide();


  slides.addEventListener(
    "transitionend",
    () => {
      if (images[current].isSameNode(firstClone)) {
        slides.style.transition = "none";
        current = 1;
        showSlide();
      }
    },
    { once: true }
  );
}

setInterval(nextSlide, 3000);


window.addEventListener("resize", () => {
  slideWidth = images[0].clientWidth;
  showSlide();
});
