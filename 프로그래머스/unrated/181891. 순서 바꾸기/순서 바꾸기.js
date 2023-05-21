function solution(num_list, n) {
    let answer1 = [];
    let answer2 = [];
    answer1 = num_list.slice(n);
    answer2 = num_list.slice(0,n);
    return answer1.concat(answer2);
}