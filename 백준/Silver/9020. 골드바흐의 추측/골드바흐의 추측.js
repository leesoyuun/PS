const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputVal = input.slice(1, input.length).map((val) => parseInt(val));

inputVal.map((val) => {
  let Prime = [];
  for (let i = 2; i < val; i++) {
    let cnt = 0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        cnt++;
        break;
      }
    }
    if (cnt === 0) Prime.push(i);
  }

  let minDiff = Infinity;
  let answer = [];
  for (let i = 0; i < Prime.length; i++) {
    for (let j = i; j < Prime.length; j++) {
      if (Prime[i] + Prime[j] === val) {
        const diff = Math.abs(Prime[i] - Prime[j]);
        if (diff < minDiff) {
          minDiff = diff;
          answer = [Prime[i], Prime[j]];
        }
      }
    }
  }
  if(answer.length !== 0) console.log(answer.join(' '));
});