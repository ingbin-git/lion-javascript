const URL = 'https://jsonplaceholder.typicode.com/users';

// const response = await fetch('https://pokeapi.co/api/v2/pokemon/30');

// if (response.ok) {
//   // JSON.parse 기능
//   // 실제 결과물을 얻기 위한 과정
//   const data = await response.json();

//   console.log(data);
// }

/* --------------------------------- 첫 번째 방법 -------------------------------- */
// const tiger = async (url) => {
//   const response = await fetch(url);
//   let data;

//   if (response.ok) {
//     data = response.json();
//   }

//   return data;
// };

// console.log(await tiger(URL));

/* --------------------------------- 두 번째 방법 -------------------------------- */

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const tiger = async (options) => {
  // const config = cloneDeep(defaultOptions);

  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

const response = await tiger({
  url: URL,
  method: 'POST',
  body: JSON.stringify({ name: 'tiger' }),
});

const userData = response.data;

// console.log(userData);

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

// tiger.get(); // promise object

const user = {
  name: 'tiger',
  age: 33,
};

const res = await tiger.post(URL, user, {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
const data = await res.data
// console.log(data);

// userData.forEach((item) => {
//   console.log(item);
// });
