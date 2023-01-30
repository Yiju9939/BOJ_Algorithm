let [N,B] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

const ALPHABET_CODE = 10;
const UPPER_A_CODE = 65;
const alphabets = {};

for (let i = 0; i < 26; i++) {
  const alphabet = String.fromCharCode(UPPER_A_CODE + i);
  alphabets[ALPHABET_CODE + i] = alphabet;
}

let answer = '';

while (N !== 0) {
  const newN = N % B;
  answer = (alphabets[newN] ? alphabets[newN] : newN + '') + answer;
  N = Math.floor(N / B);
}

console.log(answer);
