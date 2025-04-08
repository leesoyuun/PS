function solution(a, b) {
    const numberList = [];
    const MaxNum = Math.max(a,b);
    const MinNum = Math.min(a,b);
    for(let i = MinNum ; i <= MaxNum ; i++){
        numberList.push(i);
    }
    return numberList.reduce((acc,cur) => acc+=cur);
}