const generateArr = (num) => {
  let aux = [];

  for (let i = 0; i <= num; i++) {
    aux.push(i);
  }
  return aux;
};
const num = generateArr(100);
const randNum = Math.floor(Math.random() * 100);
console.log("rand", randNum);

const binarySearch = (arr, key) => {
  console.log(arr);
  let mid = Math.floor(arr.length / 2);
  if (key < arr[0] || key > arr[arr.length - 1]) return "number not found";
  if (key === arr[mid]) return arr[mid];
  else return helper(arr, key, mid);
};

const helper = (arr, key, mid) => {
  if (key < arr[mid]) return binarySearch(arr.slice(0, mid), key);
  else return binarySearch(arr.slice(mid), key);
};
console.log(binarySearch(num, randNum));
