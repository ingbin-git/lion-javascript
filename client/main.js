/* eslint no-unused-vars: 'off' */

// console.log('hello js');

// const a = 10;

// const b = 10;

const input = document.querySelector('#todo');

let value = input.value;

input.addEventListener('input', () => {
  value = input.value;
  // console.log(value);
  console.log(value === 'hello');
});

// console.log(input.value);

// input.classList.add('is-active');
// input.classList.remove('is-active');
