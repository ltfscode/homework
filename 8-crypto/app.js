// function cryptoPassword(password) {
//   let passwordArr = password.split("");
//   let passwordArrReverse = passwordArr.reverse();
//   [
//     passwordArrReverse[0],
//     passwordArrReverse[1],
//     passwordArrReverse[3],
//     passwordArrReverse[2],
//   ] = [
//     passwordArrReverse[2],
//     passwordArrReverse[1],
//     passwordArrReverse[0],
//     passwordArrReverse[3],
//   ];
//   passwordArr = passwordArrReverse.join("");
//   return passwordArr;
// }

// const cryptoPass = cryptoPassword(prompt("Введите ваш пароль"));

// console.log(cryptoPass);

// function originalPassword(password) {
//   let passwordArr = cryptoPass.split("");
//   // let passwordArrReverse = passwordArr.reverse();
//   [passwordArr[2], passwordArr[1], passwordArr[0], passwordArr[3]] = [
//     passwordArr[0],
//     passwordArr[1],
//     passwordArr[3],
//     passwordArr[2],
//   ];
//   let passwordArrReverse = passwordArr.reverse();
//   passwordArr = passwordArrReverse.join("");
//   return passwordArr;
// }

// const originalPass = originalPassword(cryptoPass);
// console.log(originalPass === prompt("Введите ваш пароль"));

// function decryptPassword(cryptedPassword) {
//   let passwordArr = cryptedPassword.split("");
//   let passwordArrReverse = passwordArr.reverse();
//   [
//     passwordArrReverse[0],
//     passwordArrReverse[1],
//     passwordArrReverse[3],
//     passwordArrReverse[2],
//   ] = [
//     passwordArrReverse[2],
//     passwordArrReverse[1],
//     passwordArrReverse[0],
//     passwordArrReverse[3],
//   ];
//   passwordArr = passwordArrReverse.join("");
//   return passwordArr;
// }

// function checkPassword(encryptedPassword, originalPassword) {
//   if (!encryptedPassword || !originalPassword) {
//     return false;
//   }
//   return originalPassword === decryptPassword(encryptedPassword);
// }

// console.log(checkPassword(prompt("Введите ваш пароль"), prompt("Введите ваш пароль")));

function cryptoPassword(password) {
  return password.split("").reverse().join("");
}

function checkPassword(encryptedPassword, originalPassword) {
  if (!encryptedPassword || !originalPassword) {
    return false;
  }
  return originalPassword === cryptoPassword(cryptoPassword(encryptedPassword));
}

console.log(
  checkPassword(prompt("Введите ваш пароль"), prompt("Введите ваш пароль"))
);
