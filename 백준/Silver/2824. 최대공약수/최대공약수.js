const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let M = input[1].split(' ').map(x=>BigInt(x)).reduce((acc,cur)=> acc*=cur);
let N = input[3].split(' ').map(x=>BigInt(x)).reduce((acc,cur)=> acc*=cur);

while(N > 0) {
    let mod = M % N;
    M = N;
    N = mod;
}
console.log(String(M).slice(-9));