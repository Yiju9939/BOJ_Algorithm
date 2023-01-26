let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let result = "";
while (input !== 0) {
  result = Math.abs(input % -2) + result;
  input = Math.ceil(input / -2);
}

if (result) console.log(result);
else console.log(0)
