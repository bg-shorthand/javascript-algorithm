// 사람들로 가득 찬 열차가 있습니다. 열차는 “1 x 1” 크기 칸으로 이루어진 “N x M” 크기 정사각 격자로 나타낼 수 있습니다. 각 격자 칸에는 동서남북 중 한 방향을 바라보는 사람이 한 명씩 서 있습니다. 열차 내의 모든 사람은 서로 마주 보는 것을 불편하게 느낍니다. 그래서 마주 보고 있는 사람은 마주 보지 않도록 좌우로 회전하거나 등을 돌리려 합니다. 단, 방향을 바꾸는 사람의 수를 최소로 하여 열차 내에 마주 보는 사람이 없도록 해야 합니다. 다음은 열차에 탄 사람들이 바라보는 방향을 나타낸 그림입니다.

// gray_fiirst.png

// 위 그림에서 2행 2열과 2행 3열에 있는 사람이 서로 마주 보고 있습니다. 마주 보지 않기 위해서는 두 사람 중 적어도 한 사람이 회전하여 다른 방향을 바라보아야 합니다. 2행 2열의 사람이 회전할 경우, 어떤 방향을 바라보더라도 다른 사람과 다시 마주 봅니다. 이러한 경우 2행 2열의 사람을 포함하여 최소 두 사람이 방향을 바꿔야 합니다. 하지만 2행 3열의 사람이 남쪽이나 동쪽을 바라보도록 방향을 바꿀 경우, 아무도 마주 보는 사람이 없습니다. 따라서, 한 사람만 방향을 바꾸면 됩니다.

// 사람들이 바라보는 방향을 나타내는 문자열 배열 train이 매개변수로 주어집니다. 마주 보는 사람이 없도록 사람들의 방향을 바꿀 때, 최소 몇 명이 방향을 바꾸어야 하는지 return 하도록 solution 함수를 완성해주세요.

function solution(train) {
  let answer = -1;

  const check = (train) => {
    let wrong = [];

    for (let i = 0; i < train.length; i++) {
      for (let j = 0; j < train[0].length; j++) {
        if (train[i][j] === "E" && train[i][j + 1] === "W")
          wrong.push([i, j], [i, j + 1]);
        if (train[i][j] === "S" && train[i + 1][j] === "N")
          wrong.push([i, j], [i + 1, j]);
      }
    }

    return wrong;
  };

  const wrong = check(train);

  const change = (train, wrong, dir) => {
    let newTrain = [];

    wrong.forEach((v) => {
      newTrain.push(
        train.map((w, i) => {
          return i === v[0]
            ? Array.from(w)
                .map((x, i) => (i === v[1] ? dir : x))
                .join("")
            : w;
        })
      );
    });

    return newTrain;
  };

  const newTrainN = change(train, wrong, "N");
  const newTrainE = change(train, wrong, "E");
  const newTrainW = change(train, wrong, "W");
  const newTrainS = change(train, wrong, "S");

  return answer;
}

console.log(solution(["ESS", "EEW", "NNW"]));
console.log(solution(["EW", "EW", "EW"]));
