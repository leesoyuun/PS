function solution(N, stages) {
    let fail_rate = [];
    let each_num = [];
    let stage_len = stages.length;
    for(let i = 1 ; i <= N ; i++){
        each_num = stages.filter(x=>x===i);
        fail_rate.push([i,each_num.length / stage_len]);
        stage_len -= each_num.length;
    }
    return fail_rate.sort((a,b)=>b[1]-a[1]).map(x=>x[0]);
}