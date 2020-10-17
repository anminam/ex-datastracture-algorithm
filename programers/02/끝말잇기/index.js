function solution(n, words) {
  let answer = [0, 0];
  const dupIndex = serchDup(words);
  if (dupIndex != -1) {
    answer = serchIndex(n, words.length, dupIndex);
  }
  debugger;
  return answer;
}

function serchIndex(personCount, wordLength, findIndex) {
  return [
    (findIndex % personCount) + 1,
    Math.floor(findIndex / personCount) + 1,
  ];
}

function serchDup(arr) {
  let result = -1;
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const oldStr = arr[i - 1];
    const newStr = arr[i];
    if (oldStr[oldStr.length - 1] !== newStr[0]) {
      result = i;
      break;
    }
    for (let j = 0; j < i; j++) {
      const targetStr = arr[j];
      if (newStr === targetStr) {
        result = i;
        break;
      }
    }
  }

  return result;
}

// const a = "baabaa";
const a = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];
const b = [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
];
solution(2, []);
// solution(5, b);
