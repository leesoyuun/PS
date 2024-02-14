var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

input = parseInt(input);
for(let i = input ; i >= 1 ; i--){
    console.log(' '.repeat(input-i)+'*'.repeat(i));
}