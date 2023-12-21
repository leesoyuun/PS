function solution(d, budget) {
    d = d.sort((a,b)=>a-b);
    let cnt = 0;
    for(let i = 0 ; i <d.length ; i++){
        budget -= d[i];
        if(budget < 0) break;
        else cnt++;
    }
    return cnt;
}