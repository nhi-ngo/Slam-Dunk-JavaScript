const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state - a list of all my items on the list
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  // const name = e.currentTarget.value; // this points to the whole form not the input that we need
  const name = e.currentTarget.item.value; // here we want to get the text of the input - because of the attribute name="item" on the <input>
  // if it is empty, then do not submit it. Can also insert attribute required in <input> tag
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
  // e.currentTarget.item.value = ''; This works fine but uses reset() for multiple inputs
  e.target.reset();

  // fire off a custom event - syntax: new CustomEvent('banana');
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input
        type = "checkbox" ${item.complete && 'checked'}
        value="${item.id}">
      <span class="itemName">${item.name}</span>
      <button
        aria-label="Remove ${item.name}"
        value="${item.id}"
      >&times;</button>
    </li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.log('Saving items to local storage');
  // localStorage is text-only. Need to convert object to string using JSON.stringify // The opposite JSON.parse() converts back to array of objects.
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  // pull the items from local storage(ls) and convert it back into an object
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // items = lsItems; Using this we need to update const items to let items
    // lsItems.forEach(item => items.push(item));
    // items.push(lsItems[0], lsItems[1]);
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItems(id) {
  console.log('Deleting item', id);
  // update our items array without this one
  items = items.filter(item => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('Marking as complete', id);
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event Delegation: We listen for the click on the list <ul> ut then delegate the click over to the button if that is what was clicked
list.addEventListener('click', function(e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItems(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage(); // run on page load
