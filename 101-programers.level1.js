const solution = (w, h) => {
  const squirUpperGuideLine = [];
  const squirLowerGuideLine = [];
  let ruinedSquirs = [];
  let count = 0;

  if (w < h) {
    for (let i = 1; i <= h; i++) {
      if (!Number.isInteger(i * (w / h))) {
        squirUpperGuideLine.push([Math.floor(i * (w / h)), i - 1]);
        squirLowerGuideLine.push([Math.floor(i * (w / h)), i]);
      }
    }
  } else if (w > h) {
    for (let i = 1; i <= w; i++) {
      if (!Number.isInteger(i * (h / w))) {
        squirUpperGuideLine.push([i - 1, Math.floor(i * (h / w))]);
        squirLowerGuideLine.push([i, Math.floor(i * (h / w))]);
      }
    }
  } else {
    return (w * h) - w;
  }

  ruinedSquirs = [...squirLowerGuideLine, ...squirUpperGuideLine];

  for (let i = 0; i < ruinedSquirs.length; i++) {
    for (let j = i + 1; j < ruinedSquirs.length; j++) {
      if (ruinedSquirs[i][0] === ruinedSquirs[j][0] && ruinedSquirs[i][1] === ruinedSquirs[j][1]) {
        count += 1;
        break;
      }
    }
  }

  return (w * h) - (ruinedSquirs.length - count);
};

console.log(solution(12, 8));