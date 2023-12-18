function solution(a, b) {
    let answer = [];
    for(let i = 0 ; i < a.length ; i++){
        answer.push(a[i]*b[i]);
    }
    return answer.reduce((acc,cur)=>acc+=cur);
}