import { getNode, getStorage, setStorage } from './lib/index.js';

const textField = getNode('#textField');

function handleTextField() {
  const value = this.value;

  setStorage('text', value);
}

function init() {
  getStorage('text').then((res) => {
    textField.value = res;
  });
}
textField.addEventListener('input', handleTextField);
window.addEventListener('DOMContentLoaded', init);

// 클리어 버튼을 눌렀을 때 내용이 비워지는 것
