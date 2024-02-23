const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cnt = input[0];
const start = input.slice(1,input.length);
let stack = [];
let answer = [];
for(let i = 0 ; i < cnt ; i++){
    switch(start[i]){
        case 'pop':
            answer.push(stack.pop() || -1);
            break;
        case 'size':
            answer.push(stack.length);
            break;
        case 'empty':
            stack.length === 0 ? answer.push(1) : answer.push(0);
            break;
        case 'top':
            answer.push(stack[stack.length -1] || -1);
            break;
        default:
            stack.push(start[i].split(' ')[1]);
            break;
    }
}
console.log(answer.join('\n'));