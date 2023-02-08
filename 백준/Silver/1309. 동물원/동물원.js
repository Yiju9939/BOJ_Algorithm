const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const DP = [0,3,7,17];

for (let i = 4; i <= input; i++) {
    DP[i] = (2*DP[i-1]+DP[i-2])%9901;
}

console.log(DP[input])