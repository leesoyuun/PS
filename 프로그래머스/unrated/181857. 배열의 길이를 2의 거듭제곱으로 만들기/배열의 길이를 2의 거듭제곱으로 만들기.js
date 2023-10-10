function solution(arr) {
    let cnt = 0;
    let ar_len = arr.length;
    while(ar_len > 1){
        ar_len = ar_len/2;
        cnt++;
    }
    if(2**cnt == arr.length){
        return arr;
    }else{
        let answer = arr.slice();
        for (let i = 0; i < 2 ** cnt - arr.length; i++) {
            answer.push(0);
        }
        
        return answer;
    }
}