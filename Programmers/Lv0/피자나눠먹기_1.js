function solution(n) {
    var answer = 0;
    if(n%7 == 0)
        answer = n/7;
    else
        answer = Math.floor(n/7)+1;
    console.log(answer)
}
solution(15)