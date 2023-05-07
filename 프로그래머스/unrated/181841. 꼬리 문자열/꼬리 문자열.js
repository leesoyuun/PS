function solution(str_list, ex) {
    let tre_fal = str_list.map(i => i.includes(ex) ? true : false);
    let answer = [];
    for(let i = 0 ; i <tre_fal.length; i++){
        if(tre_fal[i] === false)
            answer.push(str_list[i]);
    }
    return answer.join('');
}