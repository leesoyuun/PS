let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

let N = +input[0];
let K = +input[1];
let answer = [];

let arr = Array.from({length : N}, (v,i)=> i+1);
for(let i = 0 ; i < N ; i++){
  for(let j = 1 ; j <= K ; j++){
    if(j === K){
      answer.push(arr.shift());
    }else{
      arr.push(arr.shift());
    }
  }
}
console.log('<'+answer.join(', ')+'>');




