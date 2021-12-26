function solution(sizes) {
  let answer = 0;

  const box = sizes.reduce(
    (acc, cur, i) => {
      if (i === 0) return cur[0] >= cur[1] ? cur : [cur[1], cur[0]];
      else if (cur[0] >= cur[1])
        return [
          acc[0] >= cur[0] ? acc[0] : cur[0],
          acc[1] >= cur[1] ? acc[1] : cur[1],
        ];
      else
        return [
          acc[0] >= cur[1] ? acc[0] : cur[1],
          acc[1] >= cur[0] ? acc[1] : cur[0],
        ];
    },
    [0, 0]
  );

  console.log(box);

  answer = box[0] * box[1];

  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
