/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

// 더 큰 부모를 찾아 이벤트를 걸어버림

/* 클래스를 사용한 위임 ---------------- */
const container = getNode('.container');

function handleDelegation(e) {
  let target = e.target;

  let li = target.closest('li');

  if (!li) return;

  let className = attr(li, 'class');

  // console.log(target.dataset.name);
  // let dataName = target.dataset.name;
  let dataName = attr(li, 'data-name');

  // console.log(className);

  // if (className === 'a') {
  //   console.log('A 버튼 클릭!');
  // }

  // if (className === 'b') {
  //   console.log('B 버튼 클릭!');
  // }

  // if (className === 'c') {
  //   console.log('C 버튼 클릭!');
  // }

  // if (className === 'd') {
  //   console.log('D 버튼 클릭!');
  // }

  // console.log(dataName);

  if (dataName === 'home') {
    console.log('Home 버튼 클릭!');
  }

  if (dataName === 'about') {
    console.log('About 버튼 클릭!');
  }

  if (dataName === 'project') {
    console.log('Project 버튼 클릭!');
  }

  if (dataName === 'contact') {
    console.log('Contact 버튼 클릭!');
  }

  /*
  // console.log(this);
  // console.log(this === e.currentTarget); // true // 단, 일반함수일 때
  // e.currentTarget: 이벤트가 걸린 대상
  console.log(e.currentTarget); // 이벤트가 걸린 대상 // container
  // e.target: 마우스가 제일 처음 만나는 대상
  console.log(e.target); // 아무것도 없는 곳을 클릭했을 때는 container지만 버튼을 누를 때에는 button이 됨
  */
}

// 화살표 함수
// const handleDelegation1 = (e) => {
//   console.log(this);
//   console.log(this === e.currentTarget); // true
//   console.log(e.currentTarget); // container
// };

container.addEventListener('click', handleDelegation);
// container.addEventListener('click', handleDelegation1);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
