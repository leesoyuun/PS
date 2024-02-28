let  fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = input.shift();
input = input.join(' ').split(' ').map(val => +val);
let answer = Array.from({length : num}, () => -1);
let stack = [];

for(let i = num-1; i >= 0 ; i--){
  while(stack.length > 0 && stack[stack.length -1] <= input[i]){
    stack.pop();
  }
  
  if(stack.length > 0){
    answer[i] = stack[stack.length -1];
  }
  stack.push(input[i]);

}
console.log(answer.join(' '));
