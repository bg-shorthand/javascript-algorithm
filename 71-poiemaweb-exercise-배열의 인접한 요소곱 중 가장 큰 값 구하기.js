// 인수로 주어진 정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라. 예를 들어 인수가 [3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.

function adjacentElementsProduct(arr) {
  return arr.reduce((acc, _, index, arr) => {
    if (typeof arr[index + 1] === 'number') {
      acc = arr[index] * arr[index + 1] < arr[index + 1] * arr[index + 2] ? arr[index + 1] * arr[index + 2] : arr[index] * arr[index + 1];
    }
    return acc;
  }, 0)
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21