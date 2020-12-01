// 15. 정삼각형 출력하기
//     *
//    ***
//   *****
//  *******
// *********

var solve = "";
var star = "*";
var space = " ";
var line = 5;

for (var i = 0; i < line; i++) {
  for (var a = i; a < line - 1; a++) {
    solve += space;
  }
  for (var b = 0; b < i * 2 + 1; b++) {
    solve += star;
  }
  console.log(solve);
  solve = "";
}