// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
/* -------------------------------------------------------------------------- */
/*                              (배열)   1. forEach 활용                               */
/* -------------------------------------------------------------------------- */

// const shopOrder = {
//   total: 0,
//   date: '2023. 7. 11',
//   tableIndex: 5,
//   menu: [
//     { name: '통 새우 돈까스', price: 13000, count: 2 },
//     { name: '치즈 돈까스', price: 10000, count: 1 },
//     { name: '곰곰 삼계탕', price: 20000, count: 5 },
//     { name: '곰곰 해장국', price: 8000, count: 10 },
//   ],

//   totalPrice() {
//     this.menu.forEach((item)=>{
//       this.total += item.price * item.count;
//     });
//     return this.total;
//   },
// };

// console.log(shopOrder.totalPrice());

/* -------------------------------------------------------------------------- */
/*                            (배열)   2. reduce 활용                                */
/* -------------------------------------------------------------------------- */

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

  totalPrice() {
    return this.menu.reduce((acc, item) => acc + item.price * item.count, 0);
  },
};

console.log(shopOrder.totalPrice());
