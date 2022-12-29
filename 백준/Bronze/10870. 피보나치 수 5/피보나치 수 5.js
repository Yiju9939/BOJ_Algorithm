const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const fibonacci = number => {
    if (number === 0) return 0;
    else if (number === 1) return 1;
    return fibonacci(number - 2) + fibonacci(number - 1);
};

console.log(fibonacci(input));