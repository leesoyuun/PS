function solution(X, Y) {
    var answer = "";
    X = X.split('');
    Y = Y.split('');
    for (let i = 0; i < 10; i++) {
        let rightX = X.filter((num) => Number(num) === i).length;
        let rightY = Y.filter((num) => Number(num) === i).length;
        answer += String(i).repeat(Math.min(rightX,rightY));
    }
    if(answer === '') return "-1";
    if(Number(answer) === 0) return "0";
    return answer.split("").sort((a,b) => Number(b)-Number(a)).join("");
}