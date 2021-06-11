function solution(dirs) {
  let answer = [];
  let position = [0, 0];

  dirs.split("").forEach((v) => {
    if (v === "U") {
      if (position[1] < 5) {
        position[1] += 1;
        answer.push([position[0], position[1] - 1, ...position]);
      }
    } else if (v === "D") {
      if (position[1] > -5) {
        position[1] -= 1;
        answer.push([position[0], position[1] + 1, ...position]);
      }
    } else if (v === "L") {
      if (position[0] > -5) {
        position[0] -= 1;
        answer.push([position[0] + 1, position[1], ...position]);
      }
    } else if (v === "R") {
      if (position[0] < 5) {
        position[0] += 1;
        answer.push([position[0] - 1, position[1], ...position]);
      }
    }
  });

  return answer.filter(
    (v, i, arr) =>
      arr.indexOf(
        arr.find(
          (w) =>
            w[0] === v[0] && w[1] === v[1] && w[2] === v[2] && w[3] === v[3]
        )
      ) === i
  ).length;
}

console.log(solution("LULLLLLLU"));
console.log(solution("ULURRDLLU"));
