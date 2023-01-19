const input = require("fs").readFileSync("/dev/stdin").toString();

const a = 97;
const A = 65;

const alphabetHash = {};
const codeHash = {};

for (let i = 0; i < 26; i++) {
  alphabetHash[String.fromCharCode(a + i)] = a + i;
  alphabetHash[String.fromCharCode(A + i)] = A + i;
  codeHash[a + i] = String.fromCharCode(a + i);
  codeHash[A + i] = String.fromCharCode(A + i);
}

const except = /[0-9 ]/;
const res = [...input].map((word) => {
  if (except.test(word)) return word;
  if (alphabetHash[word] >= 65 && alphabetHash[word] <= 90) {
    let ROTCode = alphabetHash[word] + 13;
    if (ROTCode > 90) {
      ROTCode -= 26;
    }
    return codeHash[ROTCode];
  } else {
    let ROTCode = alphabetHash[word] + 13;
    if (ROTCode > 122) {
      ROTCode -= 26;
    }
    return codeHash[ROTCode];
  }
});

console.log(res.join(''));
