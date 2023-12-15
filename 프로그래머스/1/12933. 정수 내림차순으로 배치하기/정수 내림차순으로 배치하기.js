function solution(n) {
    n = n.toString().split('').map(x=>Number(x));
    return Number(n.sort((a,b)=>b-a).join(''));
}