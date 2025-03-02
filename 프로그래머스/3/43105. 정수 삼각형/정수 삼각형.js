function solution(triangle) {
    let DP = [];
    DP.push(triangle[0][0]);
    
    for(let i = 1; i < triangle.length; i++){
        const tempDP = [];
        for(let j = 0; j < triangle[i].length; j++){
            if(j === 0) tempDP.push(DP[0] + triangle[i][0]);
            else if (j === triangle[i].length - 1)
                tempDP.push(DP[DP.length - 1] + triangle[i][triangle[i].length - 1]);
            else {
                tempDP.push(Math.max(DP[j] + triangle[i][j], DP[j-1] + triangle[i][j]));
            }
        }
        DP = tempDP;
    }
    return Math.max(...DP)
}