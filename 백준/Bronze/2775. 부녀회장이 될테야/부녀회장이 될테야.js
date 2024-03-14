let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let T = +input.shift();

for(let i = 0 ; i < T ; i++){
  let k = +input.shift();
  let n = +input.shift();

  let arr = Array.from(Array(k+1), () => Array(n+1).fill(0));
  
  for(let i = 1 ; i <= n ; i++){
    arr[0][i] = i;
  }

  for(let i = 1 ; i <= k ; i++){
    for(let j = 1 ; j <= n ; j++){
      arr[i][j] = arr[i-1][j] + arr[i][j-1];
    }
  }
  console.log(arr[k][n]);
}
