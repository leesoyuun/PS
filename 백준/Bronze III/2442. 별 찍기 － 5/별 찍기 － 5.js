var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

input = parseInt(input);

let len = 2*input -1;
for(let i = 1 ; i <= len; i+=2){
    console.log(' '.repeat((len-i)/2)+'*'.repeat(i));
}