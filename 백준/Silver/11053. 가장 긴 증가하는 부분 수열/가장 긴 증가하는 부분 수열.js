const fs = require("fs");
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ").map(Number);

function solution(n, inputArr) {
  const dp = Array.from({ length: n }, () => 0);

  dp[0] = 1;

  dp.forEach((n, i) => {
    if (i >= 1) {
      //const prevArr = inputArr.toSpliced(i); // i인엑스 이전까지의 부분배열
      const prevArr = inputArr.slice(0, i);
      // 부분배열에서 현재 순회중인 i인덱스의 값보다 작은 값들의 DP 중 가장 큰 값을 구하는 과정
      const tempDp = [];
      prevArr.forEach((n, j) => {
        if (n < inputArr[i]) tempDp.push(dp[j]);
      });

      if (tempDp.length !== 0) dp[i] = Math.max(...tempDp) + 1;
      else dp[i] = 1;
    }
  });

  console.log(Math.max(...dp));
}

solution(n, inputArr);
