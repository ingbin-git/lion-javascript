import { getNode } from '../dom/index.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// 콜백 지옥
delay(() => {
  // console.log(1);
  delay(() => {
    // console.log(2);
    delay(() => {
      // console.log(3);
    });
  });
});

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';

//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(360deg)';

//     delay(() => {
//       first.style.top = '0';
//       second.style.top = '0';
//     });
//   });
// });

// delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다.

// 객체 합성 mixin

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공!',
  errMessage: '알 수 없는 오류가 발생했습니다.',
};

function delayP(options) {
  let config = { ...defaultOptions };
  if (typeof options === 'number') {
    config.timeout = options;
  }

  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options };
  }

  const { shouldReject, data, errMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    // 비동기 통신의 환경을 표현하기 위해 setTimeout을 차용
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({ message: errMessage });
      }
    }, timeout);
  });
}

delayP({ shouldReject: false })
  .then((res) => {
    // console.log(res);
  })
  .catch(({ message }) => {
    alert(message);
  })
  .finally(() => {
    // console.log('어찌되었건 실행합니다.');
  });

// delayP()
//   .then(({ name, age }) => {
//     console.log(name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

