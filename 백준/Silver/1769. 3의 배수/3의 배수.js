const fs = require("fs");
let num = fs.readFileSync("dev/stdin");

function solution(num) {
  let count = 0;

  while (num > 9) {
    count++;
    num = String(num)
      .split("")
      .reduce((acc, cur) => acc + cur * 1, 0);
  }

  console.log(count);
  console.log(num % 3 === 0 ? "YES" : "NO");
}

solution(num);
