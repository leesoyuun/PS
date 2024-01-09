function solution(n, m, section) {
    let painted = 0;
    let answer = 0;
    for(let x of section){
        if(painted < x){
            painted = x+m-1;
            answer++;
        }
    }
    return answer;
}