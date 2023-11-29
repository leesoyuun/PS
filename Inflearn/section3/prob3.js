function solution(str) {
  let answer = '';
  let isNum = /[0-9]/
  for(let i of str){
    if(!isNaN(i)) answer += i;
  }
  return answer;
}
let str = "g0en2T0s8eSoft";
console.log(solution(str));
