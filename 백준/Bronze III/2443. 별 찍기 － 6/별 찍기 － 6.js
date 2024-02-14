const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let len = 2*parseInt(input)-1;
for(let i = len ; i >= 1 ; i-=2){
    console.log(' '.repeat((len-i)/2)+'*'.repeat(i));
}