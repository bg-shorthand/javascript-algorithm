// 격자선을 따라 움직이는 기계가 있습니다. 격자는 1 x 1 크기인 칸들로 이루어져 있습니다. 기계는 처음에 격자선의 교차점 위에 놓여있으며 상, 하, 좌, 우로 거리 1 만큼씩 움직일 수 있습니다.

// 이때, 기계가 움직인 기록이 주어지면 기계가 전부 움직인 후 기계의 동선에서 1x1 크기 정사각형이 몇 개가 보이는지 알아보려 합니다.

// 예를 들어 [상, 우, 하, 좌]로 기계를 움직였다면 기계의 동선은 아래 그림과 같으며, 기계의 동선에서 1x1 크기 정사각형 1개가 보입니다.

// 4dmachine_1.png

// 기계가 움직인 기록을 담은 배열 moves가 주어질때, 기계가 전부 움직인 후 기계의 동선에서 보이는 1x1 크기 정사각형 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// moves의 길이는 1 이상 500 이하입니다.
// moves의 원소는 상, 하, 좌, 우를 나타내는 길이가 1인 문자열입니다.
// 상, 하, 좌, 우는 각각 "U", "D", "L", "R"로 나타냅니다.
// 격자 평면은 무한히 크다고 가정합니다.
// 입출력 예
// moves    return
// ["U", "R", "D", "L", "U", "R", "D", "L"]    1
// ["U", "U", "R", "D", "L", "L", "L", "U", "R", "D", "D", "D", "L", "U", "R", "R", "R", "D", "L", "U"]    5
// ["U", "L", "D", "R", "R", "D", "D", "L", "U", "U"]    1
// 입출력 예 설명
// 입출력 예 #1

// 문제의 그림과 같은 동선이 생기며, 1x1 크기 정사각형 1개가 보입니다.

// 입출력 예 #2

// 기계의 동선을 그려보면 아래 그림과 같습니다.

// 4dmachine_2.png

// 1x1 크기 정사각형이 5개 있습니다.

// 입출력 예 #3

// 기계의 동선을 그려보면 아래 그림과 같습니다.

// 4dmachine_3.png

// 1x1 크기 정사각형이 1개 있습니다.

const solution = (moves) => {
  const map = [[0, 0]];

  const isRec = (a, b, c, d) => {
    const sortedArgs = [a, b, c, d]
      .sort((a, b) => a[0] - b[0])
      .sort((a, b) => a[1] - b[1]);
    return (
      sortedArgs[0][1] === sortedArgs[1][1] &&
      sortedArgs[0][0] - sortedArgs[1][0] === -1 &&
      sortedArgs[0][0] === sortedArgs[2][0] &&
      sortedArgs[0][1] - sortedArgs[2][1] === -1 &&
      sortedArgs[2][1] === sortedArgs[3][1] &&
      sortedArgs[2][0] - sortedArgs[3][0] === -1
    );
  };

  moves.forEach((dir) => {
    if (dir === "U") {
      map.push([map[map.length - 1][0], map[map.length - 1][1] - 1]);
    } else if (dir === "D") {
      map.push([map[map.length - 1][0], map[map.length - 1][1] + 1]);
    } else if (dir === "R") {
      map.push([map[map.length - 1][0] + 1, map[map.length - 1][1]]);
    } else {
      map.push([map[map.length - 1][0] - 1, map[map.length - 1][1]]);
    }
  });

  console.log(map);
  // [ 0, 0 ],  [ 0, -1 ],
  // [ 1, -1 ], [ 1, 0 ],
  // [ 0, 0 ],  [ 0, -1 ],
  // [ 1, -1 ], [ 1, 0 ],
  // [ 0, 0 ]

  let recArr = [];

  for (let i = 0; i < map.length - 3; i++) {
    for (let j = i + 1; j < map.length - 2; j++) {
      for (let k = j + 1; k < map.length - 1; k++) {
        for (let l = k + 1; l < map.length; l++) {
          console.log("test", map[i], map[j], map[k], map[l]);
          isRec(map[i], map[j], map[k], map[l]) &&
            recArr.push([map[i], map[j], map[k], map[l]]);
        }
      }
    }
  }

  console.log("recArr", recArr);
};

console.log(solution(["U", "R", "D", "L", "U", "R", "D", "L"]));
