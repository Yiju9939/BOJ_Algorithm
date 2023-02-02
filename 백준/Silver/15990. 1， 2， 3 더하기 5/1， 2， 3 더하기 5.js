const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input.shift();
const nums = input.map(Number);
const N = Math.max(...nums);

// DP[n][k] 는 n을 만들 때 끝의 자리수가 k로 끝나는 경우의 수를 나타낸다. (k = 1,2,3)
const DP = Array.from({length:N+1}, () => new Array(4).fill(0));

DP[1][1] = 1;
DP[1][2] = 0;
DP[1][3] = 0;
DP[2][1] = 0;
DP[2][2] = 1;
DP[2][3] = 0;
DP[3][1] = 1;
DP[3][2] = 1;
DP[3][3] = 1;

for (let i = 4; i <= N; i++) {
    for (let j = 1; j <= 3; j++) {    
        for (let k = 1; k <= 3; k++) {
            if (j === k) continue;
            DP[i][j] += DP[i-j][k] % 1000000009;
        }        
    }
}

nums.forEach(num => {
    console.log(DP[num].reduce((acc,cur) => (acc+cur)%1000000009,0))
})