const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

let stars = '';
const printStar = (i,j) => {
    if (i % 3 === 1 && j % 3 === 1) {
        stars += ' ';
    } else {
        if (Math.floor(i/3) === 0 && Math.floor(j/3) === 0) {
            stars += '*';
        } else {
            printStar(Math.floor(i/3), Math.floor(j/3));
        }
    }
}

for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
        printStar(i,j);
    }
    if (i !== input - 1) {
        stars += '\n';
    };
}
console.log(stars);