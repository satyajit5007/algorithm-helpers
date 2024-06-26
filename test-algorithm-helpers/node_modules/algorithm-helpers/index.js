function binarySearch(arr, target) {
  let si = 0;
  let ei = arr.length - 1;

  while (si <= ei) {
    let mid = (si + ei) / 2;

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      ei = mid - 1;
    } else {
      si = mid + 1;
    }
  }

  return -1;
}

function kadanceAlgorithm(arr) {
  let currentMax = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    max = Math.max(max, currentMax);
  }

  return max;
}

module.exports = {
  binarySearch,
  kadanceAlgorithm,
};
