const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const N = +input.shift();
const arr = input.map(Number)

const res = Array.from({ length: N }, () => -1);
const stack = [];

for (let i = 0; i < N; i++) {
  while (stack.length > 0 && stack[stack.length - 1][0] < arr[i]) {
    const [value, idx] = stack.pop();
    res[idx] = arr[i];
  }
  stack.push([arr[i], i]);
}

console.log(res.join(' '));
