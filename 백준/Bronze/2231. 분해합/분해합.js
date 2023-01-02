const N = +require("fs").readFileSync("/dev/stdin").toString().trim();

const d = (n) => {
  const str = n + '';
  const arr = str.split('').map((v) => +v);

  return n + arr.reduce((acc, cur) => acc + cur, 0);
};

const result = [];

for (let i = 1; i <= N; i++) {
  if (d(i) === N) {
    result.push(i);
  }
}

console.log(result.length ? Math.min(...result) : 0);
