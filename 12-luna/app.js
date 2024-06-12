const Luhn = (card) => {
  let checksum = 0;
  const cardnumbers = card
    .split("")
    .map(Number);

  for (const [index, num] of cardnumbers.entries()) {
    if (index % 2 === 0) {
      let buffer = num * 2;
      buffer > 9 ? (checksum += buffer - 9) : (checksum += buffer);
    } else {
      checksum += num;
    }
  }
  return checksum % 10 === 0 ? true : false;
};

console.log(Luhn("4561-2612-1234-5467"));
console.log(Luhn("5062821234567892"));
