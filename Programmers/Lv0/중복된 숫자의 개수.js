function solution(array, n) {
    var answer = 0;
    for(let i of array){
        if(i == n)
            answer++;
    }
    return answer;
}
solution([1, 1, 2, 3, 4, 5],1)