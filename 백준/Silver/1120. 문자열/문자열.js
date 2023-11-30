const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const A = input[0].split("");
const B = input[1].split("");

function solution(A, B) {
  const diff = B.length - A.length;
  const result = [];
  for (let i = 0; i <= diff; i++) {
    let count = 0;
    A.forEach((a, index) => {
      a !== B[index + i] ? count++ : null;
    });
    result.push(count);
  }
  console.log(Math.min(...result));
}

solution(A, B);
