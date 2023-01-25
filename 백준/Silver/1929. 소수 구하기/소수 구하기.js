const [A,B] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const isPrimeNum = (num) => {
    if (num === 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = A; i <= B; i++) {
    if (isPrimeNum(i)) console.log(i);
}