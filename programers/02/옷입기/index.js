function solution(clothes) {
  var answer = 0;
  const obj = {};
  clothes.forEach((v) => {
    obj[v[1]] ? (obj[v[1]] = obj[v[1]] + 1) : (obj[v[1]] = 1);
  });
  Object.keys();
  return answer;
}

const a = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

solution(a);
