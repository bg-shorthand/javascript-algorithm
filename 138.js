function solution(record) {
  const answer = [];

  const newRecord = record
    .map((v) => v.split(" "))
    .map((v) => ({ action: v[0], uid: v[1], nick: v[2] ? v[2] : null }));
  const nickState = [];

  newRecord.forEach((v) => {
    const isNick = nickState.find((w) => w.uid === v.uid);

    if (v.action === "Enter") {
      answer.push({ action: "님이 들어왔습니다.", uid: v.uid });
      if (isNick) {
        isNick.nick = v.nick;
      } else {
        nickState.push({ uid: v.uid, nick: v.nick });
      }
    } else if (v.action === "Leave") {
      answer.push({ action: "님이 나갔습니다.", uid: v.uid });
    } else if (v.action === "Change") {
      if (isNick) {
        isNick.nick = v.nick;
      } else {
        nickState.push({ uid: v.uid, nick: v.nick });
      }
    }
  });

  return answer.map((v) => {
    const nick = nickState.find((w) => w.uid === v.uid).nick;
    return nick + v.action;
  });
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
