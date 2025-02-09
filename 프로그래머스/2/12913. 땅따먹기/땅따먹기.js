function getMaxGrade(x,y,tempLand){
    const newTempLand = [];
    for(let k = 0 ; k < 4 ; k++){
        if(y !== k) newTempLand.push(tempLand[k]);
    }
    return Math.max(...newTempLand);
}

function solution(land) {
    const TempArr = [];
    TempArr.push(land[0]);
    
    for(let i = 1 ; i < land.length ; i++){
        const temptempArr = [];
        for(let j = 0 ; j < 4; j++){
            const maxGrade = getMaxGrade(i,j,TempArr[i-1]);
            temptempArr.push(land[i][j] + maxGrade);
        }
        TempArr.push(temptempArr)
    }
    return Math.max(...TempArr[land.length-1])
}