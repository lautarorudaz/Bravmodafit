function createCarousel(containerId, cardClass, leftBtnClass, rightBtnClass) {
  const carousel = document.getElementById(containerId);
  const cards = carousel.querySelectorAll(`.${cardClass}`);
  let currentIndex = 0;

  function getVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) return 1;
    if (screenWidth < 1024) return 2;
    return 3;
  }

  function getCardWidth() {
    const card = cards[0];
    return card.offsetWidth + 10; // Ajusta el margen si usás otro valor
  }

  function scroll(direction) {
    const visible = getVisibleCards();
    const maxIndex = cards.length - visible;
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const shift = getCardWidth() * currentIndex;
    carousel.style.transform = `translateX(-${shift}px)`;
  }

  // Botones
  const leftBtn = document.querySelector(`.${leftBtnClass}`);
  const rightBtn = document.querySelector(`.${rightBtnClass}`);

  if (leftBtn) leftBtn.addEventListener('click', () => scroll(-1));
  if (rightBtn) rightBtn.addEventListener('click', () => scroll(1));

  // Reset en resize
  window.addEventListener('resize', () => {
    const shift = getCardWidth() * currentIndex;
    carousel.style.transform = `translateX(-${shift}px)`;
  });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  // Primer carrusel
  createCarousel('hotsale-carousel', 'hotsale-product-card', 'left', 'right');

  // Segundo carrusel
  createCarousel('hotsale-carousel2', 'hotsale-product-card2', 'left2', 'right2');
});