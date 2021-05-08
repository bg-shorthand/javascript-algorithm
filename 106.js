// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

// 숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine
// 제한사항
// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

function solution(s) {
  while (isNaN(+s)) {
    const one = s.match(/one/) ? s.match(/one/).index : null;
    s = s.split("");
    if (one !== null) s.splice(one, 3, "1");
    s = s.join("");

    const two = s.match(/two/) ? s.match(/two/).index : null;
    s = s.split("");
    if (two !== null) s.splice(two, 3, "2");
    s = s.join("");

    const three = s.match(/three/) ? s.match(/three/).index : null;
    s = s.split("");
    if (three !== null) s.splice(three, 5, "3");
    s = s.join("");

    const four = s.match(/four/) ? s.match(/four/).index : null;
    s = s.split("");
    if (four !== null) s.splice(four, 4, "4");
    s = s.join("");

    const five = s.match(/five/) ? s.match(/five/).index : null;
    s = s.split("");
    if (five !== null) s.splice(five, 4, "5");
    s = s.join("");

    const six = s.match(/six/) ? s.match(/six/).index : null;
    s = s.split("");
    if (six !== null) s.splice(six, 3, "6");
    s = s.join("");

    const seven = s.match(/seven/) ? s.match(/seven/).index : null;
    s = s.split("");
    if (seven !== null) s.splice(seven, 5, "7");
    s = s.join("");

    const eight = s.match(/eight/) ? s.match(/eight/).index : null;
    s = s.split("");
    if (eight !== null) s.splice(eight, 5, "8");
    s = s.join("");

    const nine = s.match(/nine/) ? s.match(/nine/).index : null;
    s = s.split("");
    if (nine !== null) s.splice(nine, 4, "9");
    s = s.join("");

    const zero = s.match(/zero/) ? s.match(/zero/).index : null;
    s = s.split("");
    if (zero !== null) s.splice(zero, 4, "0");
    s = s.join("");
  }

  return +s;
}

// console.log(solution("one4seveneight"));
// console.log(solution("1234"));
console.log(solution("1oneone234"));
