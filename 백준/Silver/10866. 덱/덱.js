let  fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let N = input.shift();
let deque = [];
let answer = [];
for(let i = 0 ; i < N ; i++){
  let [cmd, num] = input[i].split(" ");
  switch(cmd){
    case 'push_front':
      deque.unshift(num);
      break;
    case 'push_back':
      deque.push(num);
      break;
    case 'pop_front':
      deque.length > 0 ? answer.push(deque.shift()) : answer.push(-1);
      break;
    case 'pop_back':
      deque.length > 0 ? answer.push(deque.pop()) : answer.push(-1);
      break;
    case 'size':
      answer.push(deque.length);
      break;
    case 'empty':
      deque.length === 0 ? answer.push(1) : answer.push(0);
      break;
    case 'front':
      deque.length > 0 ? answer.push(deque[0]) : answer.push(-1);
      break;
    case 'back':
      deque.length > 0 ? answer.push(deque[deque.length-1]) : answer.push(-1);
      break;
  }
}
console.log(answer.join('\n'));