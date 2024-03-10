function solution(n) {
    let tem = 0;
    for(let i = 1 ; i <= n ; i++){
        tem +=1;
        while(1){
            if(tem%3 === 0 || String(tem).includes('3')) {
            tem++;
            continue;
            }
            break;
        }
    }
    return tem;
}