function solution(A, B) {
    let cnt = 0;
    let newStr = A
    if(A === B) return 0;
    for(let i = 0 ; i < A.length; i++){
        newStr = newStr[newStr.length-1]+newStr.slice(0,newStr.length-1);
        cnt++;
        if(newStr === B) break;
    }
    if(cnt === A.length) return -1;
    return cnt;
}