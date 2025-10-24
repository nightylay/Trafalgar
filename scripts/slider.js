function initSlider() {
  let sliderReviews = new Swiper(".reviews__body", {
    cssMode: true,
    navigation: {
      nextEl: ".reviews__slider-button-next",
      prevEl: ".reviews__slider-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },

  });
};


export default initSlider