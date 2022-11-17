function solution(num_list) {
    var answer = [];
    var odd = 0;
    var even = 0;
    for(let i of num_list){
        i%2 == 0 ? even++ : odd++;
    }
    answer.push(even,odd)
    return answer;
}
solution([1, 2, 3, 4, 5])