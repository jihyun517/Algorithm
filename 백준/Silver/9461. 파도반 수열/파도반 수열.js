const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0]; // 테스트 케이스의 개수 T

const N = input.slice(1).map((n) => +n);

function solution(T, N) {
  const dp = Array.from({ length: Math.max(...N) }, () => 0); // 주어진 N 중 가장 큰 수의 크기만큼 dp 배열 생성해야 함

  dp.splice(0, 6, 1, 1, 1, 2, 2, 3); // P(1) ~ P(6) 까지 1,1,1,2,2,3 저장

  for (i = 6; i < Math.max(...N); i++) {
    dp[i] = dp[i - 1] + dp[i - 5]; // 점화식
  }

  N.forEach((n) => {
    console.log(dp[n - 1]);
  });
}

solution(T, N);

