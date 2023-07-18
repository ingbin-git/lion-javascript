/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */

/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)

/* 특정 위치에 삽입 --------------------------------------------------------- */

// - *** elementNode.insertAdjacentHTML(어디에?,값)
// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

// 동적 랜더링을 위해 사용
const body = document.body;
const h1 = getNode('h1');

const template = /* html*/ `<div class="box">${10 + 30}</div>`;

// body.insertAdjacentHTML('beforeend', '<div class="box">상자</div>');
h1.insertAdjacentHTML('beforebegin', template);

const data = ['빨래하기', '게임하기', '유튜브 보기', '산책하기'];

// 1. 태그를 생성하기
// 2. 태그 안에 아이템값 넣기
// 3. 생성된 태그를 내보내기(배열)
// 4. 내보낸 배열을 순환하기
// 5. 반복문 안에서 랜더링하기
// 6. 랜더링

// forEach => 반환 x
// reduce => 아무거나

// filter => 배열을 반환
// map => 배열을 반환

// for

const todo = getNode('.todo');

const todoList = data.map((item) => {
  return `<li>${item}</li>`;
});


/* ------------------------------ 1. forEach 활용 ----------------------------- */
// 리액트에서는 해당 단계를 알아서 해주므로 생략이 가능

todoList.forEach((item) => {
  // todo.insertAdjacentHTML('beforeend', item);
  insertLast(todo, item);
});

/* ------------------------------- 2. for문 활용 ------------------------------- */

// for (let i = 0; i < todoList.length; i++) {
//   todo.insertAdjacentHTML('beforeend', todoList[i]);
// }

// document.body.insertAdjacentHTML('beforeend', todoList);

/* --------------------------------- 리액트 부분 --------------------------------- */

/* function render(){
  return(   
    <ul>
      {
       data.map(item => `<li>${item}</li>`)
      }
    </ul>
  )}
 */

// ElementNode.insertAdjacentHTML('beforebegin', 'text');
// ElementNode.insertAdjacentHTML('afterbegin', 'text');
// ElementNode.insertAdjacentHTML('beforeend', 'text');
// ElementNode.insertAdjacentHTML('afterend', 'text');

insertLast('.todo', '<li>문자</li>');
