function solution(s) {
    const centerLen = Math.floor(s.length/2);
    return s.length % 2 === 0 ?s[centerLen-1] + s[centerLen] : s[centerLen];
}