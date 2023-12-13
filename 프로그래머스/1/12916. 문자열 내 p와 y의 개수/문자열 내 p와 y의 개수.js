function solution(s){
    let answer = false;
    let new_s = s.toUpperCase();
    let p_num = 0;
    let y_num = 0;
    for(let i of new_s){
        if(i === 'P') p_num++;
        if(i === 'Y') y_num++;
    }
    return p_num === y_num ? true : false;
}