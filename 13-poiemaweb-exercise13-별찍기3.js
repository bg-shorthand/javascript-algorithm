// 13. 삼각형 출력하기 - pattern 3
// *****
// ****
// ***
// **
// *


// 답1

// var solve = '';
// var star = '*';

// for (var a = ''; a.length <= 5; a += star) {
//   for (var i = a.length; i < 5; i++) {
//     solve += star;
//   }
//   console.log(solve);
//   i = 0;
//   solve = '';
// }


// 답2
var solve = '';
var star = '*';
var newLine = '\n';
var line = 5;

for (var i = 0; i < line; i++) {
  for (var a = 0; a < line - i; a++) {
    solve += star;
  }
  solve += newLine;
}

console.log(solve);