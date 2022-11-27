// function solution(strlist) {
//     var answer = [];
//     for(let i = 0 ; i < strlist.length; i++){
//         answer.push(strlist[i].split('').length);
//     }
//     return answer;
// }

function solution(strlist){
    return strlist.map((el)=>el.length);
}
// 사실상 map쓰라고 준 문제
solution(["We", "are", "the", "world!"])