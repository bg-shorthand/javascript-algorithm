// 11. 삼각형 출력하기 - pattern 1
// *
// **
// ***
// ****
// *****


// 답1

// var solve = '';
// var star = '*';

// for (var a = '*'; a.length <= 5; a += star) {
//  console.log(a);
// }


// 답 2

var solve = '';
var star = '*';
var newLine = '\n'
var line = 20;

for (var i = 0; i < line; i++) {
  for (var a = 0; a <= i; a++) {
    solve += star;
  }
  solve += newLine;
}

console.log(solve);