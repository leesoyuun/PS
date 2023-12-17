function solution(num) {
    let cnt = 0;
    if(num === 1) return 0;
    while(true){
        if(num%2==0){
            num = num/2;
            cnt++;
        }else{
            num = num*3 + 1;
            cnt++;
        }
        if(num === 1) break;
    }
    if(cnt >= 500) return -1;
    else return cnt;
}