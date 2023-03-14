function solution(my_string) {
    let answer = 0;
    let operation = '+'
    let new_str = my_string.split(' ')
    for(let i of new_str){
        if(isNaN(i))
            operation = i
        else
            operation == '+' ? answer+=Number(i) : answer-=Number(i)
    }
    return answer
}