let [N,B] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const ALPHABET_CODE = 10;
const UPPER_A_CODE = 65;
const alphabets = {};

for (let i = 0; i < 26; i++) {
  const alphabet = String.fromCharCode(UPPER_A_CODE + i);
  alphabets[alphabet] = ALPHABET_CODE + i;
}

let answer = 0;
let index = 0;
while (N.length !== 0) {
  const newN = alphabets[N.slice(N.length - 1)]
    ? +alphabets[N.slice(N.length - 1)]
    : +N.slice(N.length - 1);
  let d = B ** index;
  answer = d * newN + answer;
  N = N.slice(0, N.length - 1);
  index++;
}

console.log(answer);
