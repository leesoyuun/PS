// function solution(my_string, n) {
//     const string = my_string.split('');
//     let answer = [];
//     for(let i = 0 ; i < string.length; i++){
//         answer.push(string[i].repeat(n));
//     }
//     return answer.join('');
// }
function solution(my_string, n) {
    var answer = [...my_string].map((v) => v.repeat(n)).join("")
    return answer;
}