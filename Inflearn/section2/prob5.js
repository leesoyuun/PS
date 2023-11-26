function solution(arr) {
  let answer = [];
  for (let i of arr) {
    let score = 1;
    for (let j of arr) {
      if (i < j) score++;
    }
    answer.push(score);
  }
  return answer;
}
let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
