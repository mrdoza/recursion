//fibinocci using iteration

let fibArrayI = [1];

function fibsI(n) {
  let a = 0,
    b = 1,
    f = 1;
  for (let i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
    fibArrayI.push(f);
  }
  return f;
}
fibsI(8);
console.log(fibArrayI);

//fibinocci using recursion

let fibArrayR = [0, 1];

function fibsR(n) {
  if (n <= 1) {
    return n;
  }
  fibArrayR[n] = fibsR(n - 1) + fibsR(n - 2);
  return fibArrayR[n];
}
fibsR(8);
console.log(fibArrayR);

//mergeSort using recursion

let arr = [38, 27, 43, 3, 9, 82, 10];
let sortedArray = [];
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

sortedArray = mergeSort(arr);
console.log(sortedArray);
