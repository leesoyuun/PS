const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = input[0];
let compare = input.map((val) => Number(val));
let temp_stack = [];
let answer = [];

var cnt = 1;
for (let i = 1; i <= num; i++) {
  temp_stack.push(i);
  answer.push("+");

  while (temp_stack.length > 0 && temp_stack[temp_stack.length - 1] === compare[cnt]) {
    temp_stack.pop();
    answer.push("-");
    cnt += 1;
  }
}
if (temp_stack.length > 0) {
  console.log("NO");
} else {
  console.log(answer.join("\n"));
}
