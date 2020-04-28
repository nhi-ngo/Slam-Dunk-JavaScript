const turtle = document.querySelector('.turtle');
let x = 0;
let y = 0;
const speed = 40;
let rotate = 0;
let flipped = false;

function handleKeyDown(e) {
  // if its not an arrow key, ignore it
  if (!e.key.includes('Arrow')) return;

  switch (event.key) {
    case 'ArrowUp':
      y -= 1;
      rotate = -90;
      break;
    case 'ArrowDown':
      y += 1;
      rotate = 90;
      break;
    case 'ArrowRight':
      x += 1;
      flipped = false;
      rotate = 0;
      break;
    case 'ArrowLeft':
      x -= 1;
      flipped = true;
      rotate = 0;
      break;
    default:
      break;
  }

  turtle.setAttribute(
    'style',
    `
    --x:${x * speed}px;
    --y:${y * speed}px;
    --rotateY: ${flipped ? '180deg' : 0};
    --rotate: ${rotate}deg;
  `
  );
}

window.addEventListener('keydown', handleKeyDown);
