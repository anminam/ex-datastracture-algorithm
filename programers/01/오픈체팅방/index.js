function solution(record) {
  var answer = [];
  var arr = record.map(i=>{
    var tempArr = i.split(' ');
    return {
      imp:tempArr[0],
      uid:tempArr[1],
      name:tempArr[2],
    }
  });

  var copyArr = arr.slice();
  let lengthCount = 0;
  while(copyArr.length) {
    const item = copyArr.shift();
    // if('Change' === item.imp) {
    changeName(item.uid, item.name, arr, lengthCount);
    // }
    if(!item.name) {
      const findedObj = arr.find(i => i.uid == item.uid);
      arr[lengthCount].name = findedObj.name;
    }
    lengthCount++;
  }
  
  answer = start(arr);
  
  return answer;
}

function start(arr) {
  const answer = [];
  arr.forEach(i => {
    switch(i.imp) {
      case "Enter":
        answer.push(getEnter(i));
        break;
      case "Leave":
        answer.push(getLeave(i));
        break;
    }
  })

  return answer;
}

function changeName(uid, name, arr, end) {
  arr.forEach((obj,i) => {
    if(i <= end && obj.uid === uid) {
      obj.name = name;
    }
  });
}

function getEnter(user) {
  return `${user.name}님이 들어왔습니다.`;
}

function getLeave(user) {
  return `${user.name}님이 나갔습니다.`;
}
// function getChange(user) {
//   return `${user.name}님이 나갔습니다.`;
// }
const value = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
const a = solution(value);
console.log(a);
