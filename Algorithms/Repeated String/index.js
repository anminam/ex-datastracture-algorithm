function repeatedString(s, n) {
  let strs = "";
  while (strs.length < n - s.length) {
    strs += s;
  }

  if (strs.length !== n) {
    const num = n - strs.length;
    strs += s.slice(0, num);
  }

  return strs.match(/a/g).length;
}

// repeatedString("aba", 10);
console.log(repeatedString("a", 10000000));
