<script>
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
    const width = 320; // tamaño card
    track.style.transform = `translateX(-${index * width}px)`;
  }
</script>