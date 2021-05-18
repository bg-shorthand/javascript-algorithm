function solution(n) {
  const arr = [];

  for (let i = 0; i <= n; i++) {
    if (i < 2) arr.push(i);
    else arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  console.log(arr);

  return (
    ((arr[arr.length - 2] % 1234567) + (arr[arr.length - 3] % 1234567)) %
    1234567
  );
}

console.log(solution(2));
console.log(solution(3));
console.log(solution(5));
