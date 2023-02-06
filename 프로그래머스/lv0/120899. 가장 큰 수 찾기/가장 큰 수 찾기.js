function solution(array) {
    var answer = [];
    let max_num = Number(Math.max(...array));
    let max_num_index = array.indexOf(max_num)
    answer.push(max_num,max_num_index)
    return answer;
}