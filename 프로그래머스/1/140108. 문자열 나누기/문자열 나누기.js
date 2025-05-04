function solution(s) {
    var stack = [];
    var firstLetter = s[0];
    var answer = 0;
    
    for(let i = 0 ; i < s.length ; i++){
        if(firstLetter === s[i]) stack.push(s[i]);
        else stack.pop();
        
        if(stack.length === 0) {
            answer++;
            firstLetter = s[i+1];
        }
    }
    return stack.length !== 0 ? answer+1 : answer;
}