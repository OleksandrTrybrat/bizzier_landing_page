'use strict';

import { BurgerMenu } from './burgerMenu.js';
import { HeaderBlur } from './headerBlur.js';
import { CardPagination } from './pagination.js';
import { initTestimonialsSlider } from './slider.js';

// Ініціалізація після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu('#burger', 'header');
  new HeaderBlur('header');
  new CardPagination(
    '.studies__card', // Селектор карток (обгортки картки)
    '[data-control="prev"]', // Селектор кнопки "Назад"
    '[data-control="next"]', // Селектор кнопки "Вперед"
    '.page__number',
  );

  // 2. Викликаємо ініціалізацію слайдера
  initTestimonialsSlider();
});
