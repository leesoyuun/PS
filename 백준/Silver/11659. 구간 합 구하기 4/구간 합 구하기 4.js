let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N,M] = input.shift().split(' ').map(Number);
let arr = input.shift().split(' ').map(Number);
let prefix_sum = new Array(arr.length + 1).fill(0);

arr.forEach((val,i)=> {
  prefix_sum[i+1] = val + prefix_sum[i];
});

let answer = [];
input.forEach(val=>{
  const [start,end] = val.split(' ').map(Number);
  answer.push(prefix_sum[end] - prefix_sum[start-1]);
})
console.log(answer.join('\n'));


