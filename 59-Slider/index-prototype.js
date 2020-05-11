function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  this.slider = slider;

  // select the element needed for the slider
  this.slides = this.slider.querySelector('.slides');

  // why not this.prevButton?? Since we don't need ro reference them outside of the constructor, so keep them as regular variables
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // When this slider is created, run startSlider()
  this.startSlider();
  this.applyClasses();

  // Event Listeners
  prevButton.addEventListener('click', () => this.move('back'));

  // 'this' got rebound to the element on the left of 'addEventListener' which is the nextButton,
  // while it should be bound to the instance which is the slider.
  // nextButton.addEventListener('click', this.move);

  // HOW TO FIX: either way below works
  nextButton.addEventListener('click', () => this.move());
  // nextButton.addEventListener('click', this.move.bind(this));
}

Slider.prototype.startSlider = function() {
  this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
  // console.log({
  //   current: this.current,
  //   prev: this.prev,
  //   next: this.next,
  // });
};

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function(direction) {
  // first strip all the classes off the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  if (direction === 'back') {
    // make new array of the new values, and destructure them over and into the prev, current and next variables
    [this.prev, this.current, this.next] = [
      // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // get the next slide, or if it's at the end, loop around and grab the first slide
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

// const dogSlider = Slider(1234); Browser will throw an error since 1234 is not a dom element

console.log(mySlider, dogSlider);

window.addEventListener('keyup', function(e) {
  console.log(this); // Window
  
  if (e.key === 'ArrowRight') {
    dogSlider.move();
  }
  if (e.key === 'ArrowLeft') {
    dogSlider.move('back');
  }
});
