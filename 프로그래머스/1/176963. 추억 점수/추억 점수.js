function solution(name, yearning, photo) {
    let answer = [];
    for(let i = 0; i <photo.length ; i++){
        let score = 0; 
        for(let j = 0 ; j < photo[i].length ; j++){
            name.indexOf(photo[i][j]) === -1 ? 0 : score += yearning[name.indexOf(photo[i][j])];
        }
        answer.push(score);
    }
    return answer;
}