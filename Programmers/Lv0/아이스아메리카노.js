function solution(money) {
    var answer = [];
    const ice = Math.floor(money/5500);
    const change = money % 5500;
    answer.push(ice,change)
    return answer;
}
solution(5500);