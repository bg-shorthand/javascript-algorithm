// 12. 삼각형 출력하기 - pattern 2
// *****
//  ****
//   ***
//    **
//     *

solve = '';
star = '*';
space = ' ';

for (var a = ''; a.length < 5; a += space) {
  solve += a;
  for (var i = a.length; 5 - i > 0; i++) {
    solve += star;
  }
  console.log(solve);
  solve = '';
}