/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');
console.log(first.className); // getter
// console.log((first.className = 'box')); // setter
// console.log((first.className = 'box second')); // setter

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add
// remove
// toggle: 예) is-active
// contains: 포함 여부

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active'); // Boolean 값을 반환
console.log(first.classList.contains('is-active'));

// first.className = '';

// attr(first, 'class', ' ');

addClass('.first', 'hello');

/* 스타일 변경 방법 --------------------------------------------------------- */
// setter의 역할은 가능하나 getter의 역할을 수행하기 어려움

first.style.backgroundColor = 'orange'; // setter
first.style.backgroundColor; // getter // 자바스크립트로 설정하였기에 콘솔창에서 확인 가능
console.log(first.style.fontSize); // 자바스크립트로 설정하지 않은 값은 콘솔창에 빈 상태로 보임

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
// 이미 계산이 완료된 객체
// getter의 역할 수행 가능
console.log(getComputedStyle(first).fontSize);
console.log(getComputedStyle(first).getPropertyValue('font-size')); // 좀더 명시적

setCss('.first', 'color', '#fff');

console.log(css('.first','background-color', 'red'))