function solution(k, score) {
    let result = [];
    let tempArr = [];
    for(let i = 0 ; i < score.length ; i++){
        if(i < k){
            tempArr.push(score[i]);
            result.push(Math.min(...tempArr));
        }else{
            if(Math.min(...tempArr) < score[i]){
                tempArr.sort((a,b)=>b-a).pop();
                tempArr.push(score[i]);
                result.push(Math.min(...tempArr));
            }else{
                result.push(Math.min(...tempArr));
            }
        }
    }
    return result;
}