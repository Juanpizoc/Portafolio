if (!track || !next || !prev) {
  console.log("Error: elementos del carrusel no encontrados");
}

document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector('.carousel-track');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  let index = 0;

  next.addEventListener('click', () => {
    index++;
    updateCarousel();
  });

  prev.addEventListener('click', () => {
    index--;
    updateCarousel();
  });

  function updateCarousel() {
    const cards = document.querySelectorAll('.project-card');
    const width = 320;

    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length - 1;

    track.style.transform = `translateX(-${index * width}px)`;
  }

});