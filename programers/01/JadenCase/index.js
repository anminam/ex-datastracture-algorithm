function solution(s) {
  s = s.toLowerCase();
  const newArr = s.split(" ");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0]) {
      newArr[i] = newArr[i][0].toUpperCase() + newArr[i].slice(1);
    }
  }
  return newArr.join(" ");
}

const a = solution("3people unFollowed me ");
console.log(a);
