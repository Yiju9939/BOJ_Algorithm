const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const T = +input.shift();
function sticker(n, arr) {
  let DP = Array.from({length:2}, () => Array(n).fill(0));
  
  DP[0][1] = arr[0][0];
  DP[1][1] = arr[1][0];
  // DP[0][2] = arr[1][0] + arr[0][1];
  // DP[1][2] = arr[0][0] + arr[1][1];
  for (let i = 2; i <= n; i++) {
    DP[0][i] = Math.max(DP[1][i - 1], DP[1][i - 2]) + +arr[0][i - 1];
    DP[1][i] = Math.max(DP[0][i - 1], DP[0][i - 2]) + +arr[1][i - 1];
  }
  return Math.max(...DP.flat(1));
}

let answer = [];
for (let i = 0; i < T; i++) {
  let k = input.splice(0,1);
  let arr = [];
  arr.push(input.splice(0,1).join('').split(' ').map(Number));
  arr.push(input.splice(0,1).join('').split(' ').map(Number));
  answer.push(sticker(k, arr));
}

console.log(answer.join('\n'))