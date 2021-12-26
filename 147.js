// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// k번 이상 신고된 유저는 즉시 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 게시판 이용이 정지된 유저도 불량 이용자를 신고할 수 있습니다.
// 다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

// 유저 ID	유저가 신고한 ID	설명
// "muzi"	"frodo"	"muzi"가 "frodo"를 신고했습니다.
// "apeach"	"frodo"	"apeach"가 "frodo"를 신고했습니다.
// "frodo"	"neo"	"frodo"가 "neo"를 신고했습니다.
// "muzi"	"neo"	"muzi"가 "neo"를 신고했습니다.
// "apeach"	"muzi"	"apeach"가 "muzi"를 신고했습니다.
// 각 유저별로 신고당한 횟수는 다음과 같습니다.

// 유저 ID	신고당한 횟수
// "muzi"	1
// "frodo"	2
// "apeach"	0
// "neo"	2
// 위 예시에서는 2번 이상 신고당한 "frodo"와 "neo"의 게시판 이용이 정지됩니다. 이때, 각 유저별로 신고한 아이디와 정지된 아이디를 정리하면 다음과 같습니다.

// 유저 ID	유저가 신고한 ID	정지된 ID
// "muzi"	["frodo", "neo"]	["frodo", "neo"]
// "frodo"	["neo"]	["neo"]
// "apeach"	["muzi", "frodo"]	["frodo"]
// "neo"	없음	없음
// 따라서 "muzi"는 처리 결과 메일을 2회, "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.

// 이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.

function solution(id_list, report, k) {
  const reportPerUser = {};

  id_list.forEach((v) => {
    reportPerUser[v] = [];
  });

  const _report = report.map((v) => v.split(" "));

  _report.forEach((v) => {
    reportPerUser[v[0]].push(v[1]);
  });

  id_list.forEach((v) => {
    reportPerUser[v] = reportPerUser[v].filter(
      (w, i, arr) => arr.indexOf(w) === i
    );
  });

  //

  const reportedUser = {};
  id_list.forEach((v) => {
    reportPerUser[v].forEach((w) => {
      if (reportedUser[w]) reportedUser[w]++;
      else reportedUser[w] = 1;
    });
  });

  //

  const stopUser = [];

  const keys = Object.keys(reportedUser);

  keys.forEach((v) => {
    if (reportedUser[v] >= k) stopUser.push(v);
  });

  //

  const answer = Array.from({ length: id_list.length }, (v) => (v = 0));

  id_list.forEach((v, i) => {
    reportPerUser[v].forEach((w) => {
      if (stopUser.indexOf(w) >= 0) {
        answer[i]++;
      }
    });
  });

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);
