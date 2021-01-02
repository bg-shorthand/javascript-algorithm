// 배열의 첫 요소와 마지막 요소를 나타내는 정수를 인자로 받아 정수의 배열을 반환하는 함수를 완성하라. 예를 들어 인수가 [10, 15]인 경우, [ 10, 11, 12, 13, 14, 15 ]를 반환한다.

function generateRange(from, to) {
  let res = [];
  
  if (from < to) {
    res = Array.from({ length: Math.abs(to - (from - 1)) }, (_, i) => from + i);
  } else if (from > to) {
    res = Array.from({ length: Math.abs(from - (to - 1)) }, (_, i) => from - i);
  } else res = [ from ];

  return res;
}

console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]
console.log(generateRange(15, 10));
console.log(generateRange(-10, -15));
console.log(generateRange(-15, -10));
console.log(generateRange(-15, -15));