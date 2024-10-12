console.dir(Number)

let testNumber = "12";
console.log(testNumber);
// testNumber = 15;
// console.log(testNumber)
testNumber = Number(testNumber);
console.log(testNumber)

console.log(Number ("test"))

console.log(Number (true))

console.log(Number (null));

console.log(Number (undefined));

const widthElement = "50.5px";
console.log(typeof widthElement);
const widthEl = Number.parseFloat(widthElement);
console.log(typeof widthEl);
const heightElement = "70.5px"
console.log(Number.parseInt(heightElement));

const testNum = "123546yt";
const testNumFloat = Number.parseFloat(testNum);
console.log(testNumFloat);
console.log( "Is NaN?", Number.isNaN(testNumFloat));

console.log((0.1 * 10 + 0.2 * 10) / 10)
console.log(0.6 + 0.3)
console.log((0.6 * 100 + 0.3 * 100) / 100)

console.log(Math);
console.log(Math.max(5, 7, 8, 9));
// шукає максимальне число
console.log(Math.min(5, 7, 8, 9));
// шукає мінімальне число
console.log(Math.pow(5, 3));
// підносить до степення
console.log(Math.ceil(5.3));
// У більшу сторону
console.log(Math.floor(5.9));
// У меншу сторону
console.log(Math.round(5.6));
console.log(Math.sqrt(625));
const max = 52
const min = 1
console.log(Math.round(Math.random() * (max - min) + min));
// const randomNumber = Math.random() * (max - min) + min;
// console.log(Math.round(randomNumber))