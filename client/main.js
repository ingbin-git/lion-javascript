// 모듈 프로그래밍 => js의 어려운 문법은 아님, 단지 방법론

// getNode 가져오기
// {함수 본문}
import { getNode, getNodes, clearContents, insertLast } from './lib/index.js';

// 번들러의 힘
// webpack vite

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const calculator = getNode('.calculator');

/* ---------------------------------- page 1 --------------------------------- */
// 1. input value 값 가져오기
// 2. 두 수의 합 더하기
// 3. 화면 출력하기

function handleInput() {
  let firstValue = +first.value;
  let secondValue = +second.value;
  let total = firstValue + secondValue;

  clearContents(result);

  insertLast(result, total);
}

/* ---------------------------------- page 2 --------------------------------- */
// clear 버튼을 누르면 모든 글자가 초기화될 수 있도록 만들어 주세요.
// 1. clear 버튼을 가져온다.
// 2. clear 버튼에 이벤트 핸들러를 연결한다.
// 3. firstValue 값을 지운다.
// 4. secondValue 값을 지운다.
// 5.result 값을 지운다.
// 6.result에 - 값을 넣는다.

const clear = getNode('#clear');

function handleClear() {
  clearContents(first);
  clearContents(second);
  clearContents(result);

  result.textContent = '-';
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);

/* ---------------------------------- page 3 --------------------------------- */
// 위 내용을 이벤트 위임으로 변경
// .calculator 이벤트 input

function page2() {
  const calculator = getNode('.calculator');
  const clear = getNode('#clear');
  const result = getNode('.result');
  const numberInputs = Array.from(getNodes('input:not(#clear)'));

  console.log(numberInputs);

  function handleInput() {
    const total = numberInputs.reduce(
      (total, input) => total + Number(input.value),
      0
    );

    console.log();

    clearContents(result);
    insertLast(result, total);
  }

  function handleClick() {
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClick);
}
