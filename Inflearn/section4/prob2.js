function isPrime(num) {
  let cnt = 0;
  for (let i = 2; i < num - 1; i++) {
    if (num % i == 0) cnt++;
  }
  if (num === 1) return false;
  if (cnt === 0) return true;
  else return false;
}
function solution(arr) {
  let newArr = [];
  for (let i of arr) {
    let reverse = parseInt(i.toString().split("").reverse().join(""));
    isPrime(reverse) ? newArr.push(reverse) : null;
  }
  return newArr;
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
