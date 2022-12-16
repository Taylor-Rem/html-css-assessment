console.log('hello world');

function handleSubmit(evt) {
  evt.preventDefault();
  alert('form submitted');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
document.querySelector('img').addEventListener('mouseover', () => {
  alert('I want to pet this cat too');
});
