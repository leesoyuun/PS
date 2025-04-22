function solution(s) {
    var answer = [-1];
    for(let i = 1 ; i < s.length ; i++){
        const sliceS = s.slice(0,i);
        answer.push(sliceS.lastIndexOf(s[i]) === -1 ? -1 : sliceS.length - sliceS.lastIndexOf(s[i]));
    }
    return answer;
}