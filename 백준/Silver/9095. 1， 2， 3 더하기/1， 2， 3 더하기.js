let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let N = Number(input.shift());
let arr = input.map(Number);
function solution(N,arr){
  let newArray = new Array(11).fill(0);
  newArray[1] = 1;
  newArray[2] = 2;
  newArray[3] = 4;
  for(let i = 4 ; i < 11 ; i++){
    newArray[i] = newArray[i-3] + newArray[i-2] + newArray[i-1];
  }
  for(let i = 0 ; i < N; i++){
    console.log(newArray[arr[i]]);
  }
}
solution(N,arr);