const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let len = 2*parseInt(input)-1;
for(let i = 1 ; i <= len ; i+=2){
    console.log(' '.repeat((len-i)/2)+'*'.repeat(i));
}
for(let i = len-2 ; i >= 1 ; i-=2){
    console.log(' '.repeat((len-i)/2)+'*'.repeat(i));
}