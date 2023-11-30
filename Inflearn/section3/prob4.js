function solution(str, al) {
  let answer = [];
  let maxLen = 100;
  for(let i = 0 ; i < str.length; i++){
    if(str[i]===al){
      maxLen = 0;
      answer.push(maxLen);
    }else{
      maxLen++;
      answer.push(maxLen);
    }
  }
  maxLen = 100;
  for(let i = str.length-1; i >= 0 ; i--){
    if(str[i]!==al){
      maxLen++;
      answer[i] = Math.min(answer[i],maxLen);
    }else{
      maxLen = 0;
    }
  }
  return answer;
}
