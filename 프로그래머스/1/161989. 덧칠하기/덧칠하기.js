function solution(n, m, section) {
    var answer = 0;
    var painted = 0;
    
    for(let x of section){
        if(painted < x){
            painted = x+m-1;
            answer++;
        }
    }
    return answer;
}