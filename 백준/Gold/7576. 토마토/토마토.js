const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);

let graph = [];
for (let i = 0; i < m; i++) {
  let w = [...input[i].split(" ").map(Number)];
  graph.push(w);
}

const bfs = (queue) => {
  let ds = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let days = [];
  let num = 0;
  while (num !== queue.length) {
    //let [x, y, day] = queue.shift();
    const x = queue[num][0];
    const y = queue[num][1];
    let day = queue[num][2];

    days.push(day);
    if (graph[x][y] === 1) {
      day++;
      for (let k = 0; k < 4; k++) {
        let dx = x + ds[k][0];
        let dy = y + ds[k][1];
        if (dx < 0 || dx >= graph.length || dy < 0 || dy >= graph[0].length) continue; // out of range 검사
        if (graph[dx][dy] === 0) {
          graph[dx][dy] = 1;
          queue.push([dx, dy, day]);
        }
      }
    }
    num++;
  }
  return Math.max(...days);
};

const solution = (graph, m, n) => {
  let queue = [];

  // 최초로 익은 토마토 미리 큐에 넣어서 bfs에 넘겨줌
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        queue.push([i, j, 0]); // (i, j) 노드 & day = 0
      }
    }
  }
  let max_day = bfs(queue);

  // 그래프에 -1 남아있는지 확인
  graph.forEach((_, i) => {
    if (graph[i].includes(0)) {
      max_day = -1;
    }
  });

  console.log(max_day);
};

solution(graph, m, n);
