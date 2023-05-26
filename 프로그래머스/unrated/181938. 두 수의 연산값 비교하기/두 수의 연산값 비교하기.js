function solution(a, b) {
    let str_sum = Number(String(a)+String(b));
    let mul_2 = 2*a*b;
    return str_sum > mul_2 ? str_sum : mul_2;
}