const data = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function boardCount (arr,col,row,pattern,BW) {
    let count = 0;
    for (let y = 0; y < 8; y ++) {
        for (let x = 0; x < 8; x++) {
            if (arr[col + y][row + x] !== BW[(y + pattern) % 2][x]) {
                count ++;
            }
        }
    }
    return count;
}

function solution (input) {
    let [size, ...arr] = input;
    const [M, N] = size.split(' ').map(Number);
    arr = arr.map(str => str.trim('\n'))
    
    const answer = [];
    const BW = ['WBWBWBWB', 'BWBWBWBW'];

    for (let i = 0; i <= M - 8; i++) {
        for (let j = 0; j <= N - 8; j++) {
            for (let k = 0; k < 2; k++) {
                answer.push(boardCount(arr,i,j,k,BW))
            }
        }
    }
    return Math.min(...answer)
}

console.log(solution(data))