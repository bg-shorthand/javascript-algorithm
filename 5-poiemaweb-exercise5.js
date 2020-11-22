//5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

var a = 0;

while (a < 10) {
  if (a % 2 === 1) {
    console.log(a);
  }
  a++;
}