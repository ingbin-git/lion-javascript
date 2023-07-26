import { tiger, xhrPromise } from './lib/index.js';

// xhr.get('https://jsonplaceholder.typicode.com/users', (res) => {
//   console.log(res);
//   xhr.get('server', () => {
//     xhr.get('px', () => {});
//   });
// });

// console.log(xhrPromise);

const data = await tiger.get('https://jsonplaceholder.typicode.com/users');

console.log(data);
