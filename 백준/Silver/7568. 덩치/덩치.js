const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 1. 각 사람들을 배열 자료구조로 두었다.
const people = arr.map(info => info.split(' ')).map(v => v.map(a => Number(a)));

// 2. 자신 보다 덩치 큰 사람의 수를 구하기 위해 반복문으로 비교를 해줘야한다.
const rank = [];

for (let i = 0; i < people.length; i++) {
    let count = 0;
    for (let j = 0; j < people.length; j++) {
        if (i !== j) {
            if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
                count++;
            }
        }
    }
    rank.push(count+1);
}

console.log(...rank)