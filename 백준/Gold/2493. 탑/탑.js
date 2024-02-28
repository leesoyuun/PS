let  fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = input.shift();
input = input.join('').split(' ').map(val=>+val);

let stack = [];
let answer = [];

for(let i = 0 ; i < num ; i++){
  if(stack.length !==0){
    while(stack.length){
      if(input[stack[stack.length -1]] <= input[i]) stack.pop();
      else break;
    }
  }
  stack.push(i);

  if(stack.length === 1) answer.push(0);
  else{
    answer.push(stack[stack.length-2]+1)
  }
}
console.log(answer.join(' '));

