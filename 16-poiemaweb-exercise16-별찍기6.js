// 16. 역정삼각형 출력하기
// *********
//  *******
//   *****
//    ***
//     *

var solve = "";
var star = "*";
var space = " ";
var line = 5;

for (var i = 0; i < line; i++) {
  for (var a = 0; a < i; a++) {
    solve += space;
  }
  for (var b = 0; b < (line - 1 - i) * 2 + 1; b++) {
    solve += star;
  }
  console.log(solve);
  solve = "";
}