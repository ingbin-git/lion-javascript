/* ------------------------------ 1. getNode 함수 ----------------------------- */
function getNode(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인수는 문자 타입이어야 합니다.');
  }
  return document.querySelector(node);
}

getNode('.first');

/* ----------------------------- 2. getNodes 함수 ----------------------------- */
function getNodes(node) {
  if (node !== 'string') {
    throw new Error('getNodes 함수의 인수는 문자 타입이어야 합니다.');
  }
  return document.querySelectorAll(node);
}

getNodes('.first');

/* ------------------------------ 3. getAttr 함수 ----------------------------- */
function getAttr(node, prop) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof prop !== 'string') {
    throw new Error('getAttr 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  }
  return node.getAttribute(prop);
}

getAttr(node, prop);

/* ------------------------------ 4. setAttr 함수 ----------------------------- */
function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof prop !== 'string') {
    throw new Error('getAttr 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  }

  if (!node[prop] && prop !== 'title') {
    node.datasetp[prop] = value;
  }

  node.getAttribute(prop, value);
}

getAttr(node, prop);

/* ------------------------------- 5. attr 함수 ------------------------------- */
function attr(node, prop, value) {
  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

/* ---------------------------- 6. insertLast 함수 ---------------------------- */
function insertLast(node, text) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (node.nodeType !== ELEMENT_NODE) {
    throw new Error(
      'insertLast 함수의 첫 번째 인수는 ELEMENT_NODE여야 합니다.'
    );
  }

  node.insertAdjacentHTML('beforeend', text);
}

insertLast(node, text);

/* ----------------------------- 7. addClass 함수 ----------------------------- */
function addClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof className !== 'string') {
    throw new Error('addClass 함수의 두 번째 인수는 문자 타입이어야 한다.');
  }

  node.classList.add(className);
}

addClass(node, className);

/* ---------------------------- 8. removeClass 함수 --------------------------- */
function removeClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!className) {
    node.className = '';
    return;
  }

  if (typeof className !== 'string') {
    throw new Error('removeClass 함수의 두 번째 인수는 문자 타입이어야 한다.');
  }

  node.classList.remove(className);
}

removeClass(node, className);

/* ---------------------------- 9. toggleClass 함수 --------------------------- */
function toggleClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof className !== 'string') {
    throw new Error('removeClass 함수의 두 번째 인수는 문자 타입이어야 한다.');
  }

  return node.classList.toggle(className);
}

toggleClass(node, className);

/* ------------------------------ 10. setCss 함수 ----------------------------- */
function setCss(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.'
    );
  }

  if (!value) {
    throw new Error('setCss 함수의 세 번째 인수는 필수값입니다.');
  }
  node.style[prop] = value;
}

setCss(node, prop, value);

/* ------------------------------ 11. getCss 함수 ----------------------------- */
function getCss(node, prop) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  // 객체 안에 키 값이 있는지 확인하는 방법
  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.'
    );
  }

  return getComputedStyle(node).getPropertyValue(prop);
}

getCss(node, prop);

/* ------------------------------- 12. css 함수 ------------------------------- */
function css() {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
}

css(node, prop, value);
