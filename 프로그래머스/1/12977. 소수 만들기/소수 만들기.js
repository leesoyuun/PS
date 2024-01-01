function decimal(nums){
    let total = 0;
    for(let i = 2 ; i < nums; i++){
        if(nums%i === 0) total++;
    }
    if(total === 0) return true;
    else return false;
}
function solution(nums) {
    let answer = 0;
    for(let i = 0 ; i < nums.length-2 ; i++){
        for(let j = i+1 ; j < nums.length-1 ; j++){
            for(let k = j+1 ; k < nums.length ; k++){
                let sum = 0;
                sum = nums[i] + nums[j] + nums[k];
                decimal(sum) ? answer++ : 0;
            }
        }
    }
    return answer;
}