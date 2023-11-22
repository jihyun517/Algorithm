const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  let sum = 0;
  let n = 0;

  while (sum <= input) {
    n++;
    sum += n;
  }
  return n - 1;
}

console.log(solution(input));
