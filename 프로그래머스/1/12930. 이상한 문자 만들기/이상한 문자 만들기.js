function solution(s) {
    const tempS = s.split(' ');
    let answer = '';
    
    for(let i = 0 ; i < tempS.length; i++){
        for(let j = 0 ; j < tempS[i].length; j++){
            if(j%2 === 0) answer+= tempS[i][j].toUpperCase();
            else answer+=tempS[i][j].toLowerCase();
        }
        if(i !== tempS.length-1) answer += ' ';

    }
    return answer;
}