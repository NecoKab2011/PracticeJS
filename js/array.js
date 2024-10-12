const numbers = [5, 2, 7, 6];
console.log(numbers);
console.log(numbers.length);
console.log(numbers[2]);
const friends = ["Volodya", "Artem", "Mykola"];
console.log(friends.length);
console.log(friends[1]);
// numbers[4] = 3
// console.log(numbers)
// numbers[8] = 1
console.log(numbers);

// for (let i = 0; i < friends.length; i++){
// console.log(friends[i] + " це мій друг")
// }
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

// Створити багатовимірний масив та показати роботу з ним
// (доступ до елементів, цикл в циклі)
let bigSum = 0;
const matrix = [
  [1, 2, 3, 4],
  [10, 20, 30, 40],
  [100, 200, 300, 400],
];
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);

  for (let k = 0; k < matrix[i].length; k++) {
    // console.log(matrix[i][k])
    bigSum += matrix[i][k];
  }
}
console.log(bigSum);

// Напиши скрипт пошуку логіна. Якщо логіна немає, вивести
// повідомлення 'Користувач [логін] не знайдено.' Якщо знайшли логін,
// вивести повідомлення 'Користувач [логін] знайдено.'
//   - Спочатку через for
//   - Потім через for...of
//   - Логіка break
//   - Метод includes() с тернарним оператором

const clients = ["Alex", "Mary", "Mykola", "Artem"];
const clientsName = "Mykola";
let massage = "";
for (let i = 0; i < clients.length; i++) {
  // if(clientsName === clients[i]){
  //     massage = `Користувач ${clientsName} знайдено`;
  //     break;
  // } else {
  //     massage = `Користувач ${clientsName} не знайдено`;
  // }
  // message = clients[i].includes(clientsName)
  // ? `Користувач ${clientsName} знайдено`
  // : `Користувач ${clientsName} не знайдено`
  // if(clients[i] === clientsName){
  //     break
  // }
  for (const client of clients) {
    if (client === clientsName) {
      massage = `Користувач ${clientsName} знайдено`;
      break;
    } else {
      massage = `Користувач ${clientsName} не знайдено`;
    }
  }
}
console.log(massage);

for (let i = 0; i < clients.length; i++) {
  console.log(clients[i]);
}

// for(const element of clients){
//     console.log(element)
// }

// Написати скрипт який порахує сумму всіх парних чисел в масиві
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
const number = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
// for(let i = 0; i < number.length; i++){
//  if(number[i] % 2 === 0){
//     total = total + number[i]
//  }
// }
for(const numbery of number){
    if(numbery % 2 === 0){
            total = total + numbery
    }

}





















































































































































































































































































