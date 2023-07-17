/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

// Document Object Model

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// 성능 측면에서는 querySelector보다 getElementById가 더 낫지만 이는 미미하며, 최근에는 getElementById보다 querySelector을 사용하는 추세
// - getElementById
const message = document.getElementById('message');
// console.log(message);

// - getElementsByTagName
// - getElementsByClassName

// - querySelector
// - querySelectorAll
const first = document.querySelector('.first');
const [firstSpan, secondSpan] = document.querySelectorAll('span');
// console.log(first);
// console.log(firstSpan);
// console.log(secondSpan);

// - closest
// 가장 인접한 부모 요소를 찾아감
first.closest('h1');
// console.log(first.closest('h1')); // 이벤트 위임

/* 문서 대상 확인 */
// - matches
first.matches('.first');
// console.log(first.matches('.first'));
// console.log(first.matches('.second'));

// - contains
// 선택자의 자식들 중 해당 element가 있어?
first.contains(secondSpan);
// console.log(first.contains(secondSpan));
// !==
// 클래스를 포함하고 있어?
// node.classList.contains()

// el, els
getNode('.first');

const firstNode = getNode('.first');
console.log(firstNode);

const span = getNodes('span');
console.log(span);
