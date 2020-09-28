function solution(genres, plays) {
  var answer = [];
  const obj = {};
  genres.forEach((item, i) => {
    if (!obj[item]) {
      obj[item] = { list: [], total: 0 };
    }
    obj[item].list.push({ value: plays[i], index: i });
    obj[item].total += plays[i];
  });
  const lankGenres = [];
  for (let i in obj) {
    lankGenres.push(obj[i]);
  }

  lankGenres.sort((i, b) => b.total - i.total);
  for (let i of lankGenres) {
    i.list.sort((j, k) => k.value - j.value);
  }

  // 결과맨
  for (let i of lankGenres) {
    i.list = i.list.slice(0, 2);
    for (let j of i.list) {
      answer.push(j.index);
    }
  }

  // console.log("obj", obj);
  return answer;
}

var a = solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

console.log("답", a);
