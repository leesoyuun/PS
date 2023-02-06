function solution(age) {
    var answer = '';
    var al = ['a','b','c','d','e','f','g','h','i','j']
    let newage = age.toString()
    for(let i = 0 ; i <newage.length;i++){
        answer += al[Number(newage[i])]
    }
    
    return answer
}