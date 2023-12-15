function solution(n) {
    let sqrt = Math.sqrt(n);
    return sqrt === Math.floor(n/sqrt) ? Math.pow(sqrt+1,2) : -1;
}