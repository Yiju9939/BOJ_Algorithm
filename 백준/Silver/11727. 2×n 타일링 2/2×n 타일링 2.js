const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const DP = [];
DP[1] = 1;
DP[2] = 3;

for (let i = 3; i <= input; i++) {
    DP[i] = (DP[i-1]+2*DP[i-2]) % 10007
}

console.log(DP[input])