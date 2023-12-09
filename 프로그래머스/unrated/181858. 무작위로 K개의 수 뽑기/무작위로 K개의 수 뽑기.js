function solution(arr, k) {
    let answer = [];
    for(let i of arr){
        if(answer.length === k) return answer;
        if(!answer.includes(i)) answer.push(i);
    }
    while(answer.length < k){
        answer.push(-1);
    }
    return answer;
}