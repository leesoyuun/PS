function solution(s, n) {
    var answer = '';
    
    for(let i = 0 ; i < s.length ; i++){
        const ASCII = s[i].charCodeAt();
        let sumASCII = s[i].charCodeAt() + n;
        
        if(s[i] === ' ') answer += ' ';
        if(ASCII >= 65 && ASCII <= 90){
            if(sumASCII > 90)  sumASCII -= 26;
            answer += String.fromCharCode(sumASCII);
        }
        if(ASCII >= 97 && ASCII <= 122){
            if(sumASCII > 122) sumASCII -= 26;
            answer += String.fromCharCode(sumASCII);
        }
    }
    return answer;
}