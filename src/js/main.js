'use strict'

import { BurgerMenu } from './burgerMenu.js'

// Ініціалізація після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu('#burger', 'header')
})

// ==========================================================
// JAVASCRIPT
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header')

  // Перевірка наявності елемента
  if (!header) return

  // Функція, яка перевіряє позицію скролу
  function toggleHeaderShadow() {
    // window.scrollY - це поточна вертикальна позиція прокручування
    // Якщо позиція прокручування > 1px (тобто прокручування почалося)
    if (window.scrollY > 1) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  }

  // 1. Прив'язуємо функцію до події скролу
  window.addEventListener('scroll', toggleHeaderShadow)

  // 2. Викликаємо функцію один раз при завантаженні,
  // щоб встановити коректний стан, якщо сторінка завантажена не на початку.
  toggleHeaderShadow()
})
