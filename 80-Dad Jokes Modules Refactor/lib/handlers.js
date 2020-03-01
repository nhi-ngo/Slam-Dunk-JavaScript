import { fetchJoke } from './index.js';
import { randomItemFromArray } from './utils.js';
import { loader, jokeHolder, jokeButtonSpan } from './elements.js';
import buttonText from '../data/buttonText.js';

export async function handleButtonClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}