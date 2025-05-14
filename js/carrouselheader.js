
  function openMenu() {
    document.getElementById("mobileMenu").classList.add("active");
  }

  function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("active");
  }



  const carousel = document.getElementById("carouselText");
  const totalSlides = document.querySelectorAll(".text-item").length;
  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Auto-slide
  setInterval(nextSlide, 5000);
