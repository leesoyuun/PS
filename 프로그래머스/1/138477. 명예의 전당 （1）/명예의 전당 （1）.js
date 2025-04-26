function solution(k, score) {
    var tempWinner = [];
    var answer = [];
    
    for(let i = 0 ; i < score.length ; i++){
        tempWinner.push(score[i]);
        if(i >= k) tempWinner.splice(tempWinner.indexOf(Math.min(...tempWinner)),1);
        answer.push(Math.min(...tempWinner));
    }
    return answer;
}