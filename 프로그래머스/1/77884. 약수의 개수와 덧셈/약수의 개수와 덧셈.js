function measure(number){
    var measureNum = 0;
    for(let i = 1 ; i <= number; i++){
        if(number % i === 0) measureNum++;
    }
    return measureNum;
}

function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++){
        if(measure(i) % 2 === 0) answer+= i;
        else answer-= i;
    }
    return answer;
}