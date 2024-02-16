const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

num = +input;

for (let i = 2; i <= Math.sqrt(num); i++) {
  while (num % i === 0) {
    console.log(i);
    num = num / i;
  }
}
if(num !== 1) console.log(num);