// r x c 크기의 지도가 주어졌습니다. 지도에는 땅과 바다의 정보가 표시되어 있습니다. 1 x 1 크기의 각 칸에는 1 또는 0으로 표시되어 있고, 1은 땅에 해당하는 공간, 0은 바다에 해당하는 공간입니다. 이때, 땅이 상하좌우로 인접해 있을 때 인접한 땅들을 하나의 섬이라고 합니다.

// 예를 들어, 4 x 5 크기의 지도가

// 섬1_t9aphz.png

// 로 주어졌을 때,

// 섬2_j3tjuh.png

// 섬이 2개가 있다고 판단합니다.

// 이와 같은 지도가 주어졌을 때, 우리는 각 섬의 둘레를 모두 구하여 합하려고 합니다. 각 칸의 모서리의 길이가 1을 나타냅니다. 즉, 위의 지도에서 섬 A의 둘레는 16이 되고, 섬 B의 둘레는 8이 되어, 모두 합하면 24가 됩니다.

// 지도가 매개변수 maps로 주어졌을 때, 섬들의 둘레를 모두 합하여 return 하는 solution 함수를 완성해 주세요. 위의 예시에서는 24를 return 하면 됩니다.

function solution(maps) {
  let answer = 0;

  maps = maps.map((v) => [0, ...v, 0]);
  maps.unshift(Array.from({ length: maps[0].length }).fill(0));
  maps.push(Array.from({ length: maps[0].length }).fill(0));

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      !maps[i + 1] && maps[i][j] === 1 && answer++;
      !maps[i][j + 1] && maps[i][j] === 1 && answer++;

      maps[i + 1] && maps[i][j] !== maps[i + 1][j] && answer++;
      maps[i][j + 1] && maps[i][j] !== maps[i][j + 1] && answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 1],
    [0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
  ])
);
