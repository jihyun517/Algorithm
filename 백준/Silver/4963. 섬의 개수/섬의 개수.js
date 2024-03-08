const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = [];
let graph;
let ds = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
];

const solution = (graph) => {
  let islandCount = 0;
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (graph[i][j] === 1) {
        bfs(i, j);
        islandCount++;
      }
    }
  }
  return islandCount;
};

const bfs = (startX, startY) => {
  let queue = [[startX, startY]]; // 큐에 노드 넣기

  while (queue.length !== 0) {
    // 1.큐에서 노드 꺼내서
    let [x, y] = queue.shift();

    // 2.방문 처리
    if (graph[x][y] == 1) {
      graph[x][y] = 0;

      // 3. 해당 노드의 상하좌우가 1이고 out of range가 아니면 큐에 추가
      for (let i = 0; i < 8; i++) {
        let dx = x + ds[i][0];
        let dy = y + ds[i][1];
        if (dx < 0 || dx >= graph.length || dy < 0 || dy >= graph[0].length) continue; // out of range 검사
        if (graph[dx][dy] === 1) queue.push([dx, dy]);
      }
    }
  }
};

// make graph & solution() start
while (input[0] !== "0 0") {
  graph = []; // graph에 각 테스트케이스 별로 2차원 배열 저장
  let [w, h] = input.shift().split(" ").map(Number);
  for (let i = 0; i < h; i++) {
    let w = [...input.shift().split(" ").map(Number)]; // 행
    graph.push(w); // 테스트케이스에 행 push 반복
  }
  result.push(solution(graph));
}
console.log(result.join("\n"));
