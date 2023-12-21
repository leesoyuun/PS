function solution(number) {
    let answer = 0;
    let number_len = number.length
    for(let i = 0 ; i < number_len ; i++){
        for(let j = i+1; j < number_len ; j++){
            for(let k = j+1 ; k < number_len ; k++){
                number[i]+number[j]+number[k] == 0 ? answer++ : 0;
            }
        }
    }
    return answer;
}