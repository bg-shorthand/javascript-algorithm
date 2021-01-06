// 오늘을 기준으로 YYYY-MM-DD 형식의 문자열을 요소로 갖는 배열로 일주일 간의 날짜를 구하는 함수를 완성하라. 단, 함수가 반환하는 배열은 일요일부터 시작해서 토요일까지 구성한다.

function getCurrentWeek() {
  const day = 86400000;
  let SUN = 0;
  switch (new Date().getDay()) {
    case 0: SUN = new Date();
      break;
    case 1: SUN = new Date(new Date() - 86400000 * 1);
      break;
    case 2: SUN = new Date(new Date() - 86400000 * 2);
      break;
    case 3: SUN = new Date(new Date() - 86400000 * 3);
      break;
    case 4: SUN = new Date(new Date() - 86400000 * 4);
      break;
    case 5: SUN = new Date(new Date() - 86400000 * 5);
      break;
    case 6: SUN = new Date(new Date() - 86400000 * 6);
      break;
  }
  return Array.from({ length: 7 }, (_, i) => new Date(+SUN + 86400000 * i));
}

console.log(getCurrentWeek());
/*
오늘이 2020-04-21인 경우,
[
  '2020-04-19',
  '2020-04-20',
  '2020-04-21',
  '2020-04-22',
  '2020-04-23',
  '2020-04-24',
  '2020-04-25'
]
*/