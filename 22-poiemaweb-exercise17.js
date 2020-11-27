function binarySearch(array, target) {
  var start = array[0];
  var end = array[array.length];
  var mid = Math.floor((start + end) / 2);

  if (target < start || target > end) {
    return -1;
  }
  
  while (mid !== target) {
    if (mid < target) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else if (mid > target) {
      end = mid;
      mid = Math.floor((start + end) / 2);
    }
  }
  return mid - 1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1






// var mid = array[Math.floor(0 + array.length) / 2]

// while (target !== mid) {
//   var newArray = [];
//   if (target < mid) {
//     for (var i = 0; i < mid; i++) {
//       newArray[i] = array[i];
//     } 
//   } else if (target = mid) return mid;
//   else if (target > mid) {
//     for (var i = mid + 1; i <= array.length; i++) {
//       newArray[i] = array[i];
//     }
//   }
// }
// return -1;