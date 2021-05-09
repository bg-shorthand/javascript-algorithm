// 철수는 주가 데이터를 이용해 특정 기업의 1일 주가 변화 그래프를 그리려고 합니다. 주가 데이터는 다음과 같은 형식을 가지고 있습니다.

// "price=[가격] code=[6자리 숫자] time=[날짜]"
// "price=" 뒤에는 1 이상의 자연수가 오며, 해당 시각의 주가를 나타냅니다.
// "code=" 뒤에 오는 6자리 숫자는 주식종목코드를 나타냅니다.
// "time=" 뒤에는 날짜가 YYYYMMDDHH 형식으로 주어집니다.
// 예를 들어 "2019062213"의 경우 2019년 6월 22일 13시 기준의 데이터입니다.
// 철수가 이용하려는 데이터에는 여러 기업의 정보가 뒤죽박죽 섞여 있기 때문에, 먼저 원하는 데이터만 골라내는 작업을 하려고 합니다.

// 특정 기업의 주식종목코드 company_code, 그래프를 그리려는 날짜 day, 주가 데이터 data가 매개변수로 주어질 때, 데이터에서 그래프를 그리려는 날짜에 해당되는 특정 기업의 주가 데이터만 뽑아 시간 순으로 정렬해 return 하도록 solution 함수를 완성해주세요.

function solution(code, day, data) {
  let answer = [];

  const newData = data.map((data) => data.split(" "));

  const temp = newData.filter(
    (data) => data[2].slice(5, 13) === day && data[1].slice(5) === code
  );

  temp.sort((data1, data2) => data1[2].slice(13) - data2[2].slice(13));

  answer = temp.map((data) => +data[0].slice(6));

  return answer;
}

console.log(
  solution("012345", "20190620", [
    "price=80 code=987654 time=2019062113",
    "price=90 code=012345 time=2019062014",
    "price=120 code=987654 time=2019062010",
    "price=110 code=012345 time=2019062009",
    "price=95 code=012345 time=2019062111",
  ])
);
