function solution(price, money, count) {
    var totalCnt = 0;
    for(let i = 1 ; i <= count ; i++){
        totalCnt+= price*i;
    }
    return money - totalCnt >= 0 ? 0 : totalCnt - money;
}