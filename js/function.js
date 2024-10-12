// const fruit = "ананас";

// function showMessage(fruit) {
//   const message = `Я люблю ${fruit}`;
//   const bigMessage = message.toUpperCase();
//   return bigMessage;
// }

// const result = showMessage(fruit);
// console.log(result);

// const result2 = showMessage("виноград");
// console.log(result2);

// const numbers = [1, 9, 45];

// function sumNums(arrayNums) {
//   let sum = 0;
//   for (let i = 0; i < arrayNums.length; i++) {
//     sum += arrayNums[i];
//   }
//   const mess = `sum = ${arrayNums}`;
//   return mess;
// }

// console.log(sumNums);

// Напишіть функцію makeGreetings(), яка при виклику буде приймати
// змінну name (наприклад, «Василь») і виводити рядок (в нашому
// випадку «Привіт, Василь»).
// Є 2 способи створити функцію
// // 1. Оголошення функції (function decloratoin)
// console.log(makeGreetings("Андрій"))
// // // Створили функцію
// function makeGreetings(userName) {
// return `Привіт, ${userName}`
// }
// // Покличемо свтворену функцію
// const message = makeGreetings("Василь");
// console.log(message)
// const secondMessage = makeGreetings("Mapk");
// console.log(secondMessagemessage)

// // 2. Функціональний вираз (function exresstion)
// Створили функцію
// const makeGreetings = function(userName) {
//     const greetings = `Привіт, ${userName}`;
//     return greetings;
// }
// // Покличемо свтворену функцію
// const message = makeGreetings("Василь");
// console.log(message)

// const secondMessage = makeGreetings("Mapk");
// console.log(secondMessagemessage)

// Напишіть функцію mul(n, m), яка приймає два аргументи і повертає
// добуток, суму і різницю цих аргументів. Перевірте її роботу.

// const mul = function(n, m) {
//     const sumMul = n + m
//     const addMul = n * m
//     const differMul = n - m
//     return `+ = ${sumMul}, * = ${addMul}, - = ${differMul}`
// }

// const resultMul = mul(8, 7)
// console.log(resultMul)

// Розглянемо, як працювати з різною кількістю аргументів

// const anotherMul = function(a, b) {
//     return a + b
// }

// const resultAnotherMul = anotherMul(45, 93)
// console.log(resultAnotherMul)

// const resultAnother = anotherMul(8, 63, 75)
// console.log(resultAnother)

// const anotherMul = function(arrayNums) {
//     let sumArrayNums = 0
//     for (let i = 0; arrayNums.length < i; i++) {
// sumArrayNums += arrayNums
//     }
//     return
// }

// const resultAnotherMul = anotherMul([45, 93])
// console.log(resultAnotherMul)

// const resultAnother = anotherMul([8, 63, 75])
// console.log(resultAnother)

// Напиши функцію myAverageScore , яка у якості аргументу отримує
// масив з оцінками, і виводить користувачу його середній результат
// у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAvera
// Для перевірки:

// const myAverageScore = function (marks) {
//     let sum = 0;
//     for (const mark of marks) {
//         sum += mark;
//     }
//     const avarageScore = sum / marks.length;
//     let avarage = ""
//     if (avarageMark > 90 || avarageMark < 101){
//         avarageScore = "A";
//     } else  if (avarageMark > 80 || avarageMark < 91){
//         avarageScore = "B";
//     } else  if (avarageMark > 70 || avarageMark < 81){
//         avarageScore = "C";
//     } else if (avarageMark > 71){
//         avarageScore = "D";
//     } else {
//         avarageScore + "The mark doesn't exist"
//     }
//     const message = "My average"
// return message
// }

// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

// c = 0 це дефолтне значення

// function sumNums(a, b, c = 0, d) {
// return a + b + c + d
// }

// console.log(sumNums(4, 6))

// function sumNums() {
//   console.log(arguments)
//   let sum = 0
//   for(const argument of arguments) {
//     sum += argument;
//   }
//   return sum;
// }

// console.log(sumNums(4, 6, 3));
// console.log(sumNums(4, 6, 3, 8, 2));
// console.log(sumNums(4, 6));
// arguments це псевдомасив, в який записуються аргументи в порожніх 
// дужках
// в arguments є мінуси - на цьому масиві працюють не всі методи масивів
// тому глянемо, як зробити з arguments звичайний масив



// function sumNums() {
//     const numbes = Array.from(arguments)
//     console.log(numbes)
//     let sum = 0
//     for(const a of numbers) {
//       sum += a;
//     }
//     return sum;
//   }

// console.log(sumNums(4, 6, 3));
// console.log(sumNums(4, 6, 3, 8, 2));
// console.log(sumNums(4, 6));

// Є інший спосіб зібрати аргументи у масив - це операція rest як три 
// крапочки(...)

// function sumNums(...numbers) {
//     console.log(numbes)
//     let sum = 0
//     for(const a of numbers) {
//       sum += a;
//     }
//     return sum;
//   }

// console.log(sumNums(4, 6, 3));
// console.log(sumNums(4, 6, 3, 8, 2));
// console.log(sumNums(4, 6));

// function makesMessage(...names) {
// const namesString = names.join(", ")
// const message = `Мої друзі - це ${namesString}`
// return message
// }

// console.log(makesMessage("Марія", "Василь", "Людмила"))
// console.log(makesMessage("Марія", "Василь", "Людмила", "Марк"))
// console.log(makesMessage("Марія"))

// глобальна область видимості
const a = 5;
console.log(a)

if (5 > 0) {
    const a = 4;
    console.log(a)
}


for (let i = 0; i < 4; i++){
const d = 0;
console.log(d)
}

// функціональна область видимості
function test () {
    const a = 7;
    console.log(a);
    const b = 9;
    console.log(b)
}

test();

// console.log(b)























