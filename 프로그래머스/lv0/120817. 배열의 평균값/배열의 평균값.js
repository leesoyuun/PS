function solution(numbers) {
    var answer = 0;
    for(let i of numbers){
        answer += i;
    }
    answer = answer/numbers.length;
    return answer;
}