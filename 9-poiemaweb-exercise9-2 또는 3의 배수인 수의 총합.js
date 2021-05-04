// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

var solve = 0;

for (var a = 0; a < 20; a++) {
  if (a % 2 === 0 || a % 3 === 0) {
    solve += a;
  }
}

console.log(solve);