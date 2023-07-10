/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
//                     rest parameter(args, rest, children)
let calcAllMoney = (a, b, ...args) => {
  console.log(args);

  // let total = 0;
  // args.forEach((item) => {
  //   total += item;
  // });

  // 일반 함수
  // return args.reduce(function (acc, item) {
  //   return acc + item;
  // }, 0);

  // 화살표 함수
  return args.reduce((acc, item) => acc + item, 0);

  // return total;
};

const result = calcAllMoney(1000, 500, 200, 2000);
// console.log(result);

// function Button() {
// }

// 대문자로 쓴 것은 생성의 의미를 내포
const Button = () => {};

// 함수의 기능만 수행할 수 있도록 나온 것이 화살표 함수!
const a = Button();
// const b = new Button(); // constructor // 객체로 생성됨(일반 함수일 때 해당)
console.log(a);
// console.log(b);

// 화살표 함수와 this
// 함수 선언문: 함수, 생성자 역할 // this는 나를 호출한 대상
function namalFunction() {
  console.log(this);
}

window.namalFunction();

// 함수 표현식: 함수, 생성자 역할 // this는 나를 호출한 대상
const expressFunction = function () {
  console.log(this);
};

window.expressFunction();

// 화살표 함수식(함수 표현식의 일종): 함수로서의 역할만 수행 // this를 바인딩하지 않음(내 부모꺼)
const arrowFunction = () => {
  console.log(this);
};

arrowFunction(); // 부모의 것을 가져옴(이때 부모가 window여서 window꺼를 가져옴)

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
