function solution(board, k) {
    let answer = 0;
    board.map((first_val,indexs)=>first_val.map(
        (sec_val,index) => indexs+index <= k ? answer+= sec_val : answer+= 0
    ))
    return answer;
}