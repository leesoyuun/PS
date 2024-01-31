function solution(nums) {
    let hashMap = new Map();
    let answer = 0;
    
    for (let i = 0; i <= nums.length; i++) {
      let num = nums[i];
      hashMap.set(num, (hashMap.get(num) || 0) + 1);
    }
    for(let [k,v] of hashMap){
      if(k >= 1) answer++;
    }
    return Math.floor(nums.length/2) < answer ? Math.floor(nums.length/2) : answer;
    
}