let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let sum = 0;
let before = 0;
let answer = 0;

const parsedInput = input.map(Number);

for (let i = 0; i < parsedInput.length; i++) {
  before = sum;
  sum += parsedInput[i];

  if (sum <= 100) {
    answer = sum;
  } else {
    answer = Math.abs(100 - before) < Math.abs(100 - sum) ? before : sum;
    break;
  }
}

console.log(answer);