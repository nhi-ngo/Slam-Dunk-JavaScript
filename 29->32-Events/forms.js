const wes = document.querySelector('.wes');

wes.addEventListener('click', function(e) {
  console.log('You clicked it');
  const shouldChangePage = confirm(
    'This website might be malicious! Do you wish to proceed?'
  );
  if (!shouldChangePage) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry!!!');
    event.preventDefault(); // stop the form from submitting
  }
  // console.log(event.currentTarget.email.value); // wesbos@gmail.com"
  // console.log(event.currentTarget.agree.checked); // true
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
