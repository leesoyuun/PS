var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

console.log(input.filter(val=>val.length !==0).length);