function solution(sides) {
    let sum = sides[0]+sides[1];
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    let answer = [];
    for(let i = max ; i < sum ; i++){
        answer.push(i)
    }
    for(let i = (max - min)+1 ; i < max; i++){
        answer.push(i)
    }
    return answer.length;
}