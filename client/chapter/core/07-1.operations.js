/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

const a= '10';
const b= '30';

// 단항 연산자
let unary = +a;
console.log(unary);

// 이항 연산자
let binary = a + b;
console.log(binary);

// 삼항 연산자식
let ternary= a === 10 ? true : false;
console.log(ternary);

let ternary1= Math.random() > 0.5 ? 'big' : 'small';
console.log(ternary1);

/*
1항 a === 10
2항 true
3항 false
*/

// 산술 연산자: 덧셈
let addition = 1+2;

// 산술 연산자: 뺄셈
let subtraction=10-2;

// 산술 연산자: 곱셈
let multiplication=30*2;

// 산술 연산자: 나눗셈
let division=14/2;

// 산술 연산자: 나머지
// 홀수 짝수 분류할 때 많이 씀
let remainder=10%3;
console.log(remainder);

// 산술 연산자: 거듭 제곱
let power=2**53-1;
let power1=Math.pow(2, 53)-1;
console.log(power);
console.log(power1);

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];
console.log(onlyWorkDefaultValues);

let firstArray=[1,2,3];
let secondArray=[4,5,6];
const newArray=firstArray.concat(secondArray);
console.log(newArray);

// spread syntax(배열, 객체 / 진짜 많이 쓰임!! / 리액트에서는 필수라고 할 수 있음)
console.log([...firstArray, ...secondArray]);

/*
function sum(a,b,c ...children) {
  children;
}

sum(1,2,3,4,5,6,7,8);
*/

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --
let counter = 0;
counter++ // 0
++counter // 1
counter // 1




// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count1 = 10;
let total1 = (count1 % 4) * (count1 /= 2) + count1 ** 3; // ?
/*
count % 4 = 2;
count /= 2 = 5;
count ** 3 = 125
=> 2*5+125=135
*/
console.log(total1);


let count = 10;
let total = count % 4;
count = count / 2;
let pow = count ** 3;
total = total * count + pow;

console.log(total);