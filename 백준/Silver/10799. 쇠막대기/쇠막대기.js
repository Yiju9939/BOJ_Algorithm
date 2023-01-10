const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('');

let sticks = [];
let answer = 0;

input.forEach((bracket,i,self) => {
    if (bracket === '(') {
        sticks.push(bracket);
    } else {
        if (self[i-1] === '(') {
            sticks.pop();
            answer += sticks.length; 
        } else {
            sticks.pop();
            answer++;
        }
    }
})
console.log(answer)