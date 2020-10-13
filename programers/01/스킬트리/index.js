function solution(skill, skill_trees) {
  var answer = 0;
  const skills = skill_trees.forEach((v) => {
    const isPass = find(skill.split(""), v.split(""));
    console.log(isPass, v);
    if (isPass) {
      answer++;
    }
  });
  return answer;
}

function find(queue, trees) {
  let result = true;
  const item = trees[0];
  const findIndex = queue.findIndex((v) => v === item);
  if (findIndex != 0) {
    for (let i = findIndex - 1; i >= 0; i--) {
      const findQueueIndex = trees.findIndex((v) => v === queue[i]);
      if (findIndex < findQueueIndex || findQueueIndex === -1) {
        return false;
      }
    }
  }
  return result;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
// solution("CBD", ["BDA"]);
