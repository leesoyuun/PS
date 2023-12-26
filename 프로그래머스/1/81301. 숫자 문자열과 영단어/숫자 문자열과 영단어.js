function solution(s) {
    let en = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let answer = s;
    
    for(let i = 0 ; i < en.length ; i++){
        let str = answer.split(en[i]);
        answer = str.join(i);
    }
    return +answer;
}