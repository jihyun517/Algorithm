const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const bfs = (graph, i, j) => {
  let queue = [[i, j]];
  let ds = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length !== 0) {
    //1. 큐에서 노드 거내서
    let [x, y] = queue.shift();

    //2. 방문한적없는 노드면 상하좌우 탐색 후 방문처리
    if (graph[x][y] !== 0) {
      for (let k = 0; k < 4; k++) {
        let dx = x + ds[k][0];
        let dy = y + ds[k][1];
        if (dx < 0 || dx >= graph.length || dy < 0 || dy >= graph[0].length) continue; // out of range 검사
        if (graph[dx][dy] === graph[x][y]) queue.push([dx, dy]);
      }
      graph[x][y] = 0;
    }
  }
};

const solution = (n, input) => {
  let graph = [];
  let blindness_graph = [];
  let result = [];

  let count = 0;
  let blindness_count = 0;

  for (let i = 0; i < n; i++) {
    let w = [...input.shift().split("")]; // 그래프의 각 행
    let blindness_w = [];
    graph.push(w); // 색맹x 버전
    for (let j = 0; j < n; j++) {
      if (w[j] === "G") blindness_w[j] = "R"; // G를 R로 변경 후 삽입
      else blindness_w[j] = w[j];
    }
    blindness_graph.push(blindness_w); // 색맹o 버전
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] !== 0) {
        count++;
        bfs(graph, i, j);
      }
      if (blindness_graph[i][j] !== 0) {
        blindness_count++;
        bfs(blindness_graph, i, j);
      }
    }
  }
  console.log(count, blindness_count);
};

solution(+n, input);
