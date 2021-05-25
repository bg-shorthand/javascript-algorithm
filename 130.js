// 유저가 주문한 음식 데이터를 이용해 음식을 가장 다양하게 주문한 유저는 누구인지 알아보려 합니다. 유저는 주문 한 번당 음식 여러 종류를 주문하며, 같은 음식을 여러 번 주문할 수도 있습니다.

// 예를 들어 음식 주문 데이터가 다음과 같은 경우

// ["alex pizza pasta", "alex pizza pizza", "alex noodle", "bob pasta", "bob noodle sandwich pasta", "bob steak noodle"]

// "alex"는 "pizza", "pasta", "noodle"을 주문했습니다.
// "bob"은 "pasta", "noodle", "sandwich", "steak"를 주문했습니다.
// 따라서 "bob"이 주문한 음식이 총 네 종류로 가장 많습니다.

// 유저 ID와 각 유저가 주문한 음식이 문자열 형태로 들어있는 배열 orders가 매개변수로 주어질 때, 가장 많은 종류의 음식을 주문한 유저의 아이디를 배열에 담아 return 하도록 solution 함수를 완성해주세요. 만약, 그런 유저가 여러 명이면 해당 유저들을 오름차순으로 정렬해 return 하면 됩니다.

function solution(orders) {
  let answer = [];
  const temp = {};

  orders
    .map((v) => v.split(" "))
    .forEach((v) => {
      temp[v[0]] = temp[v[0]]
        ? [...temp[v[0]], ...v].filter((v, i, arr) => arr.indexOf(v) === i)
        : [...v].filter((v, i, arr) => arr.indexOf(v) === i);
    });

  const max = Math.max(...Object.values(temp).map((v) => v.length));

  answer = Object.keys(temp)
    .filter((v) => temp[v].length === max)
    .sort();

  return answer;
}

console.log(
  solution([
    "alex pizza pasta",
    "alex pizza pizza",
    "alex noodle",
    "bob pasta",
    "bob noodle sandwich pasta",
    "bob steak noodle",
  ])
);
