function solution(n) {
    const FIBO_ARRAY = [0,1];
    
    for(let i = 2 ; i <= n ; i++){
        FIBO_ARRAY.push(FIBO_ARRAY[i-1] % 1234567 + FIBO_ARRAY[i-2] % 1234567);
    }
    return FIBO_ARRAY[n] % 1234567;
}