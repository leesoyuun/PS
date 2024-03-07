let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let Nnum = input[1].split(' ').sort((a,b)=>a-b).map(val => +val);
let Mnum = input[3].split(' ').map(val => +val);

const binaryArray = (array,n) => {
  let start = 0;
  let end = array.length -1;
  while(start <= end){
    let mid = Math.floor((start + end) /2);
    if(array[mid] > n) end = mid-1;
    else if(array[mid] < n) start = mid+1;
    else return 1;
  }
  return 0;
}

const answer = Mnum.map(val=> {
  return binaryArray(Nnum,val)
})

console.log(answer.join(' '));



