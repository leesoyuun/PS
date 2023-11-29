function solution(str) {
  let lower = str.toLowerCase().replace(/[^a-z]/g, '');
  if(lower.split('').reverse().join('') !== lower) return "No";
  else return "YES";
}
let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
