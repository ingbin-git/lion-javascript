/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */
// 안 -> 밖
const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', () => {
  // console.log('%c section', 'color:orange');
});

article.addEventListener('click', (e) => {
  // e.stopPropagation();
  // console.log('%c article', 'color:dodgerblue');
});

p.addEventListener('click', (e) => {
  // e.stopPropagation();
  // console.log('%c p', 'color:hotpink');
});

/* 캡처링 ----------------------------------------------------------------- */
// 거꾸로 올라가는 것이다(밖 -> 안)
section.addEventListener('click', () => {
  console.log('%c section', 'color:orange');
},true);

article.addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('%c article', 'color:dodgerblue');
},true);

p.addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('%c p', 'color:hotpink');
},true);