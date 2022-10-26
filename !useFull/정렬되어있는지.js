// 오름차순인지
function isASC(arr) {
  if (arr.length <= 1) {
    return true;
  }

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
