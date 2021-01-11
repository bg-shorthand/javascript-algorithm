// [카카오 인턴] 키패드 누르기

// 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

function solution(numbers, hand) {
  let answer = '';

  let pad = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j ++) {
      pad.push([i, j]);
    }
  }

  let L = pad[9];
  let R = pad[11];

  
  const length = (a = [], b = []) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  
  const move = (number = 1, hand = hand) => {
    const target = pad[number ? number - 1 : 10];
    const lengthL = length(L, target);
    const lengthR = length(R, target);

    if ((number === 1) || (number === 4) || (number === 7)) {
      L = target;
      answer += 'L';
    } else if ((number === 3) || (number === 6) || (number === 9)) {
      R = target;
      answer += 'R';
    } else if ((lengthL < lengthR)) {
      L = target;
      answer += 'L';
    } else if ((lengthL > lengthR)) {
      R = target;
      answer += 'R';
    } else if ((hand === 'left')) {
      L = target;
      answer += 'L';
    } else if ((hand === 'right')) {
      R = target;
      answer += 'R';
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    move(numbers[i], hand);
  }
  
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")) // 'LRLLLRLLRRL'
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")) // 'LRLLRRLLLRR'
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right ")) // 'LLRLLRLLRL'


//  console.log(solution([7, 0], "left")) // 'LRLLRRLLLRR'