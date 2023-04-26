function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((acc,arr)=>acc+arr) : num_list.reduce((acc,arr)=>acc*arr)
}