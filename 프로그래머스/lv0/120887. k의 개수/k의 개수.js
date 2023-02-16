function solution(i, j, k) {
    let stringk = k.toString();
    let answer = 0;
    for(let a = i ; a <= j ; a++){
        if(a.toString().split('').includes(stringk)){
            answer += a.toString().split(k).length-1;
        }
    }
    return answer;
}