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





// const length = 30;

// function randomNumber(min = 0, max = 35) {
//   return Math.ceil(Math.random() * (max - min)) + min;
// }
// const inputDates = Array.from({ length }, () => {
//   const factor = Math.random() > 0.5 ? "/" : "-";

//   const dateArray = [
//     factor === "-" ? randomNumber() : randomNumber(0, 15),
//     factor === "-" ? randomNumber(0, 15) : randomNumber(),
//     randomNumber(1900, 2050),
//   ].map((x) => x.toString().padStart(2, "0"));
//   return dateArray.join(factor);
// }).concat(
//   Array.from({ length: 10 }, () =>
//     [randomNumber(28, 32), "02", randomNumber(1900, 2050)].join("-")
//   )
// );

// function getDates(array, fn) {
//   return array
//     .map(stringToArray)
//     .filter(fn)
//     .sort(sortDatePattern)
//     .map(formatDate);
// }

// function formatDate(array) {
//   return array
//     .map((x, i) => (i === 2 ? x.padStart("0", 4) : x.padStart("0", 2)))
//     .join("-");
// }

// function sortDatePattern(a, b) {
//   let day, month, year;

//   [day, month, year] = a;
//   const dt1 = new Date(year, month - 1, day).getTime();

//   [day, month, year] = b;
//   const dt2 = new Date(year, month - 1, day).getTime();

//   return dt1 - dt2;
// }

// function stringToArray(str) {
//   let day, month, year;
//   if (str.includes("/")) {
//     [month, day, year] = str.split("/");
//   } else if (str.includes("-")) {
//     [day, month, year] = str.split("-");
//   }
//   if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
//     return null;
//   }
//   return [day, month, year];
// }

// function checkCorrectDate(array) {
//   if (array === null) {
//     return false;
//   }

//   const [day, month, year] = array.map(Number);

//   const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];

//   const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

//   // check month
//   if (month < 1 || month > 12 || year <= 0) {
//     return false;
//   }

//   // check day
//   if (day < 1 || day > 31) {
//     return false;
//   }

//   if (day === 31 && !LONG_MONTH_ARRAY.includes(month)) {
//     return false;
//   }

//   // check February for correct day and leap year
//   if (month === 2 && ((day === 29 && !isLeapYear) || day > 29)) {
//     return false;
//   }
//   return true;
// }

// const res = getDates(inputDates, checkCorrectDate);
// console.log(inputDates);
// console.log(res);