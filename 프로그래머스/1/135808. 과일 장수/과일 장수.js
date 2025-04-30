function solution(k, m, score) {
    //k점사과
    //m개씩 담아 포장
    
    const sortApple = score.sort((a,b) => b-a);
    const tempApple = [];
    var answer = 0;
    
    for(let i = 0 ; i < score.length; i+=m){
        tempApple.push(sortApple.slice(i,m+i));
    }
    
    for(let i = 0 ; i < tempApple.length; i++){
        if(tempApple[i].length === m) {
            answer+=Math.min(...tempApple[i]) * m
        }
    }
    return answer;
    
}