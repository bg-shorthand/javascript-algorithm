// 12. 삼각형 출력하기 - pattern 2
// *****
//  ****
//   ***
//    **
//     *


// 답1

// var solve = '';
// var star = '*';
// var space = ' ';

// for (var a = ''; a.length < 5; a += space) {
//   solve += a;
//   for (var i = a.length; 5 - i > 0; i++) {
//     solve += star;
//   }
//   console.log(solve);
//   solve = '';
// }


// 답2

var solve = '';
var star = '*';
var space = ' ';
var newLine = '\n'
var line = 5;

for (var i = 0; i < line; i++) {
  for (var a = 0; a < i; a++) {
    solve += space;
  }
  for (var b = 0; b < line - i; b++) {
    solve += star;
  }
  solve += newLine;
}
console.log(solve);