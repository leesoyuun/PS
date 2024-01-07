function solution(k, m, score) {
    score = score.sort((a,b)=>b-a);
    let temp = [];
    for(let i = 0 ; i < score.length ; i+=m){
        temp.push(score.slice(i,i+m));
    }
    
    return temp.map((x) => x.length === m ? Math.min(...x)*1*m : 0).reduce((acc,cur)=>acc+=cur);
}