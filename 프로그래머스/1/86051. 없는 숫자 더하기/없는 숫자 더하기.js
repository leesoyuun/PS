function solution(numbers) {
    let onetonine = [0,1,2,3,4,5,6,7,8,9];
    let answer = [];
    for(let i of onetonine){
        if(!numbers.includes(i)) answer.push(i);
    }
    return answer.reduce((acc,cur)=>acc+=cur);
}