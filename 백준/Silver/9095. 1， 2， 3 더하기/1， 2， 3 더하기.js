const [T, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const input = arr.map(Number);

const DP = [];
DP[1] = 1;
DP[2] = 2;
DP[3] = 4;

input.forEach(num => {
    for (let i = 4; i <= num; i++) {
        DP[i] = DP[i-3] + DP[i-2] + DP[i-1]
    }
    console.log(DP[num])
})
