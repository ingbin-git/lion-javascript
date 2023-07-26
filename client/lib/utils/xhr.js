import { refError } from '../error/refError.js';

/* ------------------------------ [readystate] ------------------------------ */
// 현재 상태를 알려주는 것

// 0: uninitialized
// 1: loading

// 2, 3, 4는 이벤트 영역(on) 안에서 확인 가능
// 2: loaded
// 3: interacive
// 4: complete

// jQuery: 비동기 통신이 쉬움(ajax)

/* ------------------------------- 1. callback ------------------------------ */
// 객체 구조 분해 할당

export function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    // response는 readystatechange 이후에 진행됨. 따라서 밖으로 뺄 수 없음
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }

    // console.log(xhr.status)
    // console.log(xhr.readyState);
  });

  xhr.send(JSON.stringify(body));
}

/*
xhr({
  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess(result) {
    console.log(result);
  },
  // onSuccess: () => {},
  onFail(err) {
    console.log(err);
  },
  // onFail: () => {},
  body: { name: 'tiger', age: 32 },
});
*/

// 1. 자바스크립트의 함수는 객체다.
// 2. 사용자(협업개발자) 입장: 쉽게 쓰자
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어 버리자!!

//jsDoc
/**
 *
 * @param {string} url 서버와 통실할 주소
 * @param {function} onSuccess 서버와 통신 성공 시 실행될 콜백 함수
 * @param {function} onFail 서버와 통신 실패 시 실행될 콜팩 함수
 * @return setver data
 */
xhr.get = (url, onSuccess, onFail) => {
  // xhr 전달 해주자!
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  // xhr 전달 해주자!
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

xhr.get(
  'https://jsonplaceholder.typicode.com/users',
  (result) => {
    // console.log(result);
  },
  (err) => {
    // console.log(err);
  }
);

// function get(url, onSuccess, onFail) {
//   xhr({ url, onSuccess, onFail });
// }

// get();

xhr.post(
  'https://jsonplaceholder.typicode.com/users',
  { name: 'tiger' },
  (result) => {
    // console.log(result);
  },
  (err) => {
    // console.log(err);
  }
);

/* ----------------------------- 2. promise API ----------------------------- */

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {
  // mixin
  // const config = { ...defaultOptions, ...options };

  // {}을 넣지 않으면 원형이 회손되므로 꼭! {}을 넣어주어야 함
  const { method, url, body, errorMessage, headers } = Object.assign( {}, defaultOptions, options );

  if (!url) refError('서버와 통신할 url은 필수값입니다.');

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

xhrPromise.get = (url) => {
  return xhrPromise({ url });
};

xhrPromise.post = (url, body) => {
  xhrPromise({
    url,
    body,
    method: 'POST',
  });
};

xhrPromise.delete = (url) => {
  xhrPromise({
    url,
    method: 'DELETE',
  });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT',
  });
};
