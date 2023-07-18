/* ------------------------------ getAttr 유틸함수 ------------------------------ */

function getAttr(node, prop) {
  // 1. 넘어온 대상이 문자인지를 체크
  // 2. 체크 후 element node로 변경해 주어야 함

  // validation
  if (typeof node === 'string') {
    node = getNode(node);
  }
  return node.getAttribute(prop);
}

/* ------------------------------ setAttr 유틸함수 ------------------------------ */

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!(typeof prop === 'string')) {
    throw new TypeError(
      'setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }

  // 빈문자의 경우 형 변환 과정에서 true로 인식되어 data-title로 반환됨
  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);

  // return 'success'; // 성공 여부를 확인하고 싶으면 넣어도 됨(필수값은 아님)
}

// 작은 함수를 만들고 보다 큰 함수로 넘어가는 것

/* -------------------------------- attr 유틸함수 ------------------------------- */

const arrowAttr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);

function attr(node, prop, value) {
  if (!value) {
    return getAttr(node, prop); // getter
  } else {
    setAttr(node, prop, value); //setter
  }
}

// IIFE
// 캡슐화
// 푸쉬 확인하기
// const attr (function())
