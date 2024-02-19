const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.map((val) => {
  val = parseInt(val);
  let isPrime = 0;
  for (let i = val + 1; i <= 2 * val; i++) {
    let cnt = 0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0){
        cnt++;
        break;
      }
    }
    if(cnt === 0) isPrime++;
  }
  if(val !== 0) console.log(isPrime);
});