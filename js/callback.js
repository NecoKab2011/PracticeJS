const sumNumbers = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (const result of numbers) {
    sum += result;
  }
  return sum;
};
console.log(sumNumbers(4, 6));
console.log(sumNumbers(4, 5, 6, 8, 10));

const createMessage = function (sumNumbers) {
  let sumOfNumbers = sumNumbers(15, 2, 10);
  const message = `Result of numbers ${sumOfNumbers} `;
  return message;
};

console.log(createMessage(sumNumbers));

// 1. оголошення функції function declaration

// const result = makeInfo(countLength, 'test');
// console.log(result);

// function makeInfo (countLength, stringM) {

//    const lengthMes = countLength(stringM);
//     const mess = The length of string is ${lengthMes};
//     return mess
// } це є функція вищого порядку

// function countLength (stringM) {
//     const mess = stringM;
//     const messLength = mess.length;
//     return messLength
// }    це є колбек

// 2. Функціональний вираз function expression

// const countLength = function (stringM) {
//     const mess = stringM;
//     const messLength = mess.length;
//     return messLength // 7
// }

// const makeInfo = function (countLength, stringM, number) {

//     const lengthMes = countLength(stringM);
//      const mess = The length of string is ${lengthMes}. Test number is ${number};
//      return mess
//  }

//  const result = makeInfo(countLength, 'test message kehbvkevb', 15);
//  console.log(result);

//  const resul2 = makeInfo(countLength, 'My name is Tetiana', 100);
//  console.log(resul2);

//  const resul3 = makeInfo(countLength, 'I love to travel', 1000);
//  console.log(resul3);

// було
// const makeInfo = function ( stringM, number) {

//     const lengthMes = stringM.length;
//      const mess = The length of string is ${lengthMes}. Test number is ${number};
//      return mess
//  }

// стало (стрілкова функція)

// const makeInfo =  ( stringM, number) => {

//     const lengthMes = stringM.length;
//      const mess = The length of string is ${lengthMes}. Test number is ${number};
//      return mess
//  }

// скоротимо

// const makeInfo =  ( stringM, number) => {
//      return The length of string is ${stringM.length}. Test number is ${number}
//  }

//  const resul3 = makeInfo( 'I love to travel', 1000);
//  console.log(resul3);

//  скоротимо ще через неявне повернення (якщо у {} стоїть одразу return, то ми їх можемо скоротити та після стрілки одразу прописати результат, який повертає функція)

const makeInfo = (stringM, number) =>
  `The length of string is ${stringM.length}. Test number is ${number}`;

const resul3 = makeInfo("I love to travel", 1000);
console.log(resul3);

// Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";

// const findUserLogin = function (arrayLogins, trueLoginFind) {
//   let message = `Користувач ${trueLoginFind} не знайдено.`;
//   for (const oneLogin of arrayLogins) {
//     if (trueLoginFind === oneLogin) {
//       message = `Користувач ${trueLoginFind} знайдено.`;
//     }
//   }
//   return message;
// };

// const findLogin = function (loginToFind, trueLoginFind) {
//   if (trueLoginFind.includes(loginToFind)) {
//     return Користувач ${loginToFind} знайдено.;
//   } else {
//     return Користувач ${loginToFind} не знайдено.;
//   }
// };

// const findLogin = function (loginToFind, trueLoginFind) {
//   return trueLoginFind.includes(loginToFind)
//     ? Користувач ${loginToFind} знайдено.
//     : Користувач ${loginToFind} не знайдено.;
// };

//Скоротимо у вигляді стрілкової функції

// const findLogin = (loginToFind, trueLoginFind) =>
//     trueLoginFind.includes(loginToFind)
//       ? 'Користувач ${loginToFind} знайдено.'
//       : 'Користувач ${loginToFind} не знайдено.;'


// Напиши функцию findSmallesNumber(numbers) пошуку самого маленького 
// числа в масиві, при умові, що числа унікальні (не повторюються).
// const findSmallesNumber = function (numbers) {
//     let theSmallesNumber = numbers[0]
//     for (const number of numbers) {
//         if (number < theSmallesNumber) {
//             theSmallesNumber = number;
//         }
//        }
//     return theSmallesNumber
// }

// const findSmallesNumber = numbers => {
//     let theSmallesNumber = numbers[0]
//     for (const number of numbers) {
//         if (number < theSmallesNumber) {
//             theSmallesNumber = number;
//         }
//        }
//     return theSmallesNumber
// }

// const findSmallesNumber = function (numbers) {

//     return Math.min(...numbers)
// }

const findSmallesNumber = numbers => Math.min(...numbers);


console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4