function solution(progresses, speeds) {
  var answer = [];
  while (progresses.length) {
    let finishCount = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    if (progresses[0] >= 100) {
      for (let i = 0; i < progresses.length; i++) {
        if (progresses[i] >= 100) {
          finishCount++;
        } else {
          break;
        }
      }
    }

    for (let i = 0; i < finishCount; i++) {
      progresses.shift();
      speeds.shift();
    }

    if (finishCount > 0) {
      answer.push(finishCount);
    }
  }
  return answer;
}

const a = solution([93, 30, 55], [1, 30, 5]);
console.log(a);
