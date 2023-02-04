const [N, a] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const A = a.split(' ').map(Number);

const DP = Array.from({ length: N }, () => 1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      DP[i] = Math.max(DP[i], DP[j] + 1);
    }
  }
}

console.log(Math.max(...DP));
