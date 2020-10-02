function start(arr) {
  const length = arr.length;
  for (let targetIndex = 0; targetIndex < length; targetIndex++) {
    let searchMin = 10000;
    let minIndex = targetIndex;

    for (let searchIndex = targetIndex; searchIndex < length; searchIndex++) {
      if (searchMin > arr[searchIndex]) {
        searchMin = arr[searchIndex];
        minIndex = searchIndex;
      }
    }

    const value = arr[targetIndex];
    arr[targetIndex] = arr[minIndex];
    arr[minIndex] = value;
    console.log(arr);
  }

  return arr;
}

/**
 * O(N^2)
 */
function smallStart(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = 10000;
    let index = 0;

    for (let j = i; j < len; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    }

    const a = arr[i];
    arr[i] = arr[index];
    arr[index] = a;
    console.log(arr);
  }
}

smallStart([4, 7, 2, 3, 1, 5, 1, 2, 9, 8]);
