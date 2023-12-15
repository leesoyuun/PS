function solution(x, n) {
    let arr = new Array(n).fill(0);
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] = x*(i+1);
    }
    return arr;
}