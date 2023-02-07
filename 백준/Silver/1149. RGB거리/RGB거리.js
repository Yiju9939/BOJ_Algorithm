const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const input = arr.map(houseCosts => houseCosts.split(' ').map(Number));

function solution(n, rgb) {
    const DP = Array.from({length:n+1}, () => new Array(3).fill(0));
    DP[1] = rgb[0];
    for (let i = 2; i <= n; i++) {
        DP[i][0] = Math.min(DP[i-1][1], DP[i-1][2])+rgb[i-1][0]
        DP[i][1] = Math.min(DP[i-1][0], DP[i-1][2])+rgb[i-1][1]
        DP[i][2] = Math.min(DP[i-1][1], DP[i-1][0])+rgb[i-1][2]
    }
    console.log(Math.min(...DP[n]))
}

solution(+N, input);