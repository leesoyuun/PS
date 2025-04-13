function solution(arr, divisor) {
    const arr2 = arr.filter((val) => val % divisor === 0).sort((a,b) => a-b);
    return arr2.length ? arr2 : [-1];
}