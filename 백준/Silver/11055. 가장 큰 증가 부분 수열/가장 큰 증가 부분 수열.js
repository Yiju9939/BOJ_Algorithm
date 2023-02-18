const [N, input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const A = input.split(' ').map(Number);

function maxIncreasingSubArray(N, A) {
  const DP = [...A];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (A[i] > A[j] && DP[i] < DP[j] + A[i]) {
        DP[i] = DP[j] + A[i];
      }
    }
  }
  return Math.max(...DP);
}

console.log(maxIncreasingSubArray(N, A));
