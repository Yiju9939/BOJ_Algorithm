const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (S) => {
    let count = 0;
    const recursion = (s,l, r) => {
        if (l >= r) {
            count ++;
            return 1;
        }
        else if (s[l] !== s[r]) {
            count ++;
            return 0;
        }
        else {
            count ++;
            return recursion(s, l+1, r-1);
        };
    }

    const isPalindrome = s => recursion(s, 0, s.length-1);
    const result = `${isPalindrome(S)} ${count}`;
    return result;
}
arr.forEach((_,i) => console.log(solution(arr[i])));