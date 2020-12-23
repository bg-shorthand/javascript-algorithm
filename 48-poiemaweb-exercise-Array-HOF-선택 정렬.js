// 선택 정렬을 통해 주어진 배열(array)을 정렬하는 함수를 구현하라. 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (min > array[j]) {
        min = array[j];
      }
    }
    for (let k = 0; k < array.length; k++) {
      if (array[k] === min) {
        let l = array[k];
        array[k] = array[i];
        array[i] = l;
      }
    }
    array[i] = min;
  }
  return array;

  // let result = [];

  // while (array.length > 0) {
  //   function findMin(array) {
  //     let min = array[0];
  //     for(let i = 1; i < array.length; i++) {
  //       if (min > array[i]) {
  //         min = array[i];
  //       }
  //     }
  //     return min;
  //   }
  
  //   result[result.length] = findMin(array);
  
  //   array = (function deleteMin(array) {
  //     let newArray = [];
  //     for(let i = 0; i < array.length; i++) {
  //       if(array[i] !== findMin(array)) {
  //         newArray[newArray.length] = array[i]
  //       }
  //     }
  //     return newArray;
  //   })(array);
  // }

  // return result;
}

console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]