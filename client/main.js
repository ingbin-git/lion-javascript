/* global gsap */
import {
  attr,
  tiger,
  delayP,
  insertLast,
  changeColor,
  getNode as $,
  renderSpinner,
  clearContents,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

// [1단계]
// 1. tiger 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 렌더링
//    - html template를 만든다.
//    - 유저 data 넘겨주기
//    - insertLast 사용하기
// 4. 함수 분리하기

// [2단계]
// 1. 에러가 발생했을 때 empty svg를 생성하고 렌더링 해주세요.
// 2. 함수 분리

// [3단계]
// 버튼을 클릭했을 때 해당 article의 id 값을 가져옴
// - 이벤트 위임
// - button 선택하기 -> 클릭한 대상의 가장 가까운 method
// - attr(), dataset

// [4단계]
// json-server 구성
// data 설계
// get, delete 통신 localhost
// delete => 리랜더링(clear,render)

const URL = 'https://jsonplaceholder.typicode.com/users';
const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);
  try {
    await delayP();

    // 돔 자체에서 사라지지 않고 그냥 투명도만 조절해서 안보이게 하는 것
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    // 돔 자체에서 지워짐
    // $('.loadingSpinner').remove();

    const response = await tiger.get('http://localhost:3000/users');
    const userData = response.data; // 두번째 await을 하지 않기 위해 tiger에서 json을 해준거군

    userData.forEach((item) => renderUserCard(userCardInner, item));

    changeColor('.user-card');

    // gsap.to: 나는 gsap에게 애니메이션을 걸거야
    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      // stagger: 순차적으로 작동되는
      stagger: 0.2,
    });
  } catch (err) {
    renderEmptyCard(userCardInner);
    // location.href='404.html';
  }
}

renderUserList(); // re-rendering을 위해 함수로 분리한 것 // 리로드, 리랜더링

function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if (!article || !button) return;

  // const index = article.dataset.index;
  const id = attr(article, 'data-index').slice(5);

  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    // 콘텐츠 항목 전체 지우기
    clearContents(userCardInner);

    // 다시 로드
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDelete);

// 스키마: 데이터 설계
