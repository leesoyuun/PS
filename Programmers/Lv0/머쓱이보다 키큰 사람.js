function solution(array, height) {
    var answer = 0;
    for(let i of array){
        if(i > height)
            answer++;
    }
    return answer;
}
solution([149, 180, 192, 170],167)