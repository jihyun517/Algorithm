const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input_A = input[0].split(" ");
const input_B = input.slice(1).map((num) => num.split(" "));

function solution(input_A, input_B) {
  const set_num = Math.floor(input_A[0] / 6);
  const single_num = input_A[0] % 6;
  const set_price = input_B.map((price) => price[0]).sort((a, b) => a - b)[0]; // set 가격 중 최저가
  const single_price = input_B.map((price) => price[1]).sort((a, b) => a - b)[0]; // single 가격 중 최저가

  const threshold = Math.floor(set_price / single_price); // single_price 가격으로 구입하는게 이득인 single_num 개수의 임계값 (임계값을 초과하는 수량부터는 set_price 로 구입하는게 이득)

  if (set_price < single_price * 6) {
    if (single_num <= threshold) {
      return set_price * set_num + single_price * single_num;
    }
    return set_price * (set_num + 1);
  }

  return single_price * input_A[0];
}

console.log(solution(input_A, input_B));
