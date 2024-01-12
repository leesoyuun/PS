function solution(lottos, win_nums) {
    let ranking = [6,5,4,3,2];
    let rightNumCnt = lottos.map((cur)=>win_nums.filter(y=>y===cur)).filter(x=>x.length != 0).length;
    let zeroNum = lottos.filter(x=>x===0).length;
    return [zeroNum + rightNumCnt < 2 ? 6 :ranking.indexOf(zeroNum + rightNumCnt)+1,
            rightNumCnt < 2 ? 6 : ranking.indexOf(rightNumCnt)+1];
}