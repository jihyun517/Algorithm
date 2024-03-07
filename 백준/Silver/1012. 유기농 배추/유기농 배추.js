const fs = require("fs");
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let graph;

const solution = () => {
  let wormCount = 0;
  for (let x = 0; x < graph.length; x++) {
    for (let y = 0; y < graph[0].length; y++) {
      if (graph[x][y] == 1) {
        wormCount++; // 지렁이 개수 증가
        dfs(x, y);
      }
    }
  }
  console.log(wormCount);
};

const dfs = (x, y) => {
  if (x < 0 || x >= graph.length || y < 0 || y >= graph[0].length) return; // out of range 일 경우 종료

  if (graph[x][y] === 1) {
    graph[x][y] = 0; // 방문했으니 0으로 변경

    // 방문 노드의 상하좌우 노드에 대하여 인접 노드라면 dfs 실행
    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
  }
};

// 테스트 케이스만큼 그래프 생성 & solution() 실행
for (let i = 0; i < n; i++) {
  const [m, n, k] = input.shift().split(" ").map(Number);

  graph = Array.from(Array(m), () => new Array(n).fill(0)); // m*n 배열 생성 및 0으로 초기화

  for (let j = 0; j < k; j++) {
    // 배추 심어진 k개만큼 반복하며 1로 할당
    const [x, y] = input.shift().split(" ").map(Number);
    graph[x][y] = 1;
  }
  solution();
}
