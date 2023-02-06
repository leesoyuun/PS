function solution(array) {
    var answer = 0;
    let sort_num = array.sort((a,b)=>a-b);
    answer = array[Math.floor(sort_num.length/2)];
    return answer;

}