/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
const empty = null;
console.log(empty);
console.log(typeof empty); //object
Object.prototype.toString.call(null); //null

// 2. 값이 할당되지 않은 상태
// 애초에 할당되지 않았기 때문에 const는 적절하지 않음
let unknown;
console.log(unknown);
console.log(typeof unknown); //undefined

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
// constructor(생성자) => new 키워드로 만들어낼 수 있음
const hi = new String('hello'); // 문자 생성자(객체의 능력 중에 string 메서드를 사용함) ** 객체 안에 있는 함수는 메서드라 부른다

const double = "hello"; // 문자 리터럴
const single = 'hello';
const backtick = `hello ${1+3}`;

console.log(hi);
console.log(typeof double); // string
console.log(typeof hi); // object

// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(123123);
const integer = 123;
const floatingPointNumber = 10.45;

console.log(number);


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// 빅인트와 심볼은 new 키워드를 붙이지 않아도 생성 가능
const big = BigInt(123);
const bigInteger = 123n;

// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;
console.log(typeof (bool));
console.log(typeof bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const Obj = new Object({});
const obj = {};

console.log(obj);

// 8. 고유한 식별자(unique identifier)
// 빅인트와 심볼은 new 키워드를 붙이지 않아도 생성 가능
const unique = Symbol('uid');

console.log(typeof unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()
console.log(typeof (1+2));

// 언어 상, 오류
null

// Object
const user = {
  // Property
  name: 'tiger',
  age: 28,
  // Method
  sayHi: function() {
    console.log('hello~');
  }
}

console.log(user.name);
console.log(user.sayHi());

// Array
const newArray = new Array();

const arr = [10, 100, 1000, 1, 2, 3];

console.log(arr);
console.log(arr[3]);

// function
// 다른 유형과 다르게 new를 붙이면 완전 다른 함수가 됨
// class
const f = new fishBreadFrame();

function fishBreadFrame(재료) {
  return 재료 + ' 맛 붕어빵';
}

// 일반
const 팥붕어빵 = fishBreadFrame('팥');
const 슈크림붕어빵 = fishBreadFrame('슈크림');
const 와사비붕어빵 = fishBreadFrame('와사비');

console.log(팥붕어빵);
console.log(와사비붕어빵);

// this


/* -------------------------------------------------------------------------- */
// [원리]
// 진짜 객체 > f() > new String() > 객체 > 진짜 객체

/* ------------------- Template literals(Template strings) ------------------ */
// [예시]
// let name = 'tiger';
// let age = 30;
// console.log(`안녕, 내 이름은 ${name}이야. 내 나이는 ${age}이야.`)