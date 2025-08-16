// AOS
AOS.init({ once: true, mirror: false, duration: 500, easing: 'ease-out' });

// Swiper (si tu veux un slider ailleurs)
const swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Lightbox
const lightbox = GLightbox({
  selector: '.glightbox'
});


