// for (let iteration = 0; iteration <= 50; iteration ++) {
// console.log(iteration)
// }

// let testMessage = "";
// for (let number = 0; number < 10; number += 1) {
//   testMessage += number;
// }
// console.log(testMessage);

// let evenNumbers = "";
// // for (let i = 0; i < 10; i += 2) {
// // evenNumbers += i
// // }
// // console.log(evenNumbers)
// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     evenNumbers += `${i}, `;
//   }
// }
// console.log(evenNumbers);

// for (let i = 3; i < 25; i +- 1){
//     if(i === 13){
//         continue
//     } else{
//      console.log(i)
//     }
// }
for (let i = 3; i < 25; i + -1) {
  if (i !== 13) {
    continue;
  } else {
    console.log(i);
  }
}

// Виведіть в консоль всі непарні числа за допомогою циклу for
// for (let i = 4; i < 33; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i)
//   }
// }

// for (let i = 4; i < 33; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//       }
// }

// Написати скрипт який буде перевіряти середній бал успішності учня.
// Прервати роботу циклу, коли середній бал буде меньше 7.

// for (let i = 12; 1 > 2; i--){
//     if(i<7){
//         break;
//     } else {
//         text += i + ", "
//     }
// }
// console.log(text)

let avarageMark = 0;
let mark;
text = "";

for (let i = 0; i < 5; i++) {
  mark = Math.round(Math.random() * (12 - 2) + 2);
  console.log(mark);
  avarageMark += mark;
}

avarageMark = avarageMark / 5;
// avarageMark /= 5;
if (avarageMark > 7) {
  text = "Середня оцінка більше 7";
} else {
  text = "Середня оцінка менше 7";
}
console.log(text);

// апиши скрипт який підраховує загальну суму зп працівників.
// Кількість робітників зберігається в змінній employees.
// ЗП кожного працівника це випадкове число від 500 до 5000.
// Записати суму в змінну totalSalary і вивести в на сторінку.

const employees = 6;
let totalSalary = 0;

for (let i = 0; i < employees; i++) {
  // totalSalary += Math.round(Math.random() * (5000 - 500) + 500)
  const salary = Math.round(Math.random() * (5000 - 500) + 500);
  totalSalary = salary;
}
console.log(`Загальна сума зарплат працівників ${totalSalary}`);

// Напиши скрипт який порахує суму всіх парних чисел, які входять в
// діапазон чисел в змінних від min до max. Наприклад, якщо min=0 и
// max=5, то діапазон 0-5, і в ньому 2 парних числа - 2 та 4, їх сума 6.
// Можна зробити отримання значень мінімального і максимального
// числа через інпут.
const min = Number(prompt("Введіть число від 0 до 5"));
const max = Number(prompt("Введіть число від 5 до 10"));
let sum = 0;

for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

