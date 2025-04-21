function solution(d, budget) {
    const tempD = d.sort((a,b) => a-b);
    var answer = 0;
    for(let i = 0; i < tempD.length; i++){
        budget -= tempD[i];
        if(budget >= 0)  answer++;
    }
    
    return answer;
}