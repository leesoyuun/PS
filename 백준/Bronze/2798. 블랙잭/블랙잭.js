let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
const [N,M] = input[0].split(' ').map(Number);
let card = input[1].split(' ').map(Number);

let answer = 0;
for(let i = 0 ; i < N-2; i++){
  for(let j = i+1 ; j < N-1 ; j++){
    for(let k = j+1 ; k < N ; k++){
      let sum = card[i]+card[j]+card[k];
      if(sum <= M && answer < sum){
        answer = sum;
      }
    }
  }
}
console.log(answer);

