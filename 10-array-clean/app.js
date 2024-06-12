function reverseFilter(arr, deleteFn) {
  let filteredArr = [];
  for (let element of arr) {
    if (!deleteFn(element)) {
      filteredArr.push(element);
    }
  }
  return filteredArr;
}

function deleteNumGreater(num) {
  return num > 5;
}

console.log(reverseFilter([3, 6, 9, 2], deleteNumGreater));
