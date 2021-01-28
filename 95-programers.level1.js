// 시저 암호

// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

function solution(s, n) {
  let answer = '';
  const box = [];

  const lowerBox = [
    // {
    //   index = 0,
    //   value = 0
    // }
  ];
  const upperBox = [];
  const space = [];

  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/.test(s[i])) {
      lowerBox.push({ index: i, value: s.charCodeAt(i) });
    } else if (/[A-Z]/.test(s[i])) {
      upperBox.push({ index: i, value: s.charCodeAt(i) });
    } else {
      space.push({ index: i, value: 32 });
    }
  }

  const newLowerBox = lowerBox.map(char => {
    return char.value + n > 122 ? { ...char, value: (char.value + n) % 122 + 96 } : { ...char, value: char.value + n };
  })
  const newUpperBox = upperBox.map(char => {
    return char.value + n > 90 ? { ...char, value: (char.value + n) % 90 + 64 } : { ...char, value: char.value + n };
  })

  answer = [ ...newLowerBox, ...newUpperBox, ...space ].sort((a, b) => a.index - b.index).map(char => String.fromCharCode(char.value)).join('')

  return answer;
}

console.log(solution("AaZz", 25))