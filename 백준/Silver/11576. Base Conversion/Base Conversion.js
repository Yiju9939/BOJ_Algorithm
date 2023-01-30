const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [A, B] = input.shift().split(' ');
const m = +input.shift();
const arr = input[0].split(' ').map(Number)

let ten = 0;
const reversed = arr.reverse();
for (let i = 0; i < m; i++) {
    ten += reversed[i] * Math.pow(A,i)
}

const answer = [];
while (ten !== 0) {
  const rest = ten % B;
  answer.unshift(rest);
  ten = Math.floor(ten / B);
}

console.log(answer.join(' '));
