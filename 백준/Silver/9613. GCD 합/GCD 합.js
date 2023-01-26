const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = +input.shift();
const nums = input.map(num => num.split(' ').slice(1).sort((a,b) => a-b).map(Number));

const getGCD = (num1, num2) => num2 > 0 ? getGCD(num2, num1 % num2) : num1;

const getSum = nums => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            sum += getGCD(nums[i], nums[j])
        }
    }
    return sum;
}

const result = nums.map(getSum)

console.log(result.join('\n'))