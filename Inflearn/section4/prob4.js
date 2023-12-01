function solution(m,arr) {
  let answer = 0;
  arr.sort((a,b)=>(a[0]+a[1]) - (b[0]+b[1]));
  for(let i = 0 ; i < arr.length ; i++){
      let money = m - (arr[i][0]/2+arr[i][1]);
      let cnt = 1;
      for(let j = 0; j < arr.length ; j++){
          let others = arr[j][0] + arr[j][1];
          if(i !== j && others > money) break;
          if(i !== j && others <= money){
              money -= others;
              cnt++;
          }
      }
      answer = cnt;
  }
  return answer;
}
