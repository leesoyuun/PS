function solution(num_list) {
    let dp = new Array(31).fill(0);
    let answer = 0;
    for(let i = 0 ; i <num_list.length; i++){
        let cnt = 0;
        let n = num_list[i];
        while(1){
            if(n == 1){
                dp[num_list[i]] = cnt;
                answer += dp[num_list[i]];
                break;
            }
            if(dp[n] != 0){
                dp[num_list[i]] = dp[n] + cnt;
                answer += dp[num_list[i]];
                break;
            }
            if(n%2==0){
                n = n/2;
                cnt++;
            }else{
                n = (n-1)/2;
                cnt++;
            }
        }
    }
    return answer;
}