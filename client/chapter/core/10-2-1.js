/* -------------------------------------------------------------------------- */
/*                                   1. for문                                  */
/* -------------------------------------------------------------------------- */

// let calculateTotal = function () {
//   console.log(arguments);

//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// };

// const result = calculateTotal(1000, 500, 200, 6500, 100);
// console.log(result);

/* -------------------------------------------------------------------------- */
/*                                 2. for of문                                 */
/* -------------------------------------------------------------------------- */

// let calculateTotal = function () {
//   console.log(arguments);

//   let total = 0;
//   for (let key of arguments) {
//     total += key;
//   }
//   return total;
// };

// const result = calculateTotal(1000, 500, 200, 6500, 100);
// console.log(result);

/* -------------------------------------------------------------------------- */
/*                               3. forEach 빌려쓰기                              */
/* -------------------------------------------------------------------------- */

// let calculateTotal = function () {
//   console.log(arguments);

//   let total = 0;
//   Array.prototype.forEach.call(arguments, function (item) {
//     console.log(item);
//     total += item;
//   });
//   return total;
// };

// const result = calculateTotal(1000, 500, 200, 6500, 100);
// console.log(result);

/* -------------------------------------------------------------------------- */
/*                      4. slice를 빌려써서 배열로 만들기(instance)                      */
/* -------------------------------------------------------------------------- */

// let calculateTotal = function () {
//   console.log(arguments);

//   let total = 0;
//   let realArray = Array.prototype.slice.call(arguments);
//   console.log(realArray);

//   realArray.forEach(function (item) {
//     total += item;
//   });
//   return total;
// };

// const result = calculateTotal(1000, 500, 200, 6500, 100);
// console.log(result);

/* -------------------------------------------------------------------------- */
/*                      5. Array.from() (static) : 배열 복사                      */
/* -------------------------------------------------------------------------- */

// let calculateTotal = function () {
//   console.log(arguments);

//   let total = 0;
//   let realArray = Array.from(arguments);
//   console.log(realArray);

//   realArray.forEach(function (item) {
//     total += item;
//   });
//   return total;
// };

// const result = calculateTotal(1000, 500, 200, 6500, 100);
// console.log(result);

/* -------------------------------------------------------------------------- */
/*                              6. Spread Syntax                              */
/* -------------------------------------------------------------------------- */

// let calculateTotal = function () {
//   console.log(arguments);

//   let total = 0;
//   let realArray = [...arguments];
//   console.log(realArray);

//   realArray.forEach(function (item) {
//     total += item;
//   });
//   return total;
// };

// const result = calculateTotal(1000, 500, 200, 6500, 100);
// console.log(result);

/* -------------------------------------------------------------------------- */
/*                               7. Array.reduce                              */
/* -------------------------------------------------------------------------- */

// let calculateTotal = function () {
//   console.log(arguments);

//   let realArray = [...arguments];

//   return realArray.reduce((acc, item) => acc + item, 0);
// };

// const result = calculateTotal(1000, 500, 200, 6500, 100);
// console.log(result);
