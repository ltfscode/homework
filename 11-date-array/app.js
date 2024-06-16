const arrDate = ["10-02-2022", "тест", "11/12/2023", "00/13/202", "41/12/2023"];

function splitDate(str, separator) {
  return str.split(separator).map(Number);
}

function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function validateDate(date, month, year) {
  return (
    month >= 1 &&
    month <= 12 &&
    date >= 1 &&
    (date <= (isLeapYear(year) ? 29 : 28) ||
      (date <= 30 && [4, 6, 9, 11].includes(month)) ||
      (date <= 31 && [1, 3, 5, 7, 8, 10, 12].includes(month))) &&
    year > 0
  );
}

function filterDates(arr, separator) {
  return arr
    .filter((str) => {
      const [date, month, year] = splitDate(str, separator);
      return validateDate(date, month, year);
    })
    .map((str) => {
      const [date, month, year] = splitDate(str, separator);
      return `${String(date).padStart(2, "0")}.${String(month).padStart(
        2,
        "0"
      )}.${year}`;
    });
}
const ruArrDate = filterDates(arrDate, "/");

const enArrDate = arrDate
  .filter((str) => {
    const isEnFormat = str.includes("-");
    const [date, month, year] = isEnFormat ? str.split("-") : str.split("/");
    return (
      validateDate(
        parseInt(date, 10),
        parseInt(month, 10),
        parseInt(year, 10)
      ) &&
      (isEnFormat || !str.includes("/"))
    );
  })
  .map((str) => {
    const isEnFormat = str.includes("-");
    const [date, month, year] = isEnFormat ? str.split("-") : str.split("/");
    return `${String(date).padStart(2, "0")}.${String(month).padStart(
      2,
      "0"
    )}.${year}`;
  });

console.log(ruArrDate);
console.log(enArrDate);
