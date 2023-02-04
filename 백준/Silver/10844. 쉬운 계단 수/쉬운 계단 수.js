const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

// 모든 자리의 차이가 1인 수를 계단수라고 한다.

// ex) N = 1이면, 길이가 N인 계단 수가 총 몇개인지 구해야한다. 길이가 N일 때, 0~9로 끝나는 수를 구하면 각 자리수의 차이가 1인 것의 갯수를 알아낼 수 있다.

const DP = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

while (DP.length !== input + 1) {
  DP.push([...Array(10)]);
}

for (let i = 2; i <= input; i++) {
  for (let j = 0; j <= 9; j++) {
    DP[i][j] = ((DP[i - 1][j - 1] || 0) + (DP[i - 1][j + 1] || 0)) % 1000000000;
  }
}

console.log(DP[input].reduce((acc, cur) => (acc + cur) % 1000000000, 0));
