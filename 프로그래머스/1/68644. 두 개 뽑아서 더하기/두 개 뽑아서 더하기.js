function solution(numbers) {
    let answer = new Set();
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i === j) continue;
            else answer.add(numbers[i] + numbers[j]);
        }
    }
    return Array.from(answer).sort((a,b)=>a-b);
}
