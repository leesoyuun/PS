function solution(cipher, code) {
    var arr = [...cipher];
    var answer = [];
    for(let i = 1; i<=cipher.length; i++){
        if(i%code == 0 ){
            answer.push(cipher[i-1]);
        }
    }
    return answer.join('');
}