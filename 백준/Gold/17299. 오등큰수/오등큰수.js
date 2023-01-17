const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

const N = +input.shift();
const arr = input.map(Number);

let answer = Array.from({length:N}, () => -1);
let hash = {}
arr.forEach(elem => {
    hash[elem] = hash[elem] ? hash[elem] + 1 : 1
})

let stack = [0]

for (let i = 1; i < N; i++) {
    while (stack.length && hash[arr[stack[stack.length-1]]] < hash[arr[i]]) {
        answer[stack.pop()] = arr[i]
    }
    stack.push(i);
}

console.log(answer.join(' '))