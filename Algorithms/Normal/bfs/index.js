function solution(clothes) {
  let answer = 1;
  const length = clothes.length;
  const obj = {};

  clothes.forEach((item) => {
    const key = item[1];
    obj[key];
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(item[0]);
  });

  for (let val in obj) {
    const value = obj[val].length;
    answer *= value + 1;
    console.log("answer", answer);
  }

  return answer - 1;
}

const a = solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);

console.log(a);
