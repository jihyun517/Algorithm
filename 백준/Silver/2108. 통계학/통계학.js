const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());
const numbers = input.map(Number).sort((a, b) => a - b);

function solution() {
  console.log(mean());
  console.log(median());
  console.log(mode());
  console.log(range());
}

// 평균
const mean = () => {
  return Math.round(numbers.reduce((a, b) => a + b, 0) / n) === -0 ? 0 : Math.round(numbers.reduce((a, b) => a + b, 0) / n);
};

// 중앙값
const median = () => {
  return numbers[Math.floor(n / 2)];
};

// 최빈값
const mode = () => {
  const map = new Map();
  let max = 1;
  for (let number of numbers) {
    if (map.has(number)) {
      max = Math.max(max, map.get(number) + 1);
      map.set(number, map.get(number) + 1);
    } else map.set(number, 1);
  } // map 자료구조를 통해 숫자 별 빈도수 기록

  const maxArr = [];
  for (let [key, val] of map) {
    if (val === max) maxArr.push(key);
  } // maxArr 배열에 최빈값 후보에 해당하는 모든 원소를 넣어준다.

  // 최빈값이 여러개면 두번째로 작은 값, 1개라면 최빈값.
  return maxArr.length === 1 ? maxArr[0] : maxArr[1];
};

// 범위
const range = () => {
  return numbers[n - 1] - numbers[0];
};

solution();
