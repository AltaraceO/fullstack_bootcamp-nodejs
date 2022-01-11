const add = (x, y, func) => {
  setTimeout(() => {
    const res = x + y;

    func(res);
  }, 2000);
  console.log("runnin`");
};

add(9, 4, (sum) => {
  console.log(sum);
});
