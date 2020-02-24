import { fromSelect, toSelect } from './elements.js';
import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';

// when the page loads, this code runs
export function init() {
  const form = document.querySelector('.app form');

  const optionHTML = generateOptions(currencies);

  // populate the options elements
  fromSelect.innerHTML = optionHTML;
  toSelect.innerHTML = optionHTML;

  form.addEventListener('input', handleInput);
}
