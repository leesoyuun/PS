function solution(lottos, win_nums) {
    const rank = [6,5,4,3,2];
    const min = lottos.filter((lotto) => win_nums.includes(lotto)).length;
    const max = lottos.filter((lotto) => lotto === 0).length;
    return [rank.indexOf(min + max) === -1 ? 6 : rank.indexOf(min + max) + 1, rank.indexOf(min) === -1 ? 6 : rank.indexOf(min)+1];
}