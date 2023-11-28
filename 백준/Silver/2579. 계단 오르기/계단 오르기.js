const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = +input[0]; // 계단 수
const score = input.slice(1).map((n) => +n); // 계단 별 점수

function solution(num, score) {
  const dp = Array.from({ length: num }, () => 0);

  dp[0] = score[0];
  dp[1] = score[0] + score[1];
  dp[2] = Math.max(score[0] + score[2], score[1] + score[2]);

  score.forEach((n, i) => {
    if (i >= 3) {
      dp[i] = Math.max(dp[i - 3] + score[i - 1] + score[i], dp[i - 2] + score[i]); // 점화식
    }
  });

  return dp[num - 1];
}

console.log(solution(num, score));
