const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const dfs = (graph, startNumber) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNumber);
  while (needVisit.length !== 0) {
    const node = needVisit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      const nodes = graph[node]; // 인접 노드 저장
      needVisit = [...needVisit, ...nodes.sort((a, b) => b - a)]; // 내림차순
    }
  }

  return visited;
};

const bfs = (graph, startNumber) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNumber);
  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      const nodes = graph[node]; // 인접 노드 저장
      needVisit = [...needVisit, ...nodes.sort((a, b) => a - b)]; // 오름차순
    }
  }

  return visited;
};

const solution = (input) => {
  let [node, edge, startNumber] = input.shift().split(" ").map(Number);
  // 노드 번호는 0이아니라 1부터 시작되므로 graph는 node개수 + 1로 생성
  let graph = [...Array(node + 1)].map((e) => []);
  for (let i = 0; i < edge; i++) {
    let [start, end] = input[i].split(" ").map(Number);
    graph[start].push(end);
    graph[end].push(start);
  }

  console.log(dfs(graph, startNumber).join(" "));
  console.log(bfs(graph, startNumber).join(" "));
};

solution(input);
