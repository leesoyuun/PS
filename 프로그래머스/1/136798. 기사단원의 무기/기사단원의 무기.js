function divisors(num){
    let cnt = 0;
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num%i === 0){
            cnt++;
            if(num/i != i) cnt++;
        }
    }
    return cnt;
}

function solution(number, limit, power) {
    let divisor_cnt = [];
    for(let i = 1 ; i <= number; i++){
        divisor_cnt.push(divisors(i));
    }
    return divisor_cnt.map(x=>x>limit ? power : x).reduce((acc,cur)=>acc+=cur);
}