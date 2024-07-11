const arr = [5, 4, 6, 7, 9, 2, 1, 3, 8];

function compare(a, b) {
  return a > b;
}

function exchange(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1])) {
        exchange(arr, j, j + 1);
      }
    }
  }
}

sort(arr);
console.log(arr);
