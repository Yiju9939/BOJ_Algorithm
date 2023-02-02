const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const N = +input.shift()
const prices = input.map(Number);

const DP = new Array(N+1).fill(0)

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    DP[i] = Math.max(DP[i], DP[i - j] + prices[j - 1]);
  }
}

console.log(DP[N]);
