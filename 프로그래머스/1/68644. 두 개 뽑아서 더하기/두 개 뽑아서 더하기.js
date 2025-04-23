function solution(numbers) {
    const numbersLen = numbers.length;
    const answer = new Set();
    
    for(let i = 0 ; i < numbersLen ; i++){
        for(let j = i+1 ; j < numbersLen; j++ ){
            answer.add(numbers[i] + numbers[j]);
        }
    }
    return [...answer].sort((a,b) => a-b);
}