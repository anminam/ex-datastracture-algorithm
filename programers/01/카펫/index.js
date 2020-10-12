function solution(brown, yellow) {
  var answer = [];
  if (brown == 6 + yellow * 2) {
    return [yellow + 2, 3];
  } else {
    let init = 8;
    const minusNum = 2;
    for (let i = 0; i < 20000; i++) {
      const a = init - minusNum * i + yellow;
      if (brown == a) {
        return [i + 4, i + 2];
      }
    }
  }
  return null;
}

function getGaro(yellow) {
  return 6 + yellow * 2;
}

function getRect(yellow) {
  return 8 + yellow;
}
function getSe(yellow) {
  return 6 + yellow;
}

solution(24, 24);
// 1 - 8;
// 2 - 10;
// 3 - 12;
// 4 - 14;

// 4 - 12;
// 6 - 14;
// 8 - 16;

// 9 - 16;
// 12 - 18;
