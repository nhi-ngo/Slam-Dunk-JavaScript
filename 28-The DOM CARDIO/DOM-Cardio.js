// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('.wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
// add three list items with the words "one, two three" in them
const ul = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>    
`;

// put that list into the above wrapper
div.innerHTML = ul;

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'http://picsum.photos/500';
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy!';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>`;

// put this div before the unordered list from above
const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// console.log(ulElement);

// add a class to the second paragraph called warning
// remove the first paragraph

// FIRST WAY TO DO (drawback: subject to change of HTML structure then the follow code breaks)
// const myDiv = div.firstElementChild.firstElementChild.nextElementSibling;
// myDiv.classList.add('warning');
// console.log(myDiv);
// const firstDiv = div.firstElementChild.firstElementChild.remove();
// console.log(firstDiv);

// SECOND WAY TO DO
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();
// console.log(myDiv.children[2]);

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const html = `
  <div class="playerCard">
  <h2>${name} — ${age}</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete</button>
    </div>`;
  return html;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// console.log(cards);

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('nhi', 30, 150);
cardsHTML += generatePlayerCard('tin', 10, 180);
cardsHTML += generatePlayerCard('lin', 50, 120);
cardsHTML += generatePlayerCard('bao', 90, 130);
// console.log(cardsHTML);

// append those cards to the div
cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener

const buttons = document.querySelectorAll('button');

function deleteCard(e) {
  const buttonClicked = e.target;
  // buttonClicked.parentElement.remove(); // what if we move button to inside the paragraph, the 'parentElement' now is the paragraph not the outer div anymore
  buttonClicked.closest('.playerCard').remove();
  console.log(e.target);
}

buttons.forEach(button => button.addEventListener('click', deleteCard));
