function moveZero(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}

console.log(moveZero([3, 5, 0, 6, 0, 6, 6, 2, 0, 2, 1, 5]));
