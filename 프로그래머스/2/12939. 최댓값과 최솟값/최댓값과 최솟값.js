function solution(s) {
    let s_len = s.split(' ');
    return [Math.min(...s_len),Math.max(...s_len)].join(' ');
}