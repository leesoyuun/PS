function solution(my_string) {
    const word = [...my_string];
    var answer = 0;
    for(let i of word){
        if(isNaN(i) === false)
            answer+=parseInt(i)
    }
    
    return answer;
}