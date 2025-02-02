function solution(n, money) {
    let arr = Array.from({ length: n + 1 }, () => 0)
    arr[0] = 1
    money.forEach((val) => {
        for(let i = val ; i <= n ; i++){
            arr[i] += arr[i-val];
        }
        
    })
    return arr[n]
}