// scoreBoard 가 빈 배열로 시작, 하나씩 들어올 때마다 이전 상태와 비교
// ["alex111 100", "cheries2 200", "coco 150", "luna 100", "alex111 120", "coco 300", "cheries2 110"]

function solution(k, user_scores) {
  user_scores = user_scores
    .map((v) => v.split(" "))
    .map((v) => ({ user: v[0], score: v[1] }));
  // [{ user: 'alex111', score: 100 }, { user: 'cheries2', score: 200 }, { user: 'coco', score: 150 }, ... , { user: 'cheries2', score: 110 }]

  // 아래는 상태라고 볼 수 있다
  // num은 바뀐 횟수(리턴해야 하는 정답), scoreBoard는 이전의 점수판 상태, temp는 새 점수가 들어온 점수판 상태
  let num = 0;
  let scoreBoard = [];
  let temp = [];

  // 아래 함수는 scoreBoard(이전의 점수판 상태)와 temp(새 점수가 들어온 점수판 상태)를 비교하기 위한 함수
  // 왜 함수가 복잡하냐면, 배열은 객체기 때문에 참조값으로 평가가 됨
  // 즉, 배열 안의 요소가 같아도 참조값이 다르면 다른 것으로 판별
  // 그래서 내부의 원시값을 하나씩 비교해 주어야 한다
  const countNum = (prev, next) => {
    // 일단, length가 다르면 서로 다른 배열이니까 넘버 올림
    if (prev.length !== next.length) {
      num++;
      return;
    }

    // 이전 점수판과 다음 점수판의 유저 이름을 비교
    // 점수는 비교하지 않는 이유는
    //
    for (let i = 0; i < prev.length; i++) {
      if (prev[i].user !== next[i].user) {
        num++;
        return;
      }
    }
  };

  // 아래 while문 조건은, user_scores가 빈 배열일 때까지,
  // 즉, user_scores에서 앞에서부터 하나씩 빼서 temp에 넣을 거야
  while (user_scores.length > 0) {
    //
    // temp에 새로운 점수를 넣음
    temp.push(user_scores[0]);

    // 이전 상태보다 length가 하나 더 많아진 상태에서,
    // 점수를 기준으로 내림차순하고,
    temp.sort((a, b) => b.score - a.score);
    // 이름을 기준으로 필터링
    temp = temp
      .map((v) => v.user)
      .filter((v, i, arr) => arr.indexOf(v) === i)
      .map((v) => ({
        user: v,
        score: temp.find((w) => w.user === v).score,
      }));

    // 배열의 길이를 자름
    if (temp.length > k) temp.length = k; // arr = [1, 2, 3, 4]; arr.length = 2; => arr은 [1, 2]가 됨

    // -> 여기까지 새로운 점수가 들어간 점수판을 만든 것

    user_scores.shift();

    countNum(scoreBoard, temp);

    scoreBoard = [...temp];
  }

  return num;
}
