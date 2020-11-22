// 14. 삼각형 출력하기 - pattern 4
//     *
//    **
//   ***
//  ****
// *****

var solve = "";
var star = "*";
var space = " ";
var line = 5;

for (var i = 1; i <= line; i++) {
  for (var a = i; line - a > 0; a++) {
    solve += space;
  }
  for (var b = line - i; line - b > 0; b++) {
    solve += star;
  }
  console.log(solve);
  solve = "";
}