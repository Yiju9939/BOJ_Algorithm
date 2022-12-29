const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

const input = arr.map(v => Number(v))
const sorted = [...new Set([...input].sort((a,b) => a-b))];

const obj = {};

sorted.forEach((elem, i) => obj[elem] = i);

const res = input.map(elem => obj[elem]).join(' ');

console.log(res);