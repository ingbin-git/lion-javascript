/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */

// 객체 안에 메서드는 무조건 consise method
// method 안에 함수는 무조건 arrow function

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
// 객체지향 프로그래밍
const shopOrder = {
  total: 0,
  date: '2023. 7. 11',
  tableIndex: 5,
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
    { name: '곰곰 삼계탕', price: 20000, count: 5 },
    { name: '곰곰 해장국', price: 8000, count: 10 },
  ],

  // forEach / reduce
  totalPrice() {
    // this.menu.forEach((item)=>{
    //   this.total += item.price * item.count;
    // });

    // reduce와 map은 반드시 return이 있어야 한다.
    return this.menu.reduce((acc, item) => acc + item.price * item.count, 0);
    // return this.total;
  },
};

// let total = 0;

// shopOrder.menu.forEach((item) => {
//   total += item.price * item.count;
//   // console.log(item.price);
// });

// console.log(total);

// 함수지향프로그래밍
function totalPrice(...args) {
  // args.reduce
  // return total;
}

const result = shopOrder.totalPrice();
console.log(shopOrder.totalPrice());

// totalPrice(1,2,3,45,6)
// (shopOrder.menu[0].price * shopOrder.menu[0].count) + (shopOrder.menu[1].price * shopOrder.menu[1].count);

// console.log(shopOrder);
// console.log(shopOrder.date);
// console.log(shopOrder.tableIndex);
// console.log(shopOrder.menu);
// console.log(shopOrder.menu[0]);
// console.log(shopOrder.menu[0].name);
// console.log(shopOrder.menu[0].price);
// console.log(shopOrder.menu[1]);

// 메서드와 this
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만,
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.

// 메서드 단축 구문

// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    return this.items[index];
  },
  addItem(newItem) {
    this.items.push(newItem);
    // console.log(this);
  },
};

// navigationMenu.getItem()
// console.log(navigationMenu.getItem());
navigationMenu.addItem()


navigationMenu.addItem({
  id: 'link-1',
  text: 'Lycos',
  link: 'https://lycos.co.kr',
});
