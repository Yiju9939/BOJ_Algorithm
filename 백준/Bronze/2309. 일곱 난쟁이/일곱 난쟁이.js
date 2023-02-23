const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

function getSevenSmalls(arr) {
  let answer = [...arr];
  let sum = arr.reduce((acc, cur) => acc + cur);
  let diff = sum - 100;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === diff) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        return answer.sort((a, b) => a - b).join("\n");
      }
    }
  }
}

console.log(getSevenSmalls(input));
