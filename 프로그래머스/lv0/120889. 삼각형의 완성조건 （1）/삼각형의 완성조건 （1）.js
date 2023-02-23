function solution(sides) {
    let max = sides.sort().splice(sides.length -1)
    let mins = 0;
    let answer 
    for(let i of sides)
         mins += i;
    max < mins ? answer = 1 : answer = 2
    
    return answer
}