function solution(strArr) {
    let cnt = [];
    let result = {};
    for(let i of strArr){
        cnt.push(i.length);
    }
    cnt.forEach((x) => { 
      result[x] = (result[x] || 0)+1; 
    });
    let key_val = Object.values(result);
    return Math.max(...key_val);

}