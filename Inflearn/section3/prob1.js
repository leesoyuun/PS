function solution(str) {
  let smallStr = str.toLowerCase();
  if(smallStr.split('').reverse().join('') === smallStr){
      return "YES";
  }else {
      return "No";
  }
}
let str = "gooG";
console.log(solution(str));
