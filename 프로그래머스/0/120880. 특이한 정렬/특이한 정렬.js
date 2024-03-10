function solution(numlist, n) {
    return numlist.sort((a,b)=>{
        let [As,Bs] = [Math.abs(a-n),Math.abs(b-n)]
        if(As === Bs) return b-a;
        return As-Bs;
    })
}