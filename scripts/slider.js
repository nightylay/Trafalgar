function initSlider() {
  console.log(123);

  const swiper = new Swiper(".reviews__slider", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
}

export default initSlider