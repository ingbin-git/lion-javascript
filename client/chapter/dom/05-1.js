const data = ['빨래하기', '게임하기', '유튜브 보기', '산책하기'];

const todo = getNode('.todo');

const todoList = data.map((item) => {
  return `<li>${item}</li>`;
});

todoList.forEach((item) => {
  insertLast(todo, item);
});
