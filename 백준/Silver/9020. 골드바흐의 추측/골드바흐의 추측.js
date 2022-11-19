const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const input = arr.map(Number);

const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (!(num%i)) return false
    }
    return true;
}

const primes = Array.from({length:10000}, (_, i)=>i+1).filter(isPrime);

input.forEach(elem => {
    const halfPrimes = primes.filter(prime => prime <= elem/2)
    
    const goldBach = halfPrimes.reduce((acc,cur) => {
        if (isPrime(elem - cur)) return acc,[elem-cur, cur];
        return acc;
    },[]).sort((a,b) => a-b);

    console.log(...goldBach);
})