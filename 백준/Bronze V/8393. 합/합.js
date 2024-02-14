var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

let sum = 0;
for(let i = 1 ; i <= input ; i++){
    sum += i;
}
console.log(sum);