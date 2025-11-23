'use strict'

import { BurgerMenu } from './burgerMenu.js'

// Ініціалізація після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu('#burger', 'header')
})
