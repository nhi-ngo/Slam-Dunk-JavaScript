// Select elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 15; // capital underscore letter means true constant, the value never changes

// Set up our canvas for drawing

// destructuring feature generates the same result as the below
// const width = canvas.width;
// const height = canvas height;
const { width, height } = canvas;

// create random x and y starting point on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

let hue = 0;
// ctx.strokeStyle = `hsl(${hue},100%, 50%)`; // run on page load, pass again into function draw
ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
ctx.lineJoin = 'round'; // Type of corners where two lines meet: round, bevel, miter (default).
ctx.lineCap = 'round'; // Type of endings on the end of lines: butt, round, square.
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke(); // Strokes the current sub-paths with the current stroke style // Draw path to the canvas

// Write a draw function using object destructing
// function draw(options) {
//   console.log(options.key);
// }

// same as above options.key
function draw({ key }) {
  // increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
  console.log(key);

  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);

  // move our x and y values depending on what the user did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault(); // stop the page from scrolling down
    draw({ key: e.key });
  }
}

// Clear / shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height); // clear the canvas

  // The issue here 'shake' only runs once. Solution: listen for the shake animation to finish then automatically remove it from the canvas
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('Done the shake!');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// Another issue: the canvas still has the EventListener of animationend added to it
// Every time we clear the canvas, we're adding a new EventListener to it over and over again
// once:true unbinds itself after animationend event ends. Same as removeEventlistener.

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
