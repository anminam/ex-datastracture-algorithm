function solution(n) {
  if (n == 1 || n == 2) return 1;
  var n1 = 1;
  var n2 = 1;
  var sum = 0;

  for (let i = 3; i <= n; i++) {
    sum = n1 + n2;
    console.log(n1, n2, sum);
    sum %= 1234567;
    console.log(n1, n2, sum);
    n1 = n2;
    n2 = sum;
  }
  return sum;
}

solution(100);
