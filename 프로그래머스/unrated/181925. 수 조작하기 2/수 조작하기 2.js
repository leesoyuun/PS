function solution(numLog) {
    var answer = '';
    for(let i = 1 ; i < numLog.length ; i++){
        let sub = numLog[i] - numLog[i-1];
        if(sub === 1)
            answer+= 'w';
        if(sub === -1)
            answer+='s';
        if(sub === 10)
            answer+='d';
        if(sub === -10)
            answer+='a';
    }
    return answer;
}