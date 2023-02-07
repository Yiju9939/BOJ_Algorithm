const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const DP = [0,1,2,3];

for (let i = 4; i <= input; i++) {
  DP[i] = i;
  for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
    const sqrt = Math.sqrt(i);
    if (sqrt === parseInt(sqrt)) {
      DP[i] = 1;
    } else {
      DP[i] = Math.min(DP[i], DP[i - j ** 2] + 1);
    }
  }
}
console.log(DP[input]);
