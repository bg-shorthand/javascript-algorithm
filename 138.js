function solution(record) {
  let answer = [];
  let nickState = [];

  record = record
    .map((v) => v.split(" "))
    .map((v) => ({
      action: v[0],
      uid: v[1],
      nickname: v[2] ? v[2] : null,
    }));

  record.forEach((v) => {
    if (v.action === "Enter") {
      if (nickState.find((w) => w.uid === v.uid)) {
        nickState.find((w) => w.uid === v.uid).nickname = v.nickname;
        answer.map((w) =>
          w.uid === v.uid
            ? w.action === "Enter"
              ? {
                  ...w,
                  log: `${
                    nickState.find((w) => w.uid === v.uid).nickname
                  }님이 들어왔습니다.`,
                }
              : {
                  ...w,
                  log: `${
                    nickState.find((w) => w.uid === v.uid).nickname
                  }님이 나갔습니다.`,
                }
            : w
        );
      } else {
        nickState.push({ uid: v.uid, nickname: v.nickname });
      }

      answer.push({ ...v, log: `${v.nickname}님이 들어왔습니다.` });
      console.log("nickState", nickState);
      console.log(answer);
    } else if (v.action === "Leave") {
      answer.push({
        ...v,
        log: `${
          nickState.find((w) => w.uid === v.uid).nickname
        }님이 나갔습니다.`,
      });
      console.log("nickState", nickState);
      console.log(answer);
    } else if (v.action === "Change") {
      nickState.map((w) =>
        w.uid === v.uid ? { ...w, nickname: v.nickname } : w
      );
      console.log("nickState", nickState);

      answer.map((w) =>
        w.uid === v.uid
          ? w.action === "Enter"
            ? {
                ...w,
                log: `${
                  nickState.find((w) => w.uid === v.uid).nickname
                }님이 들어왔습니다.`,
              }
            : {
                ...w,
                log: `${
                  nickState.find((w) => w.uid === v.uid).nickname
                }님이 나갔습니다.`,
              }
          : w
      );
      console.log(answer);
    }
  });

  return answer.map((v) => v.log);
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
