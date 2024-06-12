const addressLat = 2;
const addressLong = 3;
const positionLat = 5;
const positionLong = 4;

const distance = Math.sqrt(
  (addressLat - addressLong) ** 2 + (positionLat - positionLong) ** 2
);
console.log(distance);
