function solution(numbers) {
    var answer = 0;
    for(let i of numbers){
        answer += i;
    }
    answer = answer/numbers.length;
    console.log(answer);
}
solution([1,2,3,4,5,6,7,8,9,10])