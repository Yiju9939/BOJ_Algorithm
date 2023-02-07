const [N, K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const DP = Array.from({ length: N + 1 }, (_, i) => {
  if (i === 1) return Array.from({ length: K + 1 }, (_, i) => i + 1);
  return new Array(K + 1).fill(1);
});

for (let i = 2; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    DP[i][j] = (DP[i - 1][j] + DP[i][j - 1]) % 1000000000;
  }
}

console.log(DP[N][K-1]);
