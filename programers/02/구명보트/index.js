function solution(people, limit) {
  var answer = 0;
  people.sort((a,b) => b-a);

  while(people.length) {
    let one = people.pop();

    for(let i =0; i<people.length;i++) {
      if(one + people[i] <= 100) {
        people.splice(2,1);
        break;
      }
    }
    answer++;
  }
  return answer;
}
const a = [70, 50, 80, 50];
const l = 100;
solution(a,l);