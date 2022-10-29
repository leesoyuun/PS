function solution(array) {
    var answer = 0;
    let sort_num = array.sort((a,b)=>a-b);
    answer = array[Math.floor(sort_num.length/2)];
    console.log(answer)

}
solution([1, 2, 7, 10, 11]);