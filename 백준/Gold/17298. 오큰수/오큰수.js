const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const N = +input.shift();
const arr = input.map(Number)

let answer = Array.from({length:N}, () => -1);
let stack = [0];
for(let i=1; i<N; i++) {
    while(arr[stack[stack.length-1]] < arr[i] && stack.length) {
        answer[stack.pop()] = arr[i];
    }
    stack.push(i);
}

console.log(answer.join(" "));