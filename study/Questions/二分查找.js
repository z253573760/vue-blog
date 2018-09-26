/**
 *  二分查找
 * @param {*} arr
 * @param {*} item
 * @param {*} start
 * @param {*} end
 */

function findIndex(arr, item, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return -1;
  }
  const midd = parseInt((start + end) / 2);
  if (arr[midd] === item) {
    return midd;
  }
  if (item < arr[midd]) {
    return findIndex(arr, item, start, midd - 1);
  } else {
    return findIndex(arr, item, midd + 1, end);
  }
}
const result = findIndex([1, 2, 3, 4, 5], 3);
console.log(result);

/**
 * 快排
 */
function qucikSort(_arr) {
  if (_arr.length < 1) return _arr;
  //   const midd = parseInt(arr.length / 2);
  const [base, ...arr] = _arr;
  const left = [];
  const right = [];
  for (const item of arr) {
    if (item < base) left.push(item);
    else right.push(item);
  }
  return [...qucikSort(left), base, ...qucikSort(right)];
}
const arr = qucikSort([3, 9, 5, 2, 4, -1]);
console.log(arr);
/**
 * 冒泡
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
const arr2 = bubbleSort([3, 9, 5, 2, 4, -1]);
console.log(arr2);
