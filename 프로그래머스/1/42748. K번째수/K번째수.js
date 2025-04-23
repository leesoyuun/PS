function solution(array, commands) {
    var answer = [];
    
    for(let i = 0 ; i < commands.length; i++){
        const first = commands[i][0] - 1;
        const second = commands[i][1];
        const third = commands[i][2] - 1;
        answer.push(array.slice(first,second).sort((a,b) => a-b)[third]);
    }
    return answer;
}