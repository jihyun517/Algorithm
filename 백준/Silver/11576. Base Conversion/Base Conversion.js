const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const a = input[0].split(" ")[0];
const b = input[0].split(" ")[1];
const numArray = input[2].split(" ").reverse();

const num = numArray.reduce((acc, cur, idx) => acc + cur * a ** idx, 0);

function solution(num, b) {
  let num_array = [];
  let quotient = num;
  let remainder = 0;

  do {
    remainder = quotient % b;
    quotient = Math.floor(quotient / b);

    num_array.unshift(remainder);
  } while (quotient >= b);

  num_array.unshift(quotient);

  console.log(num_array.join(" "));
}

solution(num, b);
