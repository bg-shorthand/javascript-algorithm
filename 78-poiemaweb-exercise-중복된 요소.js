// 인수로 전달된 배열이 요소 중에서 중복된 요소만으로 구성된 배열을 반환하는 함수를 작성하라

function findDuplicated (array) {
  return array.filter((v, i) => array.indexOf(v) !== i);
}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [1, 2, 3]
console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9])); // [1, 2, 3]