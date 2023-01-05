const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const str = [...arr.shift()];
const N = +arr.shift();
const command = arr.map((v) => v.split(' '));
const stack = [];

for (let i = 0; i < N; i++) {
  if (command[i][0] === 'P') {
    str.push(command[i][1]);
  } else if (command[i][0] === 'L') {
    if (str.length !== 0) {
      stack.push(str.pop());
    }
  } else if (command[i][0] === 'D') {
    if (stack.length !== 0) {
      str.push(stack.pop());
    }
  } else if (command[i][0] === 'B') {
    if (str.length !== 0) {
      str.pop();
    }
  }
}

console.log([...str, ...stack.reverse()].join(''));

