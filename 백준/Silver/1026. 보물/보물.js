const fs = require("fs");
const [n, input_A, input_B] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const a = input_A.split(" ").sort((a, b) => a - b);
const b = input_B.split(" ").sort((a, b) => b - a);

function solution(a, b) {
  let multiply = 0;
  a.forEach((num, index) => {
    multiply += num * b[index];
  });
  return multiply;
}

console.log(solution(a, b));
