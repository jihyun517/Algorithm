const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

function solution(input) {
  return input % 2 === 0 ? "CY" : "SK";
}

console.log(solution(input));
