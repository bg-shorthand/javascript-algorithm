// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for (var a = 1; a <= 6; a++) {
  for (var b = 1; b <= 6; b++) {
    if (a + b === 6) {
      console.log(a, b);
    }
  }
}