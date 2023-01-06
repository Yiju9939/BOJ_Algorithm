const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const Arr = arr.map(v => v.split(' '));

class Queue {
    constructor(){
        this.result = [];
    }

    push(num) {
        this.result.push(num)
    }
    pop(){
        if (this.result.length === 0) {
            return -1;
        }
        return this.result.shift();
    }
    size() {
        return this.result.length;
    }
    empty() {
        if (this.result.length === 0) {
            return 1;
        }
        return 0;
    }
    front() {
        if (this.result.length === 0) {
            return -1;
        }
        return this.result[0];
    }
    back() {
        if (this.result.length === 0) {
            return -1
        }
        return this.result[this.result.length-1];
    }
}

const queue = new Queue();
const answer = [];
Arr.forEach((elem) => {
  if (elem[0] === 'push') {
    queue.push(elem[1]);
  } else if (elem[0] === 'pop') {
    answer.push(queue.pop());
  } else if (elem[0] === 'size') {
    answer.push(queue.size());
  } else if (elem[0] === 'empty') {
    answer.push(queue.empty());
  } else if (elem[0] === 'front') {
    answer.push(queue.front());
  } else if (elem[0] === 'back') {
    answer.push(queue.back());
  }
});

console.log(answer.join('\n'));
