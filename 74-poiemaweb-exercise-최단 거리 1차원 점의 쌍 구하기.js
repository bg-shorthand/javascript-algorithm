// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라. (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 결과값은 [[3, 4], [23, 24]]가 될 것이다.

function findMinDistance(array){
  let arr = array.reduce((acc, cur, index) => {
    if (array[index + 1]) acc.push([array[index], array[index + 1]]);
    return acc
  }, []);

  let arr2 = arr.map(v => v[1] - v[0]);
  
  return arr.filter(v => {
    if (v[1] - v[0] === Math.min(...arr2)) return v;
  });
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]