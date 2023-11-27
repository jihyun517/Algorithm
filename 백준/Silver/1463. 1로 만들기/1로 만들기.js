const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const dp = Array.from({ length: input + 1 }, () => 0);

  dp.forEach((n, i) => {
    if (i >= 2) {
      dp[i] = dp[i - 1] + 1;
      if (i % 2 === 0) {
        dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
      }
      if (i % 3 === 0) {
        dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
      }
    }
  });

  return dp[input];
}

console.log(solution(input));
