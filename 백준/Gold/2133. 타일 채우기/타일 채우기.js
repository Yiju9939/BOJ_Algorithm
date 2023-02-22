const N = +require("fs").readFileSync("/dev/stdin").toString().trim();

function fillTile(n) {
    if (n%2 !== 0) return 0;
    
    const DP = [0,0,3]

    for (let i = 3; i <= n; i++) {
        if (i % 2 !== 0) {
            DP[i] = 0;
            continue;
        }
        DP[i] = DP[i-2]*3+2
        let k = i - 2
        while (k >= 2) {
            DP[i] += DP[k-2] * 2
            k -= 2;
        }
    }
    return DP[n]
}

console.log(fillTile(N))