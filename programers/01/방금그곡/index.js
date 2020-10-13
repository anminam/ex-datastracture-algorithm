const SOUND_LIST = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const CHANGE_CODES = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "N",
  "M",
];
function solution(m, musicinfos) {
  var answer = `(None)`;
  for (let i = 0; i < musicinfos.length; i++) {
    const music = getThisMusic(m, musicinfos[i]);
    if (music) {
      answer = music;
      break;
    }
  }

  return answer;
}

function getThisMusic(m, infos) {
  let result = "";
  const infoArr = infos.split(",");
  const timeCount = getTime(infoArr[0], infoArr[1]);

  let newAc = "";
  while (newAc.length < timeCount) {
    newAc += infoArr[3];
  }

  const changedAc = changeCode(newAc);
  const changedM = changeCode(m);
  const isResult = changedAc.includes(changedM);
  if (isResult) {
    result = infoArr[2];
  }
  return result;
}
function changeCode(musicStr) {
  let newList = musicStr.split("");
  let resultList = [];
  newList.forEach((v, ii) => {
    if (newList[ii + 1] === "#") {
      v = v + newList[ii + 1];
    }
    let index = SOUND_LIST.findIndex((i) => i === v);
    if (index !== -1) {
      resultList.push(CHANGE_CODES[index]);
    }
  });
  return resultList.join("");
}
function getTime(start, end) {
  let result = 0;
  const startArr = start.split(":");
  const startTime = new Date(0, 0, 0, startArr[0], startArr[1]);
  const endArr = end.split(":");
  const endTime = new Date(0, 0, 0, endArr[0], endArr[1]);
  let value = endTime - startTime;
  result = value / 1000 / 60;
  return result;
}
// let a = solution("ABCDEFG", [
//   "12:00,12:14,HELLO,CDEFGAB",
//   "13:00,13:05,WORLD,ABCDEF",
// ]);
let b = solution("ABC", [
  "12:00,12:14,HELLO,C#DEFGAB",
  "13:00,13:05,WORLD,ABCDEF",
]);
debugger;
console.log(a);
