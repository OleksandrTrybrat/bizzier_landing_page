'use strict';

export class Accordion {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      return;
    }

    this.titles = this.container.querySelectorAll('.accordion__faq-title');
    this.init();
  }

  init() {
    this.titles.forEach((title) => {
      title.addEventListener('click', () => this.handleClick(title));
    });
  }

  handleClick(title) {
    // 1. Знаходимо елементи поточної секції
    const parent = title.closest('.accordion__faq');
    const content = parent.querySelector('.accordion__faq-content');
    const btn = parent.querySelector('.accordion__btn');

    // 2. Перевіряємо, чи відкрита САМЕ ЦЯ секція
    const isOpen = parent.classList.contains('active');

    if (isOpen) {
      // ЯКЩО ВІДКРИТА — ЗАКРИВАЄМО
      parent.classList.remove('active');
      title.classList.remove('active');
      content.classList.remove('active');
      content.style.maxHeight = null;
      if (btn) {
        btn.classList.remove('active');
      }
    } else {
      // ЯКЩО ЗАКРИТА — ВІДКРИВАЄМО
      parent.classList.add('active');
      title.classList.add('active');
      content.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
      if (btn) {
        btn.classList.add('active');
      }
    }
  }

  // Метод closeAll можна залишити на випадок, якщо вам знадобиться
  // закрити всі секції програмно (наприклад, при зміні фільтрів)
  closeAll() {
    const activeSections = this.container.querySelectorAll(
      '.accordion__faq.active',
    );
    activeSections.forEach((section) => {
      section.classList.remove('active');
      section
        .querySelector('.accordion__faq-title')
        ?.classList.remove('active');
      section.querySelector('.accordion__btn')?.classList.remove('active');
      const content = section.querySelector('.accordion__faq-content');
      if (content) {
        content.classList.remove('active');
        content.style.maxHeight = null;
      }
    });
  }
}
