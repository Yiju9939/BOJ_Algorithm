const data = +require("fs").readFileSync("/dev/stdin").toString().trim();

function solution (n) {
    let input = n;
    let theEndNum = 665;

    while (input > 0) {
        theEndNum++;

        if (theEndNum.toString().includes('666')) {
            input--;
        }
    }
    return theEndNum;
}

console.log(solution(data))