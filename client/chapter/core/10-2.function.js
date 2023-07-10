/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // console.log(arguments);

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 이것은? arguments

  // arguments 객체를 사용해서 함수의 매개변수 없이 아이템의 총합을 구해보자!

  let total = 0;

  // 1. for문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // 2. for .. of문
  // for(let key of arguments) {
  // total += key;
  // }

  // arguments.forEach(item => {
  // console.log(item);
  // })

  // 3. forEach 빌려쓰기
  // Array.prototype.forEach.call(arguments, function(){
  //   console.log(item);
  // })

  // 4. slice를 빌려써서 배열로 만들기(instance) : 배열 복사

  // let realArray = Array.prototype.slice.call(arguments);
  // console.log(realArray);

  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // 5. Array.from() (static) : 배열 복사
  // let realArray = Array.from(arguments);
  // console.log(realArray);
  // realArray.forEach(function (item) {
  //   total += item;
  // });

  let arr = [10, 50, 100];

  // 6. Spread Syntax
  // let realArray = [...arguments, ...arr];
  let realArray = [...arguments];

  // console.log(realArray);

  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // 7. Array.reduce
  // 누적값(acc), 순회를 도는 아이템(item), 최초값(initValue(여기서는 0))
  // reduce는 값이 나와야 함(return을 해야 함)

  // total = realArray.reduce((acc,item)=> acc + item, 0);
  return realArray.reduce((acc, item) => {
    return acc + item;
  }, 0);

  // return total;
};

const result = calculateTotal(1000, 500, 200, 6500, 100);

// console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// console.dir(anonymousFunctionExpression);

// anonymousFunctionExpression.isActive = true;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

namedFunctionExpression();

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (isActive, callback) {
  // const callback = function () {console.log('콜백 함수 실행!');

  if (isActive) {
    callback();
  }
};

callbackFunctionExpression(true, function () {
  console.log('콜백 함수 실행!');
});

let callbackFunctionExpression1 = function (isActive, success, fail) {
  // const callback = function(){ console.log('콜백 함수 실행!');

  if (isActive) {
    // success();
    return;
  }

  // fail();
};

callbackFunctionExpression1(
  true,
  function () {
    console.log('성공!!');
  },
  function () {
    console.log('실패!');
  }
);

// https://www.naver.com
const movePage = function (url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    success(url);
  } else {
    fail();
  }
};

movePage(
  'www.naver.com',
  function (url) {
    // console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');

    setTimeout(() => {
      window.location.href = url;
    }, 3000);
  },
  function () {
    // console.log('올바르지 않은 주소입니다.');
    // ????
  }
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// 은닉화 incapsulation (캡슐화)

// 클로저 Closure
// import { css as c } from 'css.js';
// c();

const MASTER = (function (g) {
  console.log(g);

  var x = 10;
  let uid = 'AJTTK783!@';

  return {
    getKey() {
      return uid;
    },
    setKey(value) {
      return (uid = value);
    },
  };
})(window);

// console.log(x);
console.log(MASTER.setKey('새로운 비밀번호!'));

// 변수의 보호
// function init() {
// var x = 10;

// }
// init();
