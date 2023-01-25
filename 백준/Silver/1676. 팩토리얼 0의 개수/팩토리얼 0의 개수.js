let num = +require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = 0;
while (num >= 5) {
    answer += parseInt(num / 5);
    num /= 5;
}
console.log(answer)