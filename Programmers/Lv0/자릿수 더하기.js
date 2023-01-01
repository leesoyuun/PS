function solution(n) {
    var number = [...String(n)];

    var answer = 0;
    for(let i of number){
        answer += Number(i)
    }
    return answer;
}