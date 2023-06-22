// KATA 1
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  const sum = marks.reduce((ttl,cv) => ttl + cv, 0)
  return Math.floor(sum/marks.length)
}

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,2,3,4,5]))

// KATA 2
//  https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0) ? true:false;
}
console.log(isDivisible(3,3,4))
console.log(isDivisible(12,3,4))
console.log(isDivisible(48,3,4))

// KATA 3
// https://www.codewars.com/kata/56200d610758762fb0000002/train/javascript
function addFive(num) {
  return num + 5;
}
// KATA 4
// https://www.codewars.com/kata/55cb854deb36f11f130000e1/train/javascript
// celsius = (fahrenheit - 32) * (5/9)
function weatherInfo(temp) {
  const celsius = (temp - 32) * (5/9);
  return (celsius <= 0) ? `${celsius} is freezing temperature` : `${celsius} is above freezing temperature`;
}

console.log(weatherInfo(0))
console.log(weatherInfo(31))
console.log(weatherInfo(56))
console.log(weatherInfo(95))

// KATA 5
//  https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/javascript
const isReallyNaN = (val) => Number.isNaN(val);

console.log(isReallyNaN(37))
console.log(isReallyNaN(undefined))
console.log(isReallyNaN(NaN))

// KATA 6
//  https://www.codewars.com/kata/55849d76acd73f6cc4000087/train/javascript
function playerRankUp (points) {
  return points >= 100 ? `Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.` : false;
}

console.log(playerRankUp(64))
console.log(playerRankUp(101))