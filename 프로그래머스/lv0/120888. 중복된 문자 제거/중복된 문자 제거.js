function solution(my_string) {
    let answer=''
    let word = my_string.split('');
    for(let i = 0 ; i <word.length; i++){
        if(i === my_string.indexOf(my_string[i])){
            answer += my_string[i];
        }
    }
    return answer;
}