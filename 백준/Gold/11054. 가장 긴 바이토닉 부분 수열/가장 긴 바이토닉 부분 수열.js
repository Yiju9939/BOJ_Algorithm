const [N,input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const A = input.split(' ').map(Number);

function LBS(arr) {
    const N = arr.length;
    const DP_inc = Array.from({length:N},() => 1);
    const DP_dec = Array.from({length:N},() => 1);

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < i; j++) {
            if (A[j] < A[i]) {
                DP_inc[i] = Math.max(DP_inc[i],DP_inc[j]+1)
            }
        }
    }

    for (let i = N - 1; i >= 0; i--) {
        for (let j = i + 1; j < N; j++) {
            if (A[i] > A[j]) {
                DP_dec[i] = Math.max(DP_dec[i], DP_dec[j]+1)
            }
        }
    }

    const DP = [];
    for (let i = 0; i < N; i++){
        DP.push(DP_inc[i]+DP_dec[i] - 1)
    }

    return Math.max(...DP)
    
}

console.log(LBS(A))