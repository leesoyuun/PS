function solution(arr) {
    let value = [];
    for(let i = 0 ; i < arr.length; i++){
        for(let j = 0 ; j < arr.length; j++){
            value.push(arr[i][j] == arr[j][i] ? 1 : 0);
        }
    }
    
    return value.filter(x=>1 ===x).length === arr.length*arr.length ? 1 : 0
}