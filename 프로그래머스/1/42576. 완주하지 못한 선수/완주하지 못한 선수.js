function solution(participant, completion) {
    const tempParticipant = participant.sort();
    const tempCompletion = completion.sort();
    
    for(let i = 0 ; i < tempParticipant.length ; i++){
        if(tempCompletion[i] !== tempParticipant[i]) return tempParticipant[i];
    }
}