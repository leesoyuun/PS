function solution(N, stages) {
    const failList = [];
    
    for(let i = 1 ; i <= N ; i++){
        const totalList = stages.filter((val) => val >= i).length;
        const successList = stages.filter((val) => val === i).length;
        
        failList.push([i,successList/totalList]);
    }
    
    return failList.sort((a,b) => b[1] - a[1]).map((val) => val[0]);
    
}