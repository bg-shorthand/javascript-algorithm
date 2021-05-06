const solution = (array) => {
  let answer = Array.from({ length: array.length });

  for (let i = 1; i <= array.length; i++) {
    const friend = array
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
  solution([
    [1, 2],
    [2, 3],
    [3, 1],
    [4, 5],
    [5, 2],
  ])
);
console.log(
  solution([
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 1],
    [6, 1],
  ])
);
