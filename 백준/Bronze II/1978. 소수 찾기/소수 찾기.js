const fs = require('fs');
let [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let  inputArr = input.trim().split(" ");

let answer = 0;
n = parseInt(n);
for(let i = 0 ; i < n ; i++){
    let value = parseInt(inputArr[i]);
    let cnt = 0;
    if(value === 1) cnt = 1;
    for(let i = 2 ; i <= Math.sqrt(value); i++){
        if(value % i === 0) cnt++;
    }
    if(cnt === 0) answer++;
}
console.log(answer);