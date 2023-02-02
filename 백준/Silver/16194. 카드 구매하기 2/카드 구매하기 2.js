const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const N = +input.shift()
const prices = input.map(Number);

const DP = [];
DP[0] = 0;
DP[1] = prices[0];

for (let i = 2; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    DP[i] = Math.min(DP[i] ? DP[i] : DP[i - j] + prices[j - 1] + 1, DP[i - j] + prices[j - 1]);
  }
}

console.log(DP[N]);