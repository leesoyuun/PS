function solution(n, m) {
    let minN = [];
    let minM = [];
    let min = [];
    let max = 0;
    for(let i = 1 ; i <= n ; i++){
        if(n%i == 0) minN.push(i);
    }
    for(let i = 1 ; i <= m ; i++){
        if(m%i == 0) minM.push(i)
    }
    for(let i = 0 ; i < minN.length ; i++){
        for(let j = 0 ; j < minM.length; j++){
            if(minN[i] == minM[j]) min.push(minN[i])
        }
    }
    let bigNum = n>m?n:m;
    let bigN = [];
    let bigM = [];
    let i = 1;
    while(i<=bigNum){
        bigN.push(i*n);
        bigM.push(i*m);
        i++;
    }
    let big = [];
    for(let i = 0 ; i < bigN.length ; i++){
        for(let j = 0 ; j < bigM.length ; j++){
            if(bigN[i] == bigM[j]) big.push(bigN[i])
        }
    }
    
    return [min.pop(),big[0]];
}