const [_,n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

const getCombination = (arr, num) => {
    const result = [];
    if (num === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);

        const combination = getCombination(rest, num - 1);

        const attached = combination.map(v => [fixed, ...v])

        result.push(...attached);
    });
    return result;
}

const blackJack = getCombination(arr,3).map(v => v.reduce((acc, cur) => +acc+(+cur))).filter(v => n >= v);

console.log(Math.max(...blackJack))