// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

var a = 10;

while (a > 0) {
  if (a % 2 === 0) {
    console.log(a);
  }
  a--;
}