let arr = [4, 7, 3, 5, 1, 2, 6, 8, 9];

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return helper(mergeSort(left), mergeSort(right));
};

function helper(left, right) {
  let l = 0;
  let r = 0;
  let aux = [];

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      aux.push(left[l]);
    } else {
      aux.push(right[r]);
    }
  }
  return aux;
}
