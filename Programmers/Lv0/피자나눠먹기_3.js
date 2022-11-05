function solution(slice, n) {
    var answer = 0;
    n%slice == 0 ? answer = n/slice : answer = Math.floor(n/slice) + 1;
    console.log(answer);
}
solution(7,10);