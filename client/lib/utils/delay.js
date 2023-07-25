function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

console.log(1);

delay(() => {
  console.log(2);
});

delay(() => {
  console.log(3);
},2000);



