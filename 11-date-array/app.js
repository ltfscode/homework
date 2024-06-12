const arrDate = ["10-02-2022", "тест", "11/12/2023", "00/13/202", "41/12/2023"];

function filterDate(arr) {
  return arr.filter((item) => {
    const date = new Date(item);
    return !isNaN(date);
  });
}

const newArrDate = filterDate(arrDate);
console.log(newArrDate);
