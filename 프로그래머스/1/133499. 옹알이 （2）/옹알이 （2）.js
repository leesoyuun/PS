function solution(babbling) {
    let answer = 0;
    let announce = ['aya','ye','woo','ma'];

    for(let i of babbling){
        let babble = i;
        for(let x of announce){
            if(babble.includes(x.repeat(2))) break;
            babble = babble.split(x).join(' ');
        }
        babble.split(' ').join('').length === 0 ? answer++ : answer+=0;
    }
    return answer;
    
}