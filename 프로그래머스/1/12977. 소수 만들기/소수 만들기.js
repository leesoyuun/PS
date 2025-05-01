function isDemical(num){
    var cnt = 0;
    for(let i = 2 ; i <= num ; i++){
        if(num%i===0) cnt++;
    }
    return cnt === 1;
}

function solution(nums) {
    var answer = 0;
    for(let i = 0; i < nums.length - 2  ; i++){
        for(let j = i+1 ; j < nums.length - 1 ; j++){
            for(let k = j+1; k < nums.length ; k++){
                if(isDemical(nums[i] + nums[j] + nums[k])) answer++;
            }
        }
    }
    
    return answer;
}