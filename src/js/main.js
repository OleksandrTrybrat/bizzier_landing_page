'use strict'

import { BurgerMenu } from './burgerMenu.js'
import { HeaderBlur } from './headerBlur.js'

// Ініціалізація після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu('#burger', 'header')
  new HeaderBlur('header')
})
