var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

var a = parseInt(input[0]);
var b = parseInt(input[1]);

function isPrime(n){
    if(n===1) return;
    for(let j = 2 ; j <= Math.sqrt(n); j++){
        if(n % j === 0 ) return;
    }
    console.log(n);
}

for(let i = a ; i <= b ; i++){
    isPrime(i);
}