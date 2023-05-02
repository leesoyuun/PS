function solution(arr, n) {
    return (arr.length)%2 == 0
    ? arr.map((ele, idx) => idx % 2 === 1 ? ele + n : ele)
    : arr.map((ele, idx) => idx % 2 === 0 ? ele + n : ele);
}