// 아기 돼지 삼형제가 1부터 n까지 번호가 붙어있는 음식을 먹으려고 합니다. 세 돼지 모두 식탐이 강했기 때문에 다음 규칙에 따라 음식을 먹기로 결정했습니다.

// 첫째 돼지에게는 1번 음식부터 x번 음식까지, 둘째 돼지에게는 x+1번 음식부터 y번 음식까지, 셋째 돼지에게는 y+1번 음식부터 n번 음식까지 분배됩니다(1 ≤ x ＜ y ＜ n).
// 모든 음식은 정수형태의 만족도 수치를 가지고 있습니다.
// 각 돼지의 포만도는 각자가 먹은 음식의 만족도 값의 합으로 나타낼 수 있으며, 음식을 모두 먹은 후 세 돼지의 포만도가 모두 같아야 합니다.
// 모든 돼지는 자신의 음식을 남기지 않고 다 먹습니다.
// 음식 중에는 만족도가 음수인 음식이 존재할 수 있으며, 만족도가 음수인 음식도 남기지 않고 모두 먹습니다.
// 음식의 만족도가 저장된 배열 foods 가 매개변수로 주어질 때, 아기 돼지 삼 형제의 포만도가 같아지게 음식을 나누어 주는 방법의 가짓수를 return 하도록 solution 함수를 완성해주세요.

function solution(foods) {
  if (foods.length < 3) return 0;

  const oneDish = foods.reduce((acc, cur) => acc + cur, 0) / 3;
  if (oneDish % 1) return 0;

  let count = 0;

  let first = [];
  let second = [];
  let third = [];

  for (let i = 1; i <= foods.length - 2; i++) {
    first = foods.slice(0, i);
    if (first.reduce((acc, cur) => acc + cur, 0) !== oneDish) continue;
    for (let j = i + 1; j <= foods.length - 1; j++) {
      second = foods.slice(i, j);
      if (second.reduce((acc, cur) => acc + cur, 0) !== oneDish) continue;
      third = foods.slice(j, foods.length);
      if (third.reduce((acc, cur) => acc + cur, 0) === oneDish) count++;
    }
  }

  return count;
}
