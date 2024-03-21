const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const meetings = [];
for (let i = 0; i < n; i++) {
  meetings.push(input[i].split(" ").map(Number));
}
meetings.sort((a, b) => {
  // 끝나는 시간이 같을 경우, 시작 시간 오름차순 정렬
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
}); // 끝나는 시간 오름차순 정렬

const solution = () => {
  //초기 세팅
  let count = 1;
  let prev_end = meetings[0][1];

  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i][0] >= prev_end) {
      // 현재 시작시간이 직전에 끝난 시간보다 같거나 클 경우
      count++;
      prev_end = meetings[i][1]; // 끝나는 시간 저장
    }
  }

  console.log(count);
};

solution();
