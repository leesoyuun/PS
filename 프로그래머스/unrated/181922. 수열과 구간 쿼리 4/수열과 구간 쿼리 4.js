function solution(arr, queries) {
    for(let [s,e,k] of queries){
        for(let i = s ; i <= e ; i++){
            i % k == 0 ? arr[i]++ : 0;
        }
    }
    return arr
}