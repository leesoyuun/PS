function solution(keymap, targets) {
    const answer = [];
    
    for(let i = 0 ; i < targets.length ; i++){
        let targetsIndexSum = 0;
        for(let j = 0 ; j < targets[i].length ; j++){
            //여기까지 targets
            let indexVal = Infinity;
            for(let k = 0 ; k < keymap.length ; k++){
                const targetsIndex = keymap[k].indexOf(targets[i][j]);
                
                 if(targetsIndex>-1){
                     indexVal = Math.min(indexVal,targetsIndex+1);
                 }
            }
            targetsIndexSum+=indexVal;
        }
        answer.push(targetsIndexSum === Infinity ? -1 : targetsIndexSum);
    }
    return answer;
}