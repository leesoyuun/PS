function solution(dots) {
    dots = dots.sort();
    let x = Math.abs(dots[0][0] - dots[3][0])
    let y = Math.abs(dots[1][1] - dots[0][1])
    
    return x*y
}