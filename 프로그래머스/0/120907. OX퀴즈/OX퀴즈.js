function solution(quiz) {
    let result = [];
    quiz.forEach(val=> {
        let sep = val.split(' ');
        let answer = 0;
        if(sep[1] === '-'){
            answer = +sep[0] - (+sep[2]);
        }else if(sep[1] === '+'){
            answer = +sep[0] + (+sep[2]);
        }
        answer === (+sep[4]) ? result.push("O") : result.push("X");
    })
    return result;
}