const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let postfix = '';
const stack = [];

[...input].forEach((elem) => {
  if (elem >= 'A' && elem <= 'Z') {
    postfix += elem;
  } else if (elem === '*' || elem === '/') {
    while (
      (stack.length && stack[stack.length - 1] === '*') ||
      stack[stack.length - 1] === '/'
    )
      postfix += stack.pop();
    stack.push(elem);
  } else if (elem === '+' || elem === '-') {
    while (stack.length && stack[stack.length - 1] !== '(')
      postfix += stack.pop();
    stack.push(elem);
  } else if (elem === '(') {
    stack.push(elem);
  } else if (elem === ')') {
    while (stack.length && stack[stack.length - 1] !== '(')
      postfix += stack.pop();
    stack.pop();
  }
});

while (stack.length) postfix += stack.pop();

console.log(postfix);
