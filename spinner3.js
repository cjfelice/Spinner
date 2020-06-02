
const spinnerCustom = function(rotations) {
  let time = 0;
  const spinArr = ['|', '/', '-', '\\']
  for (let i = 0; i < (rotations * 2); i++) {
    for (const element of spinArr) {
      time += 200;
      setTimeout(() => {
        process.stdout.write("\r" + element + '   ');
      }, time);
    }
  }
};