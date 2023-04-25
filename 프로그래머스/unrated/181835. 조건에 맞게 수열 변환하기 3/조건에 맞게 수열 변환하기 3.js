function solution(arr, k) {
    return k%2 == 0 ? arr.map(arrs=>arrs+k) : arr.map(arrs=>arrs*k) 
}