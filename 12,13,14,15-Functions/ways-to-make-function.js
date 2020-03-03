// 1. Named function
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

// 2. Anonymous function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// 3. Function Expression
const doctorize = function(firstName) {
  return `Dr. ${firstName}`;
};

// 4. Arrow function 
// ES5
function inchToCM(inches) {
  const cm = inches * 2.54;
  return cm;
}

// ES6
const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });


// 5. Immediately Invoked Function Expression (IIFE) 

(function(age) {
  return `You are cool and age ${age}`;
})(10);

// 6. Methods!!!
const wes = {
  name: 'Westopher Bos',
  // Method!
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow function
  wisperHi: () => {
    console.log('hii wesss im a mouse');
  }
}

// 7. Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!');
}

button.addEventListener('click', handleClick);

// Timer Callback
setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);