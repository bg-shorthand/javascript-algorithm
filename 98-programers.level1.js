// 다리를 지나는 트럭

// 트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
// ※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

// 예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

// solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

// 제한 조건
// bridge_length는 1 이상 10,000 이하입니다.
// weight는 1 이상 10,000 이하입니다.
// truck_weights의 길이는 1 이상 10,000 이하입니다.
// 모든 트럭의 무게는 1 이상 weight 이하입니다.

function solution (bridge_length, weight, truck_weights) {
  let answer = 0;

  const bridge = Array.from({ length: bridge_length }, v => 0);

  bridge.shift();
  bridge.push(truck_weights[0]);
  truck_weights.shift();
  answer += 1;

  while (bridge.reduce((acc, cur) => acc + cur, 0) !== 0) {
    if (bridge.reduce((acc, cur) => acc + cur, 0) + truck_weights[0] <= weight) {
      bridge.shift();
      bridge.push(truck_weights[0]);
      truck_weights.shift();
    } else {
      bridge.shift();
      bridge.push(0);
      if (bridge.reduce((acc, cur) => acc + cur, 0) + truck_weights[0] <= weight) {
        bridge[bridge.length - 1] = truck_weights[0];
        truck_weights.shift();
      };
    }
    answer += 1;
  }

  return answer;
}

console.log(solution(5, 5, [1, 1, 1, 1, 1, 2, 2, 2, 2])); // 19