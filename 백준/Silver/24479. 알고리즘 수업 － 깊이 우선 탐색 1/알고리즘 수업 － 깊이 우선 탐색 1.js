let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N,M,R] = input.shift().split(' ').map(Number);

const graph = [...Array(N+1)].map(e=>[]);
const visited = [...Array(+N+1)].map(e=>false);

for(let i = 0 ; i <M ; i++){
  let [from,to] = input[i].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
graph.map(v=> v.sort((a,b)=>a-b));
let answer = new Array(N).fill(0);
let cnt = 1;
const dfs = (num) => {
  visited[num] = true;
  answer[num -1] = cnt++;
  for(let i of graph[num]){
    if(visited[i] === false) dfs(i)
  }
}
dfs(R);
console.log(answer.join('\n'));