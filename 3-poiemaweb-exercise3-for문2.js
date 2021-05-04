// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

var solve = '';

for (var a = 0; a < 10; a++) {
  if (a % 2 === 0) {
    solve += a;
  }
}
console.log(solve);