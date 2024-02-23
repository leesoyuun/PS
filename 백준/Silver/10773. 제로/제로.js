const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(val => parseInt(val));

const start = input.slice(1, input.length);
const num = input[0];
const stack = [];
for(let i = 0 ; i < num ; i++){
    if(start[i] !== 0) stack.push(start[i]);
    else stack.pop();
}
stack.length === 0 ? console.log(0) : console.log(stack.reduce((acc,cur)=>acc+=cur));
