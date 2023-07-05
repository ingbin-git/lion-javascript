/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(String(YEAR)); // 명시적 형 변환
console.log(typeof String(YEAR));
console.log(YEAR+''); // 암시적 형 변환
console.log(typeof(YEAR+''));

// undefined, null
let days = null;
console.log(String(null));
console.log(null+'');

let undef = undefined;
console.log(String(undefined));
console.log(undefined+'');

// boolean
let isClicked = true;
console.log(String(isClicked));
console.log(isClicked+'');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let bankbook = null;
console.log(Number(bankbook));


// boolean
let cutie = true;
console.log(Number(cutie));

// string
let num = '250';
console.log(num);
console.log(typeof(num));
console.log(Number(num));
console.log(+num); // 암시적 형 변환(범쌤 픽)
console.log(num * 1); // 암시적 형 변환
console.log(num / 1); // 암시적 형 변환

// numeric string
let width = '105.3px';
console.log(width);
console.log(Number(width));

// 문자+숫자 조합
// parseInt, parseFloat: 문자는 절삭시키고 숫자만 추출
// 주의) 숫자+문자+숫자인 경우 parseInt, parseFloat는 문자 앞까지만 읽음
let w = window.parseFloat(width, 10);
let w1 = parseFloat(width, 10);
let w2 = parseInt(width, 10);
console.log(w);
console.log(w2);

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));

console.log('암시적 형 변환(!): ' + !false); // true
console.log('암시적 형 변환(!!): ' + !!false); // false