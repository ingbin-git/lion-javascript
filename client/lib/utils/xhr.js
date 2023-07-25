/* ------------------------------ [readystate] ------------------------------ */
// 현재 상태를 알려주는 것

// 0: uninitialized
// 1: loading

// 2, 3, 4는 이벤트 영역(on) 안에서 확인 가능
// 2: loaded
// 3: interacive
// 4: complete

// jQuery: 비동기 통신이 쉬움

/* -------------------------------- callback -------------------------------- */
function xhr(method, url, onSuccess, onFail) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.addEventListener('readystatechange', () => {
    // response는 readystatechange 이후에 진행됨. 따라서 밖으로 뺄 수 없음
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        onSuccess(JSON.parse(response));
      }
    } else {
      onFail('실패');
    }

    // console.log(xhr.status)
    // console.log(xhr.readyState);
  });

  xhr.send();
}

xhr(
  'GET',
  'https://jsonplaceholder.typicode.com/users',
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);
