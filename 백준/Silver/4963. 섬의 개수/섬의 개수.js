const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

let map;
let visited;
let x = [0, 1, 1, 1, 0, -1, -1, -1];
let y = [1, 1, 0, -1, -1, -1, 0, 1];
let result = [];

const BFS = (start, w, h) => {
    let queue = [start];
    let count = 0;
    while (queue.length) {
        let [curX, curY] = queue.shift();
        if (!visited[curY][curX]) {
            if (map[curY][curX]) count++; // 섬이 있으면 count 1증가
            visited[curY][curX] = true; // 방문 체크
            for (let i = 0; i < x.length; i++) { // 지도 범위 밖으로 나가는지 체크
                if (
                    curX + x[i] < 0 ||
                    curY + y[i] < 0 ||
                    curX + x[i] >= w ||
                    curY + y[i] >= h
                ) {
                    continue;
                }
                if (visited[curY + y[i]][curX + x[i]]) continue;  // 주변을 방문한적이 있는지 체크
                if (map[curY + y[i]][curX + x[i]]) { // 주변에 섬이 있는곳을 queue에 넣어준다
                    queue.push([curX + x[i], curY + y[i]]);
                }
            }
        }
    }
    return count;
};

for (let i = 0; i < input.length - 1; i++) {
    const [w, h] = input[i];
    let answer = 0;
    map = input.slice(i + 1, i + h + 1);
    i = i + h;
    visited = [...Array(h)]
        .map(() => false)
        .map(() => [...Array(w)].map(() => false));
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (visited[i][j]) continue;
            let count = BFS([j, i], w, h);
            if (count) answer++; // 섬이 카운트가 됬으면 answer 1증가
        }
    }
    result.push(answer); 
}

console.log(result.join("\n"));