function INIT_DRIVE(size,road) {
    let COUNTRY_ARRAY = Array.from({ length: size+1 }, () => []);
    let COUNTRY_DISTANCE = Array.from({ length: size+1 }, () => []);
    
    road.forEach((val) => {
        let [a,b,c] = val;
        COUNTRY_ARRAY[a].push({to:b,cost:c});
        COUNTRY_ARRAY[b].push({to:a,cost:c});
    });
    
    return COUNTRY_ARRAY;
}

function INIT_MAP(N) {
    let COUNTRY_MAP = new Map();
    for (let i = 1; i <= N; i++) {
        COUNTRY_MAP.set(i, Infinity);
    }
    return COUNTRY_MAP;
}

        
function solution(N, road, K) {
    const initArray = INIT_DRIVE(N,road);
    const initMap = INIT_MAP(N);
    
    const COUNTRY_QUEUE = [{ to: 1, cost: 0 }];
    initMap.set(1, 0);
    
    while(COUNTRY_QUEUE.length > 0){
        const current = COUNTRY_QUEUE.shift();
        const {to:currentTo,cost:currentCost} = current;
        
        for (const neighbor of initArray[currentTo]){
            const {to,cost:nextCost} = neighbor;
            const tempCost = currentCost + nextCost
            
            if(tempCost < initMap.get(to)){
                initMap.set(to,tempCost);
                COUNTRY_QUEUE.push({to,cost:tempCost})
            }
        }
        
    }
    return Array.from(initMap).filter((val) => val[1] <= K).length;
}