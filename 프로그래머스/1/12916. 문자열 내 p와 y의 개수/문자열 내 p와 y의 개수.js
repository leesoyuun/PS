function solution(s){
    const tempS = s.toLowerCase();
    let pNum = 0;
    let yNum = 0;
    for(let i = 0 ; i <tempS.length; i++){
        if(tempS[i] === 'p') pNum++;
        if(tempS[i] === 'y') yNum++;
    }
    return pNum === yNum ? true : false;
}