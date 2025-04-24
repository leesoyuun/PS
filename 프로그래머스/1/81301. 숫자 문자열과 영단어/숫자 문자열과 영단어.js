function solution(s) {
    const alphaNum = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    var answer = s;
    
    for(let i = 0 ; i < alphaNum.length ; i++){
        let str = answer.split(alphaNum[i]);
        answer = str.join(i);
    }
    return +answer;
    
}