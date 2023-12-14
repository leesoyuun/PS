function solution(n) {
    return n.toString().split('').reverse().map(cur=>Number(cur));
}