function solution(record) {
  const newRecord = record
    .map((v) => v.split(" "))
    .map((v) => ({ action: v[0], uid: v[1], nick: v[2] ? v[2] : null }));
  const nickState = [];

  newRecord.forEach((v) => {
    const isNick = nickState.find((w) => w.uid === v.uid);

    if (v.action !== "Leave") {
      if (isNick) {
        isNick.nick = v.nick;
      } else {
        nickState.push({ uid: v.uid, nick: v.nick });
      }
    }
  });

  return newRecord
    .filter((v) => v.action !== "Change")
    .map((v) => {
      const nick = nickState.find((w) => w.uid === v.uid).nick;
      const string =
        v.action === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다.";
      return nick + string;
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
