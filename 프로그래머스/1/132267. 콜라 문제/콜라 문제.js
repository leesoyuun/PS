function solution(a, b, n) {
    let getcol = 0;
    while(n>=a){
        getcol += (Math.floor(n/a))*b;
        n = Math.floor(n/a)*b + n%a;
    }
    return getcol;
}
