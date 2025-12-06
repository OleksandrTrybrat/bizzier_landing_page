'use strict';

export class CardPagination {
  constructor(
    allCardsSelector,
    prevArrowSelector,
    nextArrowSelector,
    btnNumbersSelector,
  ) {
    this.cards = document.querySelectorAll(allCardsSelector);
    this.prevArrow = document.querySelector(prevArrowSelector);
    this.nextArrow = document.querySelector(nextArrowSelector);
    this.btnNumbers = document.querySelectorAll(btnNumbersSelector);
    this.currentPage = 1;
    this.itemsPerPage = 3; // встановлення 3 карт на сторінку
    // Рахуємо клількість сторінок: (Всього карт / карт на сторінці).
    // Приклад: 9 / 3 = 3 сторінки.
    this.totalPages = Math.ceil(this.cards.length / this.itemsPerPage);
    if (this.cards.length > 0) {
      this.init();
    }
  }

  goToPage = (pageIndex) => {
    const pageNum = parseInt(pageIndex);
    if (pageNum < 1 || pageNum > this.totalPages) {
      return;
    }
    this.currentPage = pageNum;
    this.updateCards();
    this.updateControls();
  };

  updateCards = () => {
    // 1. Вираховуємо діапазон індексів для поточної сторінки
    // Для стр 1: start = 0, end = 3 (покаже індекси 0, 1, 2)
    // Для стр 2: start = 3, end = 6 (покаже індекси 3, 4, 5)
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.cards.forEach((card, index) => {
      // Якщо індекс карти потрапляє в діапазон - показуємо, інакше ховаємо
      if (index >= startIndex && index < endIndex) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  };

  updateControls = () => {
    this.btnNumbers.forEach((btnNum) => {
      btnNum.classList.remove('active');
      const pageIndex = parseInt(btnNum.getAttribute('data-page-index'));
      if (pageIndex === this.currentPage) {
        btnNum.classList.add('active');
      }
      this.prevArrow.style.opacity = '1';
      this.prevArrow.style.pointerEvents = 'auto';
      this.nextArrow.style.opacity = '1';
      this.nextArrow.style.pointerEvents = 'auto';

      if (this.currentPage === 1) {
        this.prevArrow.style.opacity = '0.5';
        this.prevArrow.style.pointerEvents = 'none';
      }
      if (this.currentPage === this.totalPages) {
        this.nextArrow.style.opacity = '0.5';
        this.nextArrow.style.pointerEvents = 'none';
      }
    });
  };

  init = () => {
    if (this.prevArrow) {
      this.prevArrow.addEventListener('click', (e) => {
        e.preventDefault();
        this.goToPage(this.currentPage - 1);
      });
    }
    if (this.nextArrow) {
      this.nextArrow.addEventListener('click', (e) => {
        e.preventDefault();
        this.goToPage(this.currentPage + 1);
      });
    }
    this.btnNumbers.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.goToPage(btn.getAttribute('data-page-index'));
      });
    });

    this.updateCards();
    this.updateControls();
  };
}
