
2
3
4
5
6
7
8
9
10
11
12
13
function solution(denum1, num1, denum2, num2) {
    let under = num1 * num2;
    let up = (denum1 * num2) + (denum2 * num1);
    let div_num = 0;

    for(let i = 1 ; i<= under; i++){
        if(up % i === 0 && under % i === 0)
            div_num = i;
    }

    return [up/div_num,under/div_num];
}
solution(1,2,3,4)