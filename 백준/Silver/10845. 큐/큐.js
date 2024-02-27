const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = input.shift();
let queue = [];
let answer = [];

for(let i = 0 ; i < num ; i++){
  switch(input[i]){
    case 'pop':
      queue.length === 0 ? answer.push('-1') : answer.push(queue.shift())
      break;
    case 'size':
      answer.push(queue.length);
      break;
    case 'empty':
      queue.length === 0 ? answer.push(1) : answer.push(0);
      break;
    case 'front':
      queue.length === 0 ? answer.push('-1') : answer.push(queue[0]);
      break;
    case 'back':
      queue.length === 0 ? answer.push('-1') : answer.push(queue[queue.length-1]);
      break;
    default:
      queue.push(input[i].split(' ')[1]);
      break;
  }
}
console.log(answer.map((val)=>Number(val)).join('\n'));