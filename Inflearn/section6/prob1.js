function solution(a){
    let answer = "NO";
    let start, end = 0;
    for(let i = 0 ; i <a.length ; i++){
        if(a[i] === "(") start++;
        else end++;
    }
    if(start === end) answer = "YES";
    return answer;
}
let a="(()(()))(()";
console.log(solution(a));
