const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

function solution(input) {
  const dp = Array.from({ length: input }, () => 0);

  dp[0] = 1;
  dp[1] = 1;

  dp.forEach((n, i) => {
    if (i >= 2) {
      dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]); //점화식
    }
  });

  console.log(String(dp[input - 1]));
}

solution(+input);
