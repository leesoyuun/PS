let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const comNum = +input.shift();
const comTwin = +input.shift();

const graph = [...Array(comNum+1)].map(e=>[]);
const visited = [...Array(comNum+1)].map(e=>false)
visited[1] = true;

for(let i = 0 ; i <comTwin ; i++){
  let [from,to] = input[i].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
let cnt = 0;
const dfs = (num) => {
  for(let i of graph[num]){
    if(visited[i] == false){
      visited[i] = true;
      cnt++;
      dfs(i);
    }
  }
}
dfs(1);
console.log(cnt);