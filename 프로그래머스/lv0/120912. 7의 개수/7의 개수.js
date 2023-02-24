function solution(array) {
    array = array.join('').split('')
    let cnt = 0;

    for(let i of array){
        if(i == '7')
            cnt++;
    }
    return cnt
}