/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let htmlCode = /* html */ `
<ul>
  <li class="box"></li>
  <li></li>
  <li></li>
</ul>
`;
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authorization: 권한
// authentication: 인증
let authUser = null;

authUser = {
  uid: 'user-is-ajtwoddl%123',
  name: 'beom',
  email: 'abcd@gmail.com',
  isSignIn: true,
  permission: 'paid', // free | paid
};

// console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.permission);
// console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['uid']);
// console.log(authUser['email']);
// console.log(authUser['name']);

// 계산된 프로퍼티 (computed property)

let calculateProperty = 'phone'; // phone | tel

// 1. 함수로 객체 만들기
// function createUser(
//   name,
//   email,
//   computedProp = 'phone',
//   number = '010-0000-0000'
// ) {
//   return {
//     name: name,
//     email: email,
//     [computedProp]: number,
//   };
// }

/* shorthand property(단축 프로퍼티) */

function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
) {
  return {
    name,
    email,
    [computedProp]: number,
  };
}

const user1 = createUser('진승', 'victory@naver.com', 'tel', '010-1234-5678');
// const user2 = createUser('희소', 'happyCow@naver.com');
console.log(user1);
// console.log(user2);

// 2. class로 객체
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user3 = new User('동혁', 'abc@naver.com');
// console.log(user3);

// 프로퍼티 포함 여부 확인

// key in user1
Object.prototype.SIGN = true;

// 자신(own)의 속성(property)을 가지고(has) 잇는지
//

for (let key in user1) {
  if (Object.prototype.hasOwnProperty.call(user1, key)) {
    console.log(key);
  }
}

// 프로퍼티 나열

// key만 모아놓은 배열 만들어 주세요. Object.keys()
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);
// console.log(keyArray);
// console.log(valueArray);

// getProp(object)
function getProp(object) {
  if (typeof object !== 'object') {
    throw new Error('getProp 함수의 매개변수는 객체 타입이어야 합니다.');
  }
  return Object.keys(object);
}

// console.log(getProp(authUser));

function getP(object) {
  let result = [];

  for (let key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

// console.log(getP(authUser));

// 프로퍼티 제거(remove) or 삭제(delete)
//            null            없앰

authUser.name = null; // name: null => 제거

delete authUser.uid; // uid가 아예 없어짐(삭제)

console.log(authUser);

function removeProperty(object, key) {
  if (typeof object !== 'object') {
    throw new Error('....');
  }

  if (typeof key !== 'string') {
    throw new Error('....');
  }

  if (key === 'all') {
    for (let key of getProp(object)) {
      object[key] = null;
    }

    return object;
  }

  object[key] = null;

  return object;
}

removeProperty(authUser, 'name');
removeProperty(authUser, 'all');

function deleteProperty(object, key) {
  delete object[key];

  return object;
}

deleteProperty(authUser, 'name');

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = { name, email, authorization, isLogin };

console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  return getProp(object).length === 0 ? true : false;

  // return !(Object.keys(object).length);

  // if(Object.keys(object).length === 0) {
  // return true;
  // }

  // return false;
}

isEmptyObject(authUser); // false
console.log(isEmptyObject(authUser));

// 배열의 구조 분해 할당: 순서가 정해져 있다. 변수 이름을 바꿀 수 있다.
// 객체의 구조 분해 할당: 순서가 정해져 있지 않다. 변수의 이름을 바꿀 수 있을까? Yes (:(원하는 값)으로 사용 가능)

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
// 배열 구조 분해 할당은 순서가 상관 있음

let color = ['#ff0000', '#2600ff', '#00ff2f'];

// let [red, blue, green] = color;

let [, , green] = color;

Object.entries(authUser);

for (let [key, value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let value = keyValue[1];

  console.log(key);
}

console.log(Object.entries(authUser));

// let red = color[0];
// let blue = color[1];
// let green = color[2];

console.log(green);

// const [a,b,c,d] = document.querySelectorAll('nav li button');

// a.addEventListener('click',()=>{})
// b.addEventListener('click',()=>{})
// c.addEventListener('click',()=>{})
// d.addEventListener('click',()=>{})


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
// 객체 구조 분해 할당은 순서가 상관 없음

const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
};

// const 권혜미 = salaries.권혜미;
const { 권혜미, 이수연, 강예나, 김태일 } = salaries;

console.log(권혜미);

function setElementCss(options) {
  // 함수 안의 객체일 때 구조 분해 할당을 많이 사용함
  const {
    width: w,
    height: h = 10,
    overflow = '',
    color: c = '#fff',
  } = options;

  console.log(w, c, h);
  console.log(options.width);
}

const defaults = {
  width: 100,
  overflow: false,
  height: 200,
  color: 'orange',
};

// setElementCss(defaults);
setElementCss({
  width: 50,
  overflow: true,
  color: 'red',
});
