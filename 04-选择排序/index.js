const arr = [5, 4, 6, 7, 9, 2, 1, 3, 8];


function compare(a, b) {
  return a < b;
}

function exchange(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let maxIndedx = 0;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[maxIndedx], arr[j])) {
        maxIndedx = j;
      }
    }
    exchange(arr, maxIndedx, arr.length - i - 1);
  }
}
sort(arr);
console.log(arr);
