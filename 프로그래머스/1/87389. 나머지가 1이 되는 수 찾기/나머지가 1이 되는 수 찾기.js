function solution(n) {
    let x = n;
    
    for(let i = n ; i > 1 ; i--){
        if(n % i === 1){
            x = i;
        }
    }
    return x;
}