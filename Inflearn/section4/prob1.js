function solution(arr) {
  let answer, max = 0;
  for(let s of arr){
      let sum = s.toString().split('').reduce((acc,cur)=>acc+=Number(cur),0);
      if(sum > max){
          max = sum;
          answer = s;
      }else if(sum === max){
          if(s>answer) answer=s;
      }
  }
  return answer
}
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
