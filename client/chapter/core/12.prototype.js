/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 자바스크립트 엔진의 모습을 닮았음(찐객체에서의 타고 내려오는 모습) > 객체지향 프로그래밍(프로토타입, 클래스)

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// const animal = {
//   legs: 4,
//   tail: true,
//   stomach: [],
//   //setter
//   set eat(food) {
//     this.stomach.push(food);
//   },
//   //getter
//   get eat() {
//     return this.stomach;
//   },
// };

// const tiger = {
//   pattern: '호랑이무늬',
//   prey: '',
//   hunt(target) {
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`;
//   },
//   // __proto__: animal;
// };

// const fox = {
//   prey: '',
//   // __proto__: animal;
// };

// tiger.__proto__ = animal;
// fox.__proto__ = animal;

/*
// set
animal.eat = '사료';

// get
animal.eat;
*/

// 생성자 함수

// 함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자함수다? 알지?

// function User (name,age,email) {
//   this.name = name;
//   this.age = age;
//   this.email = email
// }

// function button(){

// }


// const a = button()

// const person1 = new User('선범',32,'tiger@naver.com');





function Animal() {
  this.stomach = [];
  this.legs = 4;
  this.tail = true;
  this.eat = function (food) {
    this.stomach.push(food);
  };
  this.printEat = function (food) {
    return this.stomach;
  };
}

const tiger = new Animal();

tiger.pattern = '호랑이 무늬';
tiger.hunt = function (target) {
  this.pery = target;
  console.log(`${target}에게 슬금슬금 접근합니다.`);
};

const cat = new Animal();

cat.say = () => '니야아아아옹';

const fox = new Animal();
const wolf = new Animal();
const dog = new Animal();

// ES6에서 arrow function과 class로 나누어짐
// 생성자만의 기능을 수행하는 것 : class
