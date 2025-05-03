function solution(babbling) {
    const ong = ['aya','ye','woo','ma'];
    let answer = 0;
    
    for(let i of babbling){
        let temp = i;
        for(let j of ong){ 
            if(i.includes(j.repeat(2))) break;
            temp = temp.split(j).join(' ');
        }
        temp.split(' ').join('').length === 0 ? answer++ : answer+=0;
    }
    return answer;
}