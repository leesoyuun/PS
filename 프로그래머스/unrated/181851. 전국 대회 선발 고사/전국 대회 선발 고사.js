function solution(rank, attendance) {
    let attendance_rank = [];
    for(let i = 0 ; i < attendance.length ; i++){
        if(attendance[i] === true) attendance_rank.push(rank[i]);
    }
    let three_rank = attendance_rank.sort((a,b)=>a-b).slice(0,3);
    let one = rank.indexOf(three_rank[0]);
    let two = rank.indexOf(three_rank[1]);
    let three = rank.indexOf(three_rank[2]);
    return (10000*one + 100*two + three);
}