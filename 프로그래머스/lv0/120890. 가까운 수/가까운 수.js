function solution(array, n) {
    let max_num = 100;
    let new_arr = array.sort();
    
    for (let i of array) {
        if (Math.abs(n - i) < max_num) {
            max_num = Math.abs(n - i);
        }
    }
    for(let i of array){
        if(Math.abs(n - i) == max_num){
            return i;
        }
    }
}