function solution(numbers) {
    var answer = [];
    for(let i of numbers){
        answer.push(i*2)
    }
    console.log(answer);
}
solution([1,2,3,4,5])