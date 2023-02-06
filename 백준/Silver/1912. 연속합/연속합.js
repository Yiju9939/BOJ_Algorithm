const [n,input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const A = input.split(' ').map(Number);

// let DP = Array.from({ length: n }, () => 0);
// if (A[0] < 0) {
  let DP = Array.from({ length: n }, () => A[0]);
// }

for (let i = 1; i < n; i++) {
  DP[i] = Math.max(DP[i-1]+A[i], A[i])
}

console.log(Math.max(...DP));
