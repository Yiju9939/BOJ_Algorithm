const [numA, numB] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const getGCD = (num1,num2) => num2 > 0 ? getGCD(num2, num1 % num2) : num1;
// num1 * num2 === GCD * LCM
const getLCM = (num1, num2) => (num1*num2) / getGCD(num1,num2);

console.log(getGCD(numA,numB))
console.log(getLCM(numA,numB))