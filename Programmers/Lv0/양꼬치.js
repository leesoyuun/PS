function solution(n, k) {
    var answer = 0;
    let free_drink = 0;
    if(n > 9){
        free_drink = Math.floor(n/10);
    }
    answer = n*12000 + (k-free_drink) * 2000
    console.log(answer);
}
solution(64,6)