function solution(s) {
    let answer = [-1];
    for(let i = 1 ; i < s.length ; i++){
        let temp = [];
        for(let j = 0 ; j < i; j++){
            if(s[i] === s[j]) {
                temp.push(i-j)
            }
        }
        if(temp.length === 0 ) answer.push(-1);
        else if(temp.length === 1) answer.push(temp[0]);
        else answer.push(Math.min(...temp));
        
    }
    return answer;
}