function solution(num_list) {
    let last_val = num_list[num_list.length -1];
    let last_sec_val = num_list[num_list.length -2];
    last_val > last_sec_val ? num_list.push(last_val - last_sec_val) 
    : num_list.push(last_val * 2);
    return num_list;
}