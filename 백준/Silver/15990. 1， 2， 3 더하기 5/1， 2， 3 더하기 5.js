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

// DP[4][1] 은 DP[3]을 만들 때, 끝자리가 2,3인 경우의 수를 더해주면 된다. DP[4][1] = DP[3][2]+DP[3][3]
// DP[4][2]는 맨 마지막 수가 2이므로 1+1+2, 2+2 가 가능하다. 그런데 1+1은 DP[2][1]를 의미하고 2는 DP[2][2]를 의미한다.
// 하지만 DP[4][2]는 4-2의 경우의 수 중 마지막으로 끝나는 수가 1,3 만 와야하므로 DP[4][2] = DP[2][1] + DP[2][3]
let result = ''

for (let i = 4; i <= N; i++) {
    for (let j = 1; j <= 3; j++) {    
        for (let k = 1; k <= 3; k++) {
            if (i - (i - j) === k) continue;
            DP[i][j] += DP[i-j][k] % 1000000009;
        }        
    }
}

nums.forEach(num => {
    console.log(DP[num].reduce((acc,cur) => (acc+cur)%1000000009,0))
})