/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 객체지향 프로그래밍

// Animal => tiger => 호돌이

// 쉼표(,) 찍지 않음
class Animal {
  legs = 4;
  tail = true;
  stomach = [];

  // 필수(객체 생성에 필요한 부분이기 때문)
  // 최초 1회 실행
  constructor(name) {
    this.name = name;
    // console.log('최초 1회 실행합니다.');
  }

  set eat(food) {
    this.stomach.push(food);
  }

  get eat() {
    return this.stomach;
  }
}

// const tiger = new Animal('호돌이');

class Tiger extends Animal {
  // 숨김처리(해당 속성에 접근하지 못하게 하는 것)
  // 안에서는 정의가 가능하지만 밖에서 사용이 불가능하다고 이해하면 됨
  #prey = '';

  constructor(name, pattern) {
    super(name);
    this.pattern = pattern;
  }

  hunt(target) {
    this.#prey = target;
    return `${target}에게 조용히 접근한다`;
  }

  attack() {
    return `강력한 발톱 공격으로 ${this.#prey}가 죽었습니다.`;
  }

  // static method
  // 실제 그 클래스가 가지고 있는 능력이라고 봐야 함
  static sleep() {
    console.log(name + '이/가 잠을 잔다.');
  }
}

const beom = new Tiger('범', '호랑이무늬');
const hoho = new Tiger('호호', '호피무늬');

class Champion {
  q = '';
  w = '';

  d = '';
  f = '';

  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }

  pressD() {
    console.log(this.d + '발동!');
  }
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});



/* ------------------------------- To Do List ------------------------------- */
// class Button {
//   target = null;
//   registerButton = null;
//   list = null;

//   constructor({ input, button, renderPlace }) {
//     this.target = document.querySelector(input);
//     this.registerButton = document.querySelector(button);
//     this.list = document.querySelector(renderPlace);
//     this.todoListArray = [];
//     this.data;

//     this.registerEvent();

//     this.target.addEventListener('input', () => {
//       this.data = this.currentInputTodoData;
//     });
//   }

//   get currentInputTodoData() {
//     return this.target.value;
//   }

//   set currentInputTodoData(value) {
//     this.target.value = value;
//   }

//   get todoList() {
//     return this.todoListArray;
//   }

//   set todoList(value) {
//     this.todoList.push(value);
//   }

//   createList() {
//     let template = `
//       <li>${this.data}</li>
//     `;
//     return template;
//   }

//   render() {
//     this.list.insertAdjacentHTML('beforeend', this.createList());
//     this.target.value = '';
//   }

//   addTodoData() {
//     this.todoList = this.data;
//   }

//   registerEvent() {
//     this.registerButton.addEventListener('click', () => {
//       this.addTodoData();
//       this.render();
//     });
//   }
// }

// const button = new Button({
//   input: '#todo',
//   button: '.register',
//   renderPlace: '.todoList',
// });
