const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [tcNum, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let tc = 0;
for (let i = 0; i < tcNum; i++) {
  let num = parseInt(input[tc]);
  let ranks = [];
  for (let j = 1; j < num + 1; j++) {
    ranks.push(input[tc + j].split(" ").map(Number));
  }
  tc = tc + num + 1;
  solution(ranks);
}

function solution(ranks) {
  ranks.sort((a, b) => a[0] - b[0]); // 오름차순 정렬
  let pass = 1;
  let pass_rank = ranks[0][1]; // 서류심사 1등의 면접 등수가 기준
  for (let i = 1; i < ranks.length; i++) {
    //면접 등수가 더 높은 경우 pass++ 해주고, 면접 등수의 기준을 이것으로 변경
    if (ranks[i][1] < pass_rank) {
      pass++;
      pass_rank = ranks[i][1];
    }
  }
  console.log(pass);
}
