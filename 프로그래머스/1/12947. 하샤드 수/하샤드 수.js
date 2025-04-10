function solution(x) {
    return x % x.toString().split('').map((val) => +val).reduce((acc,cur) => acc+= cur) === 0
}