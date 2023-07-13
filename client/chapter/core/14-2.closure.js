function earth() {
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };
  let gravity = 10;

  return function (value) {
    gravity = value;
    console.log(gravity, water);
  };
  // return tiger
}

const ufo = earth();

ufo(5);

// 버튼을 누르면 배경색 변경
const button = document.querySelector('button');

// let isClicked = true; // 전역 오염 ...

function handleClick() {
  let isClicked = true;

  return () => {
    if (isClicked) {
      document.body.style.backgroundColor = 'orange';
    } else {
      document.body.style.backgroundColor = 'transparent';
    }

    isClicked = !isClicked;
  };
}

button.addEventListener('click', handleClick());

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(overValue) {
    value = overValue;
  }

  return [read, write];
}

// setClick()
// const [click,setClick] = useState(true);
