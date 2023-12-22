function solution(t, p) {
    let sliceT = [];
    let cnt = 0;
    for(let i = 0 ; i <= t.length - p.length ; i++){
        sliceT.push(t.slice(i,i+p.length));
    }
    for(let i = 0 ; i < sliceT.length ; i++){
        sliceT[i] <= p ? cnt++ : cnt += 0;
    }
    return cnt;
}