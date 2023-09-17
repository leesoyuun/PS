function solution(binomial) {
    let bino = binomial.split(' ');
    let num1 = Number(bino[0]);
    let num2 = Number(bino[2]);
    let op = bino[1];
    if(op == '+')
        return num1 + num2;
    else if(op == '-')
        return num1 - num2;
    else if(op == '*')
        return num1 * num2;
}