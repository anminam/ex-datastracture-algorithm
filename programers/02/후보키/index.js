function solution(relation) {
  let answer = 0;
  let length = relation[0].length;
  let combList = [];
  let keyList = [];
  // 조합 배열 생성
  for (let i = 1; i <= length; i++) {
    comb(combList, [], 0, i, 0, length);
  }

  // comb(combList, [], 0, 4, 1, 2);
  debugger;

  console.log(keyList);
  return keyList.length;
}

// 조합 배열 생성
function comb(list, arr, idx, r, target, max) {
  console.log(list, arr, idx, r, target, max);
  debugger;
  if (r === 0) {
    list.push([...arr]);
    // list.push(Object.assign([], arr));
  } else if (target === max) {
    return;
  } else {
    arr[idx] = target;
    comb(list, arr, idx + 1, r - 1, target + 1, max);
    comb(list, arr, idx, r, target + 1, max);
  }
}

let a = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];
solution(a);
