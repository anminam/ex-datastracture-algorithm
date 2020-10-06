const obj = {};
function fibonacci(x) {
  if (x === 1) return 1;
  if (x === 2) return 1;
  // debugger;
  if (obj[x]) return obj[x];
  return (obj[x] = fibonacci(x - 1) + fibonacci(x - 2));
}

console.log(fibonacci(0));
