const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const N = input.shift();

function solution(n, arr) {
    if (n < 4) return arr[n-1];

    for (let i = 4; i <= n; i++) {
        DP[i] = (DP[i-3] + DP[i-2] + DP[i-1])%1000000009
    }
    return arr
}

const DP = [0,1,2,4];
solution(Math.max(...input), DP)

input.forEach(num => {
    console.log(DP[num])
})