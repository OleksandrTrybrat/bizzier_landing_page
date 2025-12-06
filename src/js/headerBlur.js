'use strict';

export class HeaderBlur {
  constructor(headerBlur) {
    this.header = document.querySelector(headerBlur);
    // this.headerShadow = this.headerShadow.bind(this)
    this.init();
  }
  headerShadow = () => {
    if (!this.header) {
      // eslint-disable-next-line no-console
      console.error(`Element with selector ${this.headerBlur} not found.`);
      return;
    }

    if (window.scrollY > 1) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  };

  init() {
    window.addEventListener('scroll', this.headerShadow);
    this.headerShadow();
  }
}
