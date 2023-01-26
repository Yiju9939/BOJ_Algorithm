const [first, second] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, S] = first.split(' ').map(Number);
const bros = second.split(' ').map(Number);
bros.push(S);

const getGCD = (num1, num2) => num2 > 0 ? getGCD(num2, num1 % num2) : num1;
const locations = bros.sort((a,b) => a-b);
const distances = locations.reduce((acc,cur,i) => {
    const distance = Math.abs(locations[i+1] - cur);
    if (!distance) return acc;
    acc.push(distance);
    return acc
},[])

const maxD = (() => {
    let num = distances[0]

    for (let i = 1; i < distances.length; i++) {
        num = getGCD(num, distances[i])
    }

    return num;
})();

console.log(maxD)
