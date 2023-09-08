function solution(arr, intervals) {
    let result = [];
    result.push(...(arr.slice(intervals[0][0],intervals[0][1]+1)))
    result.push(...(arr.slice(intervals[1][0],intervals[1][1]+1)))
    return result;
}