function solution(s, n) {
    let final_answer = '';
    let sASCII = '';
    for(let i = 0 ; i <s.length ; i++){
        let ASCII = s[i].charCodeAt();
        let sASCII = ASCII + n;
        let answer = '';
        if(ASCII == 32) answer+= 32;
        //대문자
        if(ASCII>= 65 && ASCII <=90){
            if(sASCII > 90) {
                sASCII -= 26; 
            }
            answer +=sASCII;
        }else if(ASCII>=97 && ASCII <=122){
            if(sASCII > 122) {
                sASCII -= 26; 
            }
            answer +=sASCII;
        }
        final_answer += String.fromCharCode(answer);
    }   
    return final_answer;
}