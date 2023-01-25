const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();
const arr = input.map(v => v.split(' ').map(Number));

const getGCD = (num1,num2) => num2 > 0 ? getGCD(num2, num1 % num2) : num1;
const getLCM = (num1,num2) => num1 * num2 / getGCD(num1, num2);

arr.forEach(elem => {
    console.log(getLCM(elem[0], elem[1]));
})