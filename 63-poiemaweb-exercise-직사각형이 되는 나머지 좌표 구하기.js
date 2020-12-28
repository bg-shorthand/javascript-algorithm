// 임의의 좌표 3개가 주어질 때 직사각형이 되는 나머지 1개의 좌표를 구하라. 예를 들어, [[1, 4], [3, 4], [3, 10]]가 주어지면 [1, 10]을 구한다.

// for 문은 사용하지 않도록 하자.

function getRestCoordinate (array) {
  const res = [];
  const [a, b, c] = array;
  res.push(a[0] === b[0] ? c[0] : a[0] === c[0] ? b[0] : a[0], a[1] === b[1] ? c[1] : a[1] === c[1] ? b[1] : a[1]);
  return res;
}

console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]