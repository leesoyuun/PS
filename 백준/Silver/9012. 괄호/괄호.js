const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const start = input.slice(1, input.length);

start.map((val) => {
  let cnt = 0;
  for (let i = 0; i < val.length; i++) {
    if (cnt === -1){
        cnt -= 100;
    }
    else {
      val[i] === "(" ? (cnt += 1) : (cnt -= 1);
    }
  }
  cnt === 0 ? console.log("YES") : console.log("NO");
});