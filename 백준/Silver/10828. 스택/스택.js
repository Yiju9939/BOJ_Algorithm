const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const input = arr.map(v => v.split(' '));

class Stack {
    constructor() {
        this.result = [];
    }

    push(num) {
        this.result.push(num);
    }

    pop() {
        if (this.result.length === 0) return -1;
        return this.result.pop()
    }

    size() {
        return this.result.length;
    }

    empty() {
        if (this.result.length === 0) return 1;
        return 0;
    }

    top() {
        if (this.result.length === 0) return -1;
        return this.result[this.result.length-1];
    }
}

const stack = new Stack();
let result = ''
input.forEach(action => {
    if (action[0] === 'push') {
        stack.push(+action[1])
    } else if (action[0] === 'top') {
        result += stack.top()+'\n'
    } else if (action[0] === 'size') {
        result += stack.size()+'\n'
    } else if (action[0] === 'pop') {
        result += stack.pop()+'\n'
    } else if (action[0] === 'empty') {
        result += stack.empty()+'\n'
    }
});

console.log(result)