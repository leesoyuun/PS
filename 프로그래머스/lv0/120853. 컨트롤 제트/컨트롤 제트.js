function solution(s) {
    let s_num = s.split(' ')
    var answer = 0;
    for(let i = 0 ; i < s_num.length; i++){
        if(s_num[i] == 'Z'){
            answer-=Number(s_num[i-1])
        }else{
            answer+=Number(s_num[i])
        }
    }
    return answer;
}