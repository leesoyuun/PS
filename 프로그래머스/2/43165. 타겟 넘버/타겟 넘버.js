function solution(numbers, target) {
    var answer = 0;
    
    dfs(0,0);
    
    function dfs(index,sum){
        if(index === numbers.length){
            if(target === sum) answer++;
            return;
        }
        dfs(index+1,sum+numbers[index]);
        dfs(index+1,sum-numbers[index]);
    }
    return answer;
}