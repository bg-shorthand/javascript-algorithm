// 13. 삼각형 출력하기 - pattern 3
// *****
// ****
// ***
// **
// *

var solve = '';
var star = '*';

for (var a = ''; a.length <= 5; a += star) {
  for (var i = a.length; i < 5; i++) {
    solve += star;
  }
  console.log(solve);
  i = 0;
  solve = '';
}