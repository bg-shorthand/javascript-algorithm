// 4방향으로 움직일 수 있는 로봇이 좌표평면의 원점에 서 있습니다. 이 로봇에게 알파벳으로 명령을 내려 특정 방향으로 1칸만큼 이동을 시킬 수 있습니다. 로봇은 4방향으로 움직일 수 있으며, U는 위, L은 왼쪽, R은 오른쪽, D는 아래로 이동하라는 명령어입니다. 로봇에게 명령을 하나의 문자열로 묶어서 내릴 수 있습니다. 예를 들어, 로봇에게 다음과 같은 명령을 내렸다고 가정해 봅시다.

// URLLDRLR

// 로봇은 (0,0) → (0,1) → (1,1) → (0,1) → (-1,1) → (-1,0) → (0,0) → (-1,0) → (0,0) 의 순서로 이동하여 원점으로 돌아오게 됩니다. 하지만 우리는 이 명령어 중 연속되는 일부 명령어만을 내려도 원점으로 돌아오게 할 수 있습니다. 그 경우는 다음과 같습니다.

// 명령어	명령어의 범위(a번째 문자열~b번째 문자열을 의미)
// RL	[1,2]
// RL	[5,6]
// LR	[6,7]
// URLLDR	[0,5]
// URLLDRLR	[0,7] ※명령어 전체도 포함
// 결론적으로 위의 명령어의 전체, 또는 연속되는 일부 명령어 중 로봇이 출발하여 시작지점으로 돌아오는 경우의 수는 5가지입니다.

// 로봇의 명령어 s가 주어질 때, 경우의 수를 return 하는 solution 함수를 완성해 주세요.

function solution(s) {
  let answer = 0;
  const temp = [0, 0];
  const arr = s.split("");

  arr.forEach((v) => {
    switch (v) {
      case "U":
        {
          temp[1] += 1;
          if (!(temp[0] || temp[1])) answer++;
        }
        break;
      case "D":
        {
          temp[1] -= 1;
          if (!(temp[0] || temp[1])) answer++;
        }
        break;
      case "R":
        {
          temp[0] += 1;
          if (!(temp[0] || temp[1])) answer++;
        }
        break;
      case "L":
        {
          temp[0] -= 1;
          if (!(temp[0] || temp[1])) answer++;
        }
        break;
      default:
        break;
    }
  });

  if (arr.length > 1) {
    arr.shift();
    answer += solution(arr.join(""));
  }

  return answer;
}

console.log(solution("URLLDRLR"));
console.log(solution("RLDU"));
console.log(solution("URDLDRULDLRUDLU"));
