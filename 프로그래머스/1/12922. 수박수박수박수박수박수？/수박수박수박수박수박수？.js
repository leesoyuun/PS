function solution(n) {
    let watermelon = ['수','박'];
    let answer = [];
    for(let i = 0 ; i < n ; i++){
        answer.push(watermelon[i%watermelon.length]);
    }
    return answer.join('');
}