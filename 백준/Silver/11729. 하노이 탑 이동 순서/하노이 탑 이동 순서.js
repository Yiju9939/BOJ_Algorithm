const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const answer = [];
let count = 0;

const hanoiTower = (n, from, other, to) => {
    if (n === 0) {
        return;
    }
    else {
        hanoiTower(n-1, from, to, other);
        answer.push([from, to])
        count++;
        hanoiTower(n-1, other, from, to);
    }
};

hanoiTower(input, 1,2,3);
console.log(count);
console.log(answer.map(v => v.join(' ')).join('\n'));