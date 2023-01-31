const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

// 2부터 N까지 주어진 연산으로 만들 수 있는 최소한의 연산 횟수를 담은 배열 DP
// ex) 2를 1로 만들 최소한의 연산 횟수는 1회이므로 DP[2] = 1 (단, DP[0], DP[1] = 0)

const DP = [];
DP[1] = 0;

for (let i = 2; i <= input; i++) {
  const availables = [DP[i - 1]];
  if (i % 2 === 0) {
    availables.push(DP[Math.floor(i / 2)]);
  } 
  if (i % 3 === 0) {
    availables.push(DP[Math.floor(i / 3)]);
  }

  DP[i] = 1 + Math.min(...availables);
}

console.log(DP[input]);
