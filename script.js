const slides = document.querySelector('.slides');
const total = slides.children.length;
let current = 0;

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % total;
  slides.style.transform = `translateX(-${current * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + total) % total;
  slides.style.transform = `translateX(-${current * 100}%)`;
});
