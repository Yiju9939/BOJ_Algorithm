const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const N = input.shift();
const K = input[0];

const arr = Array.from({length:N}, (_,i) => i+1);
const queue1 = [];

let pointer = 0
for (let i = 1; i <= N; i++) {
    for (let j = pointer; j < K - 1; j++) {
        arr.push(arr.shift());
    }
    queue1.push(arr.shift());
}

console.log(`<${queue1.join(', ')}>`)