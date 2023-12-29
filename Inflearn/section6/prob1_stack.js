// use stack
function solution(a) {
  let answer = "YES";
  let stack = [];
  for(let x of a){
      if(x === '(') stack.push('(');
      else{
          if(stack.length === 0) return "No";
          else stack.pop();
      }
      if (stack.length > 0) return "No";
  }
  return answer;
}
let a = "(()(()))(()";
console.log(solution(a));
