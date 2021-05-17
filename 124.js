// N명의 이용자를 가진 소셜 네트워크 서비스가 있습니다. 각각의 이용자는 1번부터 N 번까지 번호가 붙어있습니다. 이 소셜 네트워크에서 각 이용자의 친구 수를 분석하려고 합니다. 이용자 A가 B의 친구라면 B도 A의 친구이며, 친구의 친구는 친구입니다. 따라서 A와 B가 친구 관계이고 B와 C가 친구 관계라면 A와 C도 친구입니다.
// 다음은 N= 5인 경우의 친구 관계를 나타낸 그림입니다.

// 친구친구1_tbq3kg.png

// 위 그림에서 1번과 2번 이용자가 친구이고, 2번과 4번 이용자가 친구이므로 4번과 1번 이용자 또한 친구입니다. 그러나 1번과 5번 이용자는 두 이용자가 동시에 직접 친구 관계인 이용자가 없으므로 친구가 아닙니다. 따라서 1번 이용자는 총 3명의 친구를 가지고 있습니다. 마찬가지로 2번 이용자는 4명, 3번 이용자는 2명, 4번 이용자는 3명, 5번 이용자는 2명의 친구를 가지고 있습니다.

// 소셜 네트워크의 전체 이용자 수 N, 각 이용자의 친구 관계를 담고 있는 배열 relation이 매개변수로 주어질 때, 각 이용자의 친구 수를 1번 이용자부터 순서대로 담은 배열을 return 하도록 solution 함수를 완성해 주세요.

const solution = (N, relation) => {
  let answer = Array.from({ length: N });

  for (let i = 1; i <= N; i++) {
    const friend = relation
      .filter((couple) => couple.includes(i))
      .map((couple) => couple.filter((a) => a !== i))
      .flat();
    answer[i - 1] = friend;
  }

  const _answer = answer.map((v) => [...v]);

  answer.forEach((v, i) =>
    v.forEach((w) => (answer[i] = [...answer[i], ..._answer[w - 1]]))
  );

  answer = answer.map(
    (v, i) =>
      v.filter((w, j, arr) => w !== i + 1 && arr.indexOf(w) === j).length
  );

  return answer;
};

console.log(
  solution(5, [
    [1, 2],
    [4, 2],
    [3, 1],
    [4, 5],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [4, 2],
    [3, 1],
    [4, 5],
    [6, 7],
  ])
);
