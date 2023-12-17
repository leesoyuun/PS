function solution(arr, divisor) {
    let answer = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(Number.isInteger(arr[i]/divisor)) answer.push(arr[i]);
    }
    return answer.length === 0 ? [-1] : answer.sort((a,b)=>a-b);
}
