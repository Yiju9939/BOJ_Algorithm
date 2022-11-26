const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = arr.map(Number).sort((a,b) => a-b);
const sum = input.reduce((acc,cur) => acc+cur,0);

const avg = (sum / input.length).toFixed();
const middle = input[parseInt(input.length/2)];
let many = [];
const hash = {};
input.forEach(elem => {
    if (hash[elem]) {
        hash[elem] += 1;
    } else {
        hash[elem] = 1;
    }
});
const many_max = Math.max(...Object.values(hash));

for (const key in hash) {
    if (hash[key] === many_max) {
        many.push(key);
    }
}
const many_res = many.map(Number).sort((a,b) => a-b)[1] ?? many.map(Number).sort((a,b) => a-b)[0];
const range = Math.max(...input) - Math.min(...input);
console.log(avg+'' === '-0' ? 0 : avg)
console.log(middle)
console.log(many_res)
console.log(range)