function solution(s) {
    let string_s = [...s].sort();
    let answer = s;
    for(let i = 0; i< string_s.length;i++){
        if (string_s[i] == string_s[i+1]){
            answer = answer.replaceAll(string_s[i],"");
        }
    }
    return [...answer].sort().join('')
}