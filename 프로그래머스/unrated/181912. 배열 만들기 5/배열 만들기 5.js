function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i of intStrs){
        if(i.substr(s,l) > k)
            answer.push(Number(i.substr(s,l)));
    }
    return answer;
}