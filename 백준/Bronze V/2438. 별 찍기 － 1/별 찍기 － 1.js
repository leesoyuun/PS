var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

for(let i = 1 ; i <= input; i++){
    console.log('*'.repeat(i));
}