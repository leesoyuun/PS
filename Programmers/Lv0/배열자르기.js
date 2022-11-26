function solution(numbers, num1, num2) {
    var answer = [];
    return answer = numbers.splice(num1,num2);
}
solution([1, 2, 3, 4, 5],1,3);

//splice(num1,num2); num1~2까지 배열자르기