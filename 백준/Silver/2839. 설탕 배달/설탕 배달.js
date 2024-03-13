let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = +input;

let cnt = 0;
while(true){
  if(input%5 === 0){
    console.log(Math.floor(input/5)+cnt);
    break;
  }if(input < 0){
    console.log(-1);
    break;
  }
  cnt++;
  input -=3;
}