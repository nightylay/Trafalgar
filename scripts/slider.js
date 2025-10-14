function initSlider() {
  console.log(123)

  const reviewsSlider = new Swiper('.reviews__block', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 150,

    // Пагинация
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Навигационные стрелки
    navigation: {
      nextEl: '.reviews__slider-button-next',
      prevEl: '.reviews__slider-button-prev',
    },
  });
};


export default initSlider