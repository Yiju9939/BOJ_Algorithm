const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('');

let startCode = 97;
const alphabetHash = {};

for (let i = 0; i < 26; i++) {
  const alphabet = String.fromCharCode(startCode + i);
  alphabetHash[alphabet] = 0;
}

input.forEach(elem => {
    alphabetHash[elem] += 1
})

console.log(Object.values(alphabetHash).join(' '))