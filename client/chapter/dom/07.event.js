/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */
// 3번이 가장 베스트
// - onclick은 웬만하면 지양할 것

// 1. HTML 속성 : onclick="handler()"
// - 가독성, 유지보수 측면에서 좋지 않음
// - 여러 개의 이벤트를 넣을 수 없음

// 2. DOM 프로퍼티 : element.onclick = handler
// - 여러 개의 이벤트를 넣을 수 없음

// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */
// 이벤트 함수는 성능의 부하를 줄 수 있음(특히 반복문 안에서 쓰면 더욱 그러함)

// - addEventListener
// - removeEventListener

// function init() {}
// window.addEventListener('DOMContentLoaded', init);

window.addEventListener('DOMContentLoaded', () => {
  const first = document.querySelector('.first');
  // console.log(first);
});

// const first = getNode('.first');

function handler() {
  // console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}

// first.onclick = handler;

// function handleClick() {
//   console.log('이벤트 메서드를 호출합니다.');
// }

// click, mousemove, mouseover, mouseout, mousedown, mouseup
// first.addEventListener('click', handleClick);
// first.addEventListener('click', handler);

// const remove = bindEvent('.first', 'click', handleClick);

// 3초 후 이벤트 제거
// setTimeout(() => {
//   // first.removeEventListener('click', handleClick);
//   remove();
// }, 3000);

// bindEvent('.first', 'aaa', handler); // Error

/* -------------------------- 이벤트 객체(Event Object) -------------------------- */

// 이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듦
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달함

// e, event, ent, evt
// function handleClick(e) {
//   // console.log(this);
//   // offsetX: 클릭에 관한 X축 값을 알려줌
//   // offsetY: 클릭에 관한 Y축 값을 알려줌
//   console.log(e.offsetX, e.offsetY);
//   // console.log(this === e.target);
// }

// first.addEventListener('click', handleClick);

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClick(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px, ${
    y - ball.offsetHeight / 2
  }px)`;
}

ground.addEventListener('click', handleClick);

// throttle, debounce: 성능 부하 측면에서 무리가 덜함
// throttle: 특정 시간마다 실행될 수 있도록 한 것
// debounce: 사용자가 멈추는 순간 한 번 실행하는 것

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

ground.addEventListener(
  'mousemove',
  debounce((e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `;

    insertLast(ground, template);
  })
);
