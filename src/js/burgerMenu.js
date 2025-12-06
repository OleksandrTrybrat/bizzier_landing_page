'use strict';

export class BurgerMenu {
  constructor(burgerSelector, headerSelector) {
    this.burger = document.querySelector(burgerSelector);
    this.header = document.querySelector(headerSelector);
    this.init();
  }

  init() {
    if (!this.burger || !this.header) {
      return;
    }
    this.burger.addEventListener('click', () => {
      this.header.classList.toggle('open');
    });
  }
}
