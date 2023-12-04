function solution(a){
    let answer = '';
    for(let i of a){
        // console.log(i)
        if(i != '(' && i != ')') answer+= i;
    }
    return answer;
}
let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
