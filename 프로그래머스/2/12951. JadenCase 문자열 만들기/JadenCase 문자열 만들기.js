function solution(s) {
    let splits = s.split(' ');
    let answer = [];
    for(let i = 0 ; i <splits.length; i++){
        if(splits[i].length > 0){
            let splitsI = splits[i].slice(1).toLowerCase();
            answer.push(splits[i][0].toUpperCase()+splitsI);
        }else{
            answer.push('');
        }
    }
    return answer.join(' ');
}