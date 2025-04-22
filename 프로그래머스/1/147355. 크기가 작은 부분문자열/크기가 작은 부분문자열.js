function solution(t, p) {
    let TLen = [];
    let answer = 0;
    
    for(let i = 0 ; i < t.length ; i++){
        TLen.push(t.slice(i,i+p.length));
    }
    
    let filterTLen = TLen.filter((val) => val.length === p.length);
    for(let i = 0 ; i < filterTLen.length ; i++){
        if(+filterTLen[i] <= +p) answer++;
    }
    return answer;
}