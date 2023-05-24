function solution(myString) {
    let answer = '';
    for(let i of myString){
        if(i.charCodeAt() < 108)
            answer+= 'l';
        else
            answer+=i;
    }
    return answer;
}