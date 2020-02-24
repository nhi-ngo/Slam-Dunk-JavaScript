import { convert } from './library.js';
import { formatCurrency } from './utils.js';
import { fromSelect, toSelect, fromInput, toInput } from './elements.js';

export async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toInput.textContent = formatCurrency(rawAmount, toSelect.value);
}