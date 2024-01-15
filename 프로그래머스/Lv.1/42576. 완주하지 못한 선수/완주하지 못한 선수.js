function solution(participant, completion) {
    let participant_sort = participant.sort();
    let completion_sort = completion.sort();

    for(let i = 0 ; i < participant_sort.length ; i++){
        if(participant_sort[i] !== completion_sort[i]) return participant_sort[i];
    }
}