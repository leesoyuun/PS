function solution(s) {
    let stack = [];
    let answer = 0;
    let first = s[0];
    
    for(let i = 0 ; i < s.length ; i++){
        if(first === s[i]) stack.push(s[i]);
        if(first !== s[i]) stack.pop();
        
        if(stack.length === 0){
            answer++;
            first = s[i+1];
        }
    }
    return stack.length !==0 ? answer+1 : answer;
}