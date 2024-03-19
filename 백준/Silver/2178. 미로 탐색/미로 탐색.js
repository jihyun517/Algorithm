const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
const graph = [];
for (let i = 0; i < n; i++) {
  let w = [...input[i].split("").map(Number)];
  graph.push(w);
}

const solution = () => {
  const result = bfs();
  console.log(result);
};

const bfs = () => {
  let queue = [[0, 0, 1]];
  let num = 0;
  let ds = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (queue.length !== num) {
    let x = queue[num][0];
    let y = queue[num][1];
    let count = queue[num][2];

    if (x === n - 1 && y === m - 1) return count; // 도착 시 bfs 즉시 종료
    if (graph[x][y] === 1) {
      graph[x][y] = 0; // 왔던 길 되돌아감 방지
      count++;
      for (let i = 0; i < 4; i++) {
        let dx = x + ds[i][0];
        let dy = y + ds[i][1];
        if (outOfRange(dx, dy) === true) continue;
        if (graph[dx][dy] === 1) queue.push([dx, dy, count]);
      }
    }
    num++;
  }
};

const outOfRange = (dx, dy) => {
  if (dx < 0 || dx >= graph.length || dy < 0 || dy >= graph[0].length) return true;
  else return false;
};

solution();
