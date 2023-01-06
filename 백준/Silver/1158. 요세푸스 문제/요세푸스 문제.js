const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const N = input.shift();
const K = input[0];

const arr = Array.from({length:N}, (_,i) => i+1);
const result = [];

for (let i = 1; i <= N; i++) {
    for (let j = 0; j < K - 1; j++) {
        arr.push(arr.shift());
    }
    result.push(arr.shift());
}

console.log(`<${result.join(', ')}>`)