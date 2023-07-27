import { typeError } from '../error/typeError.js';
import { isString } from './typeOf.js';

const { localStorage: storage } = globalThis;

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve();
      storage.setItem(key, JSON.stringify(value));
    } else {
      reject({
        message: 'setStorage 함수의 첫 번째 인수는 문자 타입이어야 합니다.',
      });
    }
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({
        message: 'getStorage 함수의 첫 번째 인수는 문자 타입이어야 합니다.',
      });
    }
  });
}

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}

// setStorage('name', { name: 'tiger' });
// getStorage('name');
// console.log(getStorage('name'));
// storage.setItem('nickname', 'tigerSsam');
// storage.setItem('name', JSON.stringify({ name: 'tiger' }));
