const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

let target = input;
let divider = 2;
while (target !== 1) {
    if (target % divider === 0) {
        console.log(divider);
        target /= divider;
    } else {
        divider ++;
    }
}