function solution(x) {
    let answer = 0;
    let sum = x.toString().split('').reduce((acc,cur)=>acc+=Number(cur),0);
    return x%sum ? false : true;
}