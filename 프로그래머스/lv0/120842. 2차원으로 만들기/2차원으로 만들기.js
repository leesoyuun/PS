function solution(num_list, n) {
    let arr = [];
    for(let i = 0 ; i <num_list.length;){
        let sec_arr = [];
        for(let j = 0 ; j < n; j++){
            sec_arr.push(num_list[i]);
            i++
        }
        arr.push(sec_arr)
    }
    return arr;
}