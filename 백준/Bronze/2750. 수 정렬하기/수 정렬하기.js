const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

console.log(arr.slice(1).sort((a,b) => a-b).join('\n'))