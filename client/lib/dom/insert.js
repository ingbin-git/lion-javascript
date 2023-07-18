/* ---------------------------- insertBefore 유틸함수 --------------------------- */

function insertBefore(node, text) {
  if (typeof node === 'string') node = getNode(node);

  if (node.nodeType !== document.ELEMENT_NODE) {
    throw new ReferenceError(
      'insertBefore 함수의 첫 번째 인수는 ELEMENT NODE여야 합니다.'
    );
  }
  node.insertAdjacentHTML('beforebegin', text);
}

/* ---------------------------- insertFirst 유틸함수 ---------------------------- */

function insertFirst(node, text) {
  if (typeof node === 'string') node = getNode(node);

  if (node.nodeType !== document.ELEMENT_NODE) {
    throw new ReferenceError(
      'insertFirst 함수의 첫 번째 인수는 ELEMENT NODE여야 합니다.'
    );
  }
  node.insertAdjacentHTML('afterbegin', text);
}

/* ----------------------------- insertLast 유틸함수 ---------------------------- */

function insertLast(node, text) {
  if (typeof node === 'string') node = getNode(node);

  if (node.nodeType !== document.ELEMENT_NODE) {
    throw new ReferenceError(
      'insertLast 함수의 첫 번째 인수는 ELEMENT NODE여야 합니다.'
    );
  }
  node.insertAdjacentHTML('beforeend', text);
}

/* ---------------------------- insertAfter 유틸함수 ---------------------------- */

function insertAfter(node, text) {
  if (typeof node === 'string') node = getNode(node);

  if (node.nodeType !== document.ELEMENT_NODE) {
    throw new ReferenceError(
      'insertAfter 함수의 첫 번째 인수는 ELEMENT NODE여야 합니다.'
    );
  }
  node.insertAdjacentHTML('afterend', text);
}

// function insert(node, text, position = 'beforeend') {}

// TDD

// beforebegin => insertBefore
// afterbegin  => insertFirst
// beforeend   => insertLast
// afterend    => insertAfter
