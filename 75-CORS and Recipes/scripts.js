// http://www.recipepuppy.com/api/?q=pizza

const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const response = await fetch(`${proxy}${baseEndpoint}/?q=${query}`);
  const data = await response.json();
  return data;
}

async function handleSubmit(e) {
  e.preventDefault();
  console.log(form.query.value);
  fetchAndDisplay(form.query.value);
}

async function fetchAndDisplay(query) {
  // turn the form off by making button disabled
  form.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(form.query.value);
  console.log(recipes);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  console.log('Creating HTML');
  const html = recipes.map(
    recipe => `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${recipe.thumbnail &&
        `<img src="${recipe.thumbnail}" alt="${recipe.title}">`}
        <hr>
      <a href="${recipe.href}">View Recipe →</a>
    </div>`
  );
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);

// run on page load with pizza search
fetchAndDisplay('pizza');
