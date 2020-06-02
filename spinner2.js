
const spinnerBasic = function() {
  let time = 0;
  const spinArr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
  for (const element of spinArr) {
    time += 200;
    setTimeout(() => {
      process.stdout.write("\r" + element + '   ');
    }, time);
  }
};


