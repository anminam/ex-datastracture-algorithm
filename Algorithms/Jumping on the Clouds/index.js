function jumpingOnClouds(c) {
  let result = 0;
  let pos = 0;
  const len = c.length;

  while (pos < len) {
    const num = pos + 2;
    if (num < len) {
      if (c[num] === 0) {
        pos += 2;
        result++;
        continue;
      }
    }

    if (c[pos + 1] === 0) {
      result++;
    }
    pos++;
  }

  return result;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
