const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const sortFn = (userA,userB) => {
    const age1 = +userA[0];
    const age2 = +userB[0]
    if (age1 - age2 > 0) return 1
    else if (age1 - age2 < 0) return -1
};

const input = arr.map(elem => {
    return elem.split(' ');
})

input.sort(sortFn);

let result = '';
input.forEach(elem => {
    result += elem + '\n'
})
console.log(result.replace(/,/g,' '));