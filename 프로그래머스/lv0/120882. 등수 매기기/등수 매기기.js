 function solution(score) {
    var answer = [];
    var sum = [];

    for(let i = 0 ; i < score.length;i++){
        sum.push((score[i][0]+score[i][1])/2)
    }

    for(let i = 0 ; i < sum.length;i++){
        let rank = 1;
        for(let j = 0 ; j <sum.length; j++){
            if(sum[i]<sum[j])
                rank++;
        }
        answer.push(rank)
    }
     return answer;
}