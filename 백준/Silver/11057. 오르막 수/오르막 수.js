const length = +require("fs").readFileSync("/dev/stdin").toString().trim();

function Sum(arr) {
    return arr.reduce((acc,cur) => acc+cur, 0);
}

const DP = Array.from({length:length+1}, (_,i) => {
    if (i === 1) return new Array(10).fill(1);
    if (i === 2) return Array.from({length:10}, (_,i) => 10-i)
    return Array(10).fill(0);
});

for (let i = 3; i <= length; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = j; k <= 9; k++) {
      DP[i][j] += DP[i - 1][k]%10007;
    }
  }
}

console.log(Sum(DP[length])%10007);
