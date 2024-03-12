function solution(code) {
    let mode = 0;
    let answer = [];
    for(let i = 0 ; i < code.length ; i++){
        if(mode == 0){
            if(code[i] !== "1" && i%2 == 0)answer.push(code[i]);
            if(code[i] === "1") mode = 1;
        }else if(mode == 1){
            if(code[i] !=="1" && i%2 == 1) answer.push(code[i]);
            if(code[i] === "1") mode = 0;
        }
    }
    return answer.length === 0 ? "EMPTY" : answer.join('');
}