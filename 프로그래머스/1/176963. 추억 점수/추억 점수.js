function solution(name, yearning, photo) {
    var answer = [];
    
    for(let i = 0 ; i < photo.length ; i++){
        var tempSum = 0;
        for(let j = 0 ; j < photo[i].length ; j++){
            name.indexOf(photo[i][j]) === -1 ? 0 : tempSum+=yearning[name.indexOf(photo[i][j])];
        }
        answer.push(tempSum);
    }
    return answer;
}