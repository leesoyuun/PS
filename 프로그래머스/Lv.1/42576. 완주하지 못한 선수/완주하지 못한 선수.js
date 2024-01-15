// function solution(participant, completion) {
//     let participant_sort = participant.sort();
//     let completion_sort = completion.sort();

//     for(let i = 0 ; i < participant_sort.length ; i++){
//         if(participant_sort[i] !== completion_sort[i]) return participant_sort[i];
//     }
// }
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}