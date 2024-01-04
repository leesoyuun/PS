function solution(brown, yellow) {
    let total_frame = brown + yellow;
    let answer = [];
    
    for(let i = 3 ; i < total_frame; i++){
        let width = total_frame/i;
        let height = i;
        
        if(height > width) continue;
        if((height -2) * (width -2) === yellow){
            answer.push(width,height);
        }
    }
    return answer;
}