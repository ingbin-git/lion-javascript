import { tiger, xhrPromise } from './lib/index.js';

// xhr.get('https://jsonplaceholder.typicode.com/users', (res) => {
//   console.log(res);
//   xhr.get('server', () => {
//     xhr.get('px', () => {});
//   });
// });

// console.log(xhrPromise);

const data = await tiger.get('https://jsonplaceholder.typicode.com/users');

// console.log(data);

const URL = 'https://jsonplaceholder.typicode.com/users';

fetch(URL)
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    // console.log(result);
  });

const response = await fetch(URL);
const data1 = await response.json();
// console.log(data1);

// console.log(await fetch(URL)); // then도 사용 가능
