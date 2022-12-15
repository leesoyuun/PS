/*function solution(n, numlist) {
    return numlist.filter((num)=> num % n === 0 )
}*/

function solution(n, numlist) {
    var answer = [];
    numlist.map((k)=> {
        if(k%n === 0)
            answer.push(k);
    });
    return answer;
}