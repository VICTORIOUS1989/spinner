let delay = 100;
const animFrames = ['|', '/', '-', '\\'];


  for (animFrame of animFrames) {
    setTimeout(() => {
      process.stdout.write(`\r ${animFrame}   `);
    }, delay);
    delay+= 200;
  }


