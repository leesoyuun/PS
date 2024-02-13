function solution(board, moves) {
    let stack = [];
    let answer = 0;
    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0 ; j < i ; j++){
            [board[i][j], board[j][i]] = [board[j][i], board[i][j]];
        }
    }
    let noZero = board.map((first)=>first.filter(second => second !== 0));
    for(let i = 0 ; i < moves.length ; i++){
        let item = noZero[moves[i]-1].shift();
        if(item !== undefined && item === stack[stack.length-1]){
            stack.pop();
            answer += 2;
        }else{
            stack.push(item);
        }
    }
    return answer;
}
