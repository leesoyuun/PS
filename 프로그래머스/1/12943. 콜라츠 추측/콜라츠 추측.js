function solution(num) {
    var cnt = 0;
    var numTemp = num;
    
    while(cnt <= 500){
        if(numTemp === 1) break;
        if(numTemp % 2 === 0)numTemp = numTemp/2;
        else numTemp = numTemp * 3 + 1;
        cnt++;
    }
    return cnt >= 500 ? -1 : cnt;
}