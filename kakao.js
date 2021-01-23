function solution(n, record) {
  const answer = [];
  let a = [];
  const serverCheck = server => record.filter(v => +v[0] === server);

  for (let i = 1; i <= n; i++) {
    const serverI = [];

    a = serverCheck(i);

    a.forEach(v => {
      if ((serverI.indexOf(v) === -1) && (serverI.length <= 5)) {
        serverI.push(v);
      }
      if (serverI.length > 5) {
        serverI.shift();
      }
    });

    serverI.forEach(v => answer.push(v.match(/[a-z]+/g)[0]));
  }
  return answer;
}

console.log(solution(4, ["1 a","1 b","1 abc","3 b","3 a","1 abcd","1 abc","1 aaa","1 a","1 z","1 q", "3 k", "3 q", "3 z", "3 m", "3 b"]))