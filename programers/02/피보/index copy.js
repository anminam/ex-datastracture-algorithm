function solution(n) {
  var answer = fibo(n);
  return answer;
}

function fibo(n) {
  if (n < 2) {
    return n;
  }

  return fibo(n - 1) + fibo(n - 2);
}

var a = fibo(5);
console.log(a);
