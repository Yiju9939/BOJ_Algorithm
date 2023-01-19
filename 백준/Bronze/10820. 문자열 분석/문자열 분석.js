const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');

const t = input.filter(str => str.length < 1)

if (t.length) {
  input.splice(input.indexOf(t[0]), 1)
}

const regs = [/[a-z]/g, /[A-Z]/g, /[0-9]/g, / /g];
const results = input.map((stns) => regs.map((reg) => (stns.match(reg) ? stns.match(reg).length : 0)));
console.log(results.map((res) => res.join(' ')).join('\n'));
