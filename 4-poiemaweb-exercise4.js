// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

for (var a = 10; a > 0; a--) {
  if (a % 2 === 1) {
    console.log(a);
  }
}