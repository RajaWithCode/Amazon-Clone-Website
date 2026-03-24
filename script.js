let images = [
  "images/banner1.jpg",
  "images/banner2.jpg",
  "images/banner3.jpg",
  "images/banner4.jpg",
  "images/banner5.jpg",
];

let index = 0;

function nextSlide() {
  index = (index + 1) % images.length;
  document.getElementById("slideImage").src = images[index];
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slideImage").src = images[index];
}




let scrollAmount = 0;

function slideRight() {
  const slider = document.getElementById("slider");
  scrollAmount += 300;
  slider.style.transform = `translateX(-${scrollAmount}px)`;
}

function slideLeft() {
  const slider = document.getElementById("slider");
  scrollAmount -= 300;
  if (scrollAmount < 0) scrollAmount = 0;
  slider.style.transform = `translateX(-${scrollAmount}px)`;
}


let scrollAmount_2 = 0;

function slideRight_1() {
  const slider = document.getElementById("slider_1");
  scrollAmount_2+= 300;
  slider.style.transform = `translateX(-${scrollAmount_2}px)`;
}

function slideLeft_1() {
  const slider = document.getElementById("slider_1");
  scrollAmount_2 -= 300;
  if (scrollAmount_2 < 0) scrollAmount_2 = 0;
  slider.style.transform = `translateX(-${scrollAmount_2}px)`;
}