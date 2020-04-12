const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  // const name = e.currentTarget.value; // WRONG! this points to the whole form not the input element that we need
  const name = e.currentTarget.item.value;
  // here we want to get the text in the input - we can do this because of the attribute name="item" on the <input>

  // if it is empty, then do not submit it. Can also insert attribute "required" into <input> tag
  if (!name) return;

  const item = {
    name,
    // use the advantage of having different number of milliseconds
    id: Date.now(),
    complete: false,
  };

  // Push the items into our state
  items.push(item);
  console.log(`There are now ${items.length} in your state`);

  // Clear the form
  // e.currentTarget.item.value='';
  // e.currentTarget.item.value = ''; This works fine but uses reset() for multiple inputs
  e.target.reset();
  displayItems();
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}">&times;</button>
    </li>`
    )
    .join('');
  list.innerHTML = html;
}

shoppingForm.addEventListener('submit', handleSubmit);
