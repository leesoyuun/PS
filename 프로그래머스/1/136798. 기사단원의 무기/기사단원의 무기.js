function divisorCnt(number){
    var cnt = 0;
    for(let i = 1 ; i <= Math.sqrt(number) ; i++){
        if(number % i === 0) {
            cnt++;
            if(number / i !==i) cnt++;
        }
    }
    return cnt;
}

function solution(number, limit, power) {
    var divisorList = [];
    for(let i = 1 ; i <= number ; i++){
        divisorList.push(divisorCnt(i));
    }
    return divisorList.reduce((acc,cur) => cur > limit ? acc+= power : acc+=cur);
}