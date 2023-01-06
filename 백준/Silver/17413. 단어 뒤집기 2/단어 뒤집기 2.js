const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const arr = [...input]
const result = [];
let stack = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '<') {
    if (stack.length !== 0) {
      result.push(...stack.reverse());
      stack = [];
    }
    while (arr[i] !== '>') {
      result.push(arr[i]);
      i++;
    }
    result.push(arr[i]);
  } else {
    if (arr[i] === ' ') {
      result.push(...stack.reverse());
      result.push(arr[i]);
      stack = [];
    } else {
      stack.push(arr[i]);
    }
  }
}
if (stack.length !== 0) {
  result.push(...stack.reverse());
}

console.log(result.join(''));
