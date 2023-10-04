function solution(arr) {
    let indexs = arr.indexOf(2);
    let lastIndex = arr.lastIndexOf(2)+1;
    return arr.includes(2) ? arr.slice(indexs,lastIndex) : [-1];
}