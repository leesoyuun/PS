function solution(arr) {
    const minNum = Math.min(...arr);
    return arr.length === 1 ? [-1] : arr.filter((val) => val !== minNum);
}