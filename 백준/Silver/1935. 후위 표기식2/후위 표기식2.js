const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let cnt = input[0];
let ceremony = input[1];
let numbers = input.slice(2,input.length);
let stack = [];
let sh = new Map();

for(let i = 0 ; i < ceremony.split('').length ; i++){
    let current = ceremony[i];
    if(current.charCodeAt(0) >= 65 && current.charCodeAt(0) <= 90){
        if (!sh.has(current)) {
            sh.set(current, numbers.shift());
          }
          stack.push(sh.get(current));
    }else{
        let num2 = Number(stack.pop());
        let num1 = Number(stack.pop());
        switch(current){
            case '*':
                stack.push(num1*num2);
                break;
            case '-':
                stack.push(num1-num2);
                break;
            case '/':
                stack.push(num1/num2);
                break;
            case '+':
                stack.push(num1+num2);
                break;
        }
    }
}
console.log(parseFloat(Math.round(stack * 100) / 100).toFixed(2));