'use strict';

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export function initTestimonialsSlider() {
  // Знаходимо основний контейнер
  const sliderContainer = document.querySelector('.testimonialsSwiper');

  if (!sliderContainer) {
    console.warn('Testimonials: Контейнер .testimonialsSwiper не знайдено.');
    return;
  }

  // Ініціалізація
  const swiper = new Swiper('.testimonialsSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true, // Корисно для перевірки: чи можна перетягувати мишкою

    // Вказуємо кнопки навігації максимально точно
    navigation: {
      nextEl: '.testimonials .btn-next',
      prevEl: '.testimonials .btn-prev',
      // Додаємо ці класи, щоб Swiper розумів, коли кнопки неактивні
      disabledClass: 'arrow__disabled',
      hiddenClass: 'arrow__hidden',
    },

    pagination: {
      el: '.testimonials__pagination',
      type: 'fraction',
      formatFractionCurrent: (n) => (n < 10 ? `0${n}` : n),
      formatFractionTotal: (n) => (n < 10 ? `0${n}` : n),
      renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
      },
    },

    // Додаємо підтримку клавіатури для перевірки роботи
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  return swiper;
}
