// 문자열 편집기에 한 줄짜리 문자열이 입력되어 있으며, 처음에는 커서가 문자열의 가장 오른쪽에 있습니다. 이 편집기에서는 다음과 같은 동작을 수행합니다.

// 명령어	동작
// L	현재 커서가 있는 위치를 왼쪽으로 한 칸 이동시킵니다. 커서가 전체 문자열의 가장 왼쪽에 있으면 아무런 동작도 하지 않습니다.
// R	현재 커서가 있는 위치를 오른쪽으로 한 칸 이동시킵니다. 커서가 전체 문자열의 가장 오른쪽에 있으면 아무런 동작도 하지 않습니다.
// D	현재 커서가 있는 위치의 왼쪽에 있는 문자를 하나 삭제합니다. 삭제된 문자의 오른쪽에 있던 문자열은 모두 한 칸씩 왼쪽으로 이동합니다. 삭제된 문자의 오른쪽에 있던 문자열의 가장 왼쪽에 커서가 위치하게 됩니다. 커서가 전체 문자열의 가장 왼쪽에 있으면 아무런 동작도 하지 않습니다.
// I @	현재 커서가 있는 위치의 오른쪽에 있는 문자를 @문자로 대치합니다. 대치된 문자의 바로 오른쪽에 커서가 위치하게 됩니다. 커서가 전체 문자열의 가장 오른쪽에 있으면 P @명령어와 같은 동작을 합니다.
// P @	현재 커서가 있는 위치에 문자를 하나 삽입합니다. 삽입된 문자의 오른쪽에 커서가 위치하게 됩니다. 삽입된 문자의 뒤에 있던 문자열은 한 칸씩 뒤로 이동합니다.
// 영어 소문자와 대문자로 이루어진 한 줄짜리 문자열과 N개의 명령어가 주어질 때, N개의 명령어를 순서대로 실행한 뒤 편집기에 남아있는 문자열을 반환하는 함수를 완성해 주세요.

// 제한사항
// 초기 문자열 길이 L : L은 200,000이하의 음이 아닌 정수
// 명령어의 개수 N : N은 400,000이하의 자연수
// 각 명령어는 위의 표에 제시된 5가지의 형태 중 한 가지의 문자열 형태로 주어지며, @에 해당하는 문자는 1개의 문자이며 영어 소문자 또는 대문자로만 이루어져 있습니다.

function solution(InitString, command) {
  let answer = Array.from(InitString);
  let cursor = InitString.length - 1;

  command.forEach((v) => {
    if (v === "L") {
      if (cursor !== 0) cursor -= 1;
    } else if (v === "R") {
      if (cursor !== InitString.length - 1) cursor += 1;
    } else if (v === "D") {
      answer.splice(cursor, 1);
      cursor -= 1;
      console.log(answer);
    } else if (v[0] === "I") {
      answer.splice(cursor + 1, 1, v[2]);
      cursor += 1;
      console.log(answer);
    } else if (v[0] === "P") {
      answer.splice(cursor + 1, 0, v[2]);
      cursor += 1;
      console.log(answer);
    }
  });

  return answer.join("");
}

console.log(solution("abcd", ["L", "P Z", "L", "D", "R", "I x"]));
console.log(solution("", ["P a", "P b", "L", "I c", "I d"]));
