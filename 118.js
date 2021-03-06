// 인터넷 음악 방송 채널에서 무료 스트리밍 서비스를 하고 있습니다. 이 채널은 음악을 플레이 리스트에 등록된 순서에 따라 연속해서 재생합니다. 플레이 리스트에 등록된 음악은 모두 다르며, 마지막 곡을 재생한 다음에는 다시 첫 번째 곡부터 반복해서 재생합니다. 또, 모든 음악은 각각의 재생 시간만큼 재생됩니다.

// 이 스트리밍 채널에 접속해서 listen_time분 동안 음악을 들으려 합니다. 이때, 들을 수 있는 서로 다른 곡 개수의 최댓값을 구하려 합니다. 단, 음악이 정확히 '분' 단위로 흘렀을 때 접속한다고 가정하며, 곡의 일부분만 들어도 들은 개수에 포함시킵니다.

// 각 음악의 재생 시간이 재생 목록에 들어있는 순서대로 담긴 배열 play_list와 음악을 듣는 시간 listen_time이 매개변수로 주어질 때, 들을 수 있는 서로 다른 곡 개수의 최댓값을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// play_list의 길이는 1 이상 100,000 이하입니다.
// play_list의 원소는 1 이상 10,000 이하인 자연수입니다.
// 음악의 재생시간은 모두 '분'단위 입니다.
// listen_time은 1 이상 109 이하인 자연수입니다.
// 입출력 예
// play_list    listen_time    result
// [2, 3, 1, 4]    3    3
// [1, 2, 3, 4]    5    4
// [1, 2, 3, 4]    20    4
// 입출력 예 설명
// 입출력 예 #1

// music_play_1.png

// 위 그림과 같이 접속하면 3분 동안 서로 다른 음악을 최대 세 곡 들을 수 있습니다.

// 입출력 예 #2

// music_play_2.png

// 위 그림과 같이 접속하면 5분 동안 서로 다른 음악을 최대 네 곡 들을 수 있습니다.

// 입출력 예 #3

// 어떻게 접속하던 서로 다른 곡을 최대 네 곡 들을 수 있습니다.

const solution = (play_list, listen_time) => {
  let answer = 0;

  let timeTable = play_list
    .map((v, i) => Array.from({ length: v }, (v) => i))
    .flat();

  while (timeTable.length <= listen_time * 2) {
    timeTable = [...timeTable, ...timeTable];
  }

  for (let i = 0; i <= timeTable.length - listen_time; i++) {
    answer =
      timeTable
        .slice(i, i + listen_time)
        .filter((v, i, arr) => i === arr.indexOf(v)).length > answer
        ? timeTable
            .slice(i, i + listen_time)
            .filter((v, i, arr) => i === arr.indexOf(v)).length
        : answer;
  }

  return answer;
};

console.log(solution([2, 3, 1, 4], 3));
console.log(solution([1, 2, 3, 4], 5));
console.log(solution([1, 2, 3, 4], 20));
