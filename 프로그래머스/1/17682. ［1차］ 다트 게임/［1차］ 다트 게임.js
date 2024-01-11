function solution(dartResult) {
    let answer = [];
    let num = 0;
    for(let i = 0 ; i < dartResult.length ; i++){
        if(!isNaN(dartResult[i])){
            if(dartResult[i] == 1 && dartResult[i+1] == 0){
                num = 10;
                i++;
            }
            else num = dartResult[i];
        }
        else{            
            if(dartResult[i] === 'S') answer.push(num ** 1);
            if(dartResult[i] === 'D') answer.push(num ** 2);
            if(dartResult[i] === 'T') answer.push(num ** 3);
            if(dartResult[i] === '#') answer[answer.length -1] *= -1;
            if(dartResult[i] === '*'){
                answer[answer.length -1] *= 2;
                answer[answer.length - 2] *= 2;
            }
        }
    }
    return answer.reduce((acc,cur)=>acc+=cur);
}