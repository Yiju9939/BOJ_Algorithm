const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('');
const N = input.length;

const res = [];
for (let i = 0; i < N; i++) {
  res.push([...input]);
  input.shift();
}

console.log(res.sort().map(elem => elem.join('')).join('\n'));
