const atA = 65;
const atZ = 90;

function solution(name) {
  var answer = 0;
  let names = name.split('');
  let flag = 0;

  for(let i=0; i<names.length; i++) {

    const count = getCount(names[i]);
    answer += count;
    answer++;
  }

  // 마지막카운트 지우기
  answer--;
  


  return answer;
}

function getCount(str) {
  const atStr = str.charCodeAt();

  let count = atStr - atA;
  let reverse = atZ - atStr + 1;
  if (count > reverse) {
    count = reverse;
  }

  return count;
}






const b = getCount('Y');


const a = solution("JEROEN");