function solution(n, lost, reserve) {
// 체육복을 가져왔는데 도난 당한 학생은 빌려줄 수없다. => 즉 이학생은 reserve에서 제하고 시작
    let realReserve = reserve.sort((a,b)=>a-b).filter(x=>!lost.includes(x));
    let realLost = lost.sort((a,b)=>a-b).filter(x=>!reserve.includes(x));
    
    let noReserve = 0;
    
    realLost.map((x,i)=>{
        if(realReserve.includes(x-1)){
            realReserve = realReserve.filter((el)=>el !== x-1);
            console.log(realReserve)
        }else if(realReserve.includes(x+1)){
            realReserve = realReserve.filter((el)=>el !== x+1);
        }else{
            noReserve++;
        }
    });
    
    return n-noReserve;
}