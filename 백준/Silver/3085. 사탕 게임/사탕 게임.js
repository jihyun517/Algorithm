const { count } = require("console");
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());
const board = input.map((color) => color.split(""));
// 1. 배열의 행 길이만큼 반복한다
// 2. 배열의 행에서 선택한 열의 값을 추출 후 반환
const transpose_board = board.map((_, idx) => board.map((row) => row[idx]));
function solution() {
  const init_count = Math.max(calc_max_count(board), calc_max_count(transpose_board));
  const board_count = game(board);
  const transpose_board_count = game(transpose_board);
  console.log(Math.max(init_count, board_count, transpose_board_count));
}

const game = (board) => {
  let count = 1;
  for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j <= n - 2; j++) {
      if (board[i][j] !== board[i][j + 1]) {
        let copy_board = JSON.parse(JSON.stringify(board)); // 깊은 복사
        [copy_board[i][j], copy_board[i][j + 1]] = [copy_board[i][j + 1], copy_board[i][j]];
        let res_count = calc_count(copy_board, i, j);
        //if (res_count === 5) console.log(i, j);
        if (res_count > count) count = res_count;
      }
    }
  }
  return count;
};

const calc_count = (board, i, j) => {
  let max_count = 1;

  // i 행 계산
  let count = 1;
  for (k = 0; k <= n - 2; k++) {
    if (board[i][k] === board[i][k + 1]) {
      count++;
      if (count > max_count) max_count = count;
    } else {
      count = 1;
    }
  }

  // j 열 계산
  count = 1;
  for (k = 0; k <= n - 2; k++) {
    if (board[k][j] === board[k + 1][j]) {
      count++;
      if (count > max_count) max_count = count;
    } else {
      count = 1;
    }
  }

  // j+1 열 계산
  count = 1;
  for (k = 0; k <= n - 2; k++) {
    if (board[k][j + 1] === board[k + 1][j + 1]) {
      count++;
      if (count > max_count) max_count = count;
    } else {
      count = 1;
    }
  }

  return max_count;
};

const calc_max_count = (board) => {
  let max_count = 1;

  for (let i = 0; i <= n - 1; i++) {
    let count = 1;

    for (let j = 0; j <= n - 2; j++) {
      if (board[i][j] === board[i][j + 1]) {
        count++;
        if (count > max_count) max_count = count;
      } else {
        count = 1;
      }
    }
  }

  return max_count;
};

solution();
