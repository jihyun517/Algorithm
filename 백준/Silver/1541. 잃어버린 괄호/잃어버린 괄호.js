const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const expressionElements = [];
let num = "";
input.forEach((el) => {
  if (!isNaN(el)) {
    num += el;
  } else {
    expressionElements.push(+num);
    expressionElements.push(el);
    num = "";
  }
});
expressionElements.push(+num, "\0");

function solution(expressionElements) {
  let res = expressionElements[0];
  let i = 0;
  while (expressionElements[i + 1] !== "\0") {
    if (expressionElements[i + 1] == "-") {
      let totalSubtraction = 0; // 누적 뺄셈 값 (괄호로 묶을 덧셈들) 저장
      do {
        i += 2;
        totalSubtraction += expressionElements[i];
      } while (expressionElements[i + 1] == "+");
      res -= totalSubtraction;
    } else {
      i += 2;
      res += expressionElements[i];
    }
  }

  console.log(res);
}

solution(expressionElements);
