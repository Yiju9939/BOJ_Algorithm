const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

[...input].forEach((elem,i) => {
    if (alphabet.includes(elem)) {
        alphabet[alphabet.indexOf(elem)] = i
    }
})
const res = alphabet.map(v => {
    if (typeof v === 'string') {
        return -1;
    } else return v;
});

console.log(res.join(' '))