function solution(relation) {
  let answer = 0;
  let attrNum = relation[0].length;
  let combList = [];
  let keyList = [];
  // 조합 배열 생성
  // for (let i=1; i<=attrNum; i++){
  //   comb(combList, [], 0, attrNum, i, 0);
  // }
  
  comb(combList, [], 0, 4, 1, 2);
  debugger;

  console.log(keyList);
  return keyList.length;
}

// 조합 배열 생성
function comb(list, arr, idx, n, r, target){
  if (r===0){
    list.
      list.push(Object.assign([], arr));
  }else if (target === n){
      return ;
  }else{
      arr[idx] = target;
      comb(list, arr, idx + 1, n, r - 1, target + 1);
      comb(list, arr, idx, n, r, target + 1);
  }
}

let a = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]
solution(a);