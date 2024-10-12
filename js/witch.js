// const typeofSubscription = prompt("Введіть тип підписки");
// let cost

// if(typeofSubscription === "standart".toLowerCase()) {
//     cost = 50;
//     alert(`Ціна підписки ${cost}`)
// } else if (typeofSubscription === "regular".toLowerCase()) {
//     cost = 25;
//     alert(`Ціна підписки ${cost}`)
// } else if (typeofSubscription === "vip".toLowerCase()) {
//     cost = 100;
//     alert(`Ціна підписки ${cost}`)
// } else {
//     alert("Вибачте,Ви не наш клієнт")
// }

// switch (typeofSubscription) {
//     case "standart".toLowerCase():
//     cost = 50;
//     break;
//     case "regular".toLowerCase():
//     cost = 25;
//     break;
//     case "vip".toLowerCase():
//     cost = 100;
//     break;
//     default:
//         alert("Вибачте,Ви не наш клієнт");    

// }
// alert(`Ціна підписки ${cost}`)

// switch ("Що порівнюємо") {
//  case "з чим порівнюємо":
//      якщо case true то робимо інструкцію;
//  break;
//
//  case "з чим порівнюємо":
//      якщо case true то робимо інструкцію;
//  break;
//
//  case "з чим порівнюємо":
//      якщо case true то робимо інструкцію;
//  break;
//
//  default:
//      виконується ця інструкція якщо всі case false;
// }



// Переписати код використовуючи тернарний оператор
/*
 * Тернарний оператор
 */
// const balance = 1000;
// let message;


// if(balance > 1){
//    let message = "Ваш баланс позитивний!"
//    console.log(message);
//    const a = 5;
// } else {
//    let message = "Ваш баланс негативний!"
//    console.log(message);
//    const a = 10;
// }

// const message = (balance > 1) ? "Ваш баланс позитивний" : "ваш баланс негативний"

// Використовуючи конструкцію if..else, напишіть код, що запитує: 
// ‘Яка “офіційна” назва JavaScript?’ Якщо відвідувач вводить 
// “ECMAScript”, виведіть “Правильно!”, в іншому випадку — виведіть: 
// “Ви не знаєте? ECMAScript!”

// const word = prompt("Яка “офіційна” назва JavaScript?")
// if (word === "ECMAScript") {
//     alert("Правильно!")
// } else {
//     alert("Ви не знаєте? ECMAScript!")
// }



// Напиши скрит підрахунку суми покупки зі знижкою в залежності 
// від витраченої суми за весь час (партнерська програма).
// Користувач вводить в інпут сумму витрачену в даному магазині і 
// отримує розмір знижки як результат.
// - Загальна сума витрачених коштів зберігається в змінній totalSpent
// - Сума поточного платежа зберігається в змінній payment
// - Знижка зберігається в змінній discount

// - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
// - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
// - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
// - Якщо витрачено менше 100) - не партнер, знижка 0%

// - В результаті вивести повідомлення
// «Оформляемо замовлення на суму [сума] зі знижкою [знижка]%»

// 'Бронзовий партнер, знижка 2%'
// 'Срібний партнер, знижка 5%'
// 'Золотий партнер, знижка 10%'
// 'У вас ще немає партнерської знижки'

const totalSpent = prompt(
    "Please enter the amount of money you spent in this shop"
  );
  const payment = 1500;
  let discount;
  if (totalSpent > 100 && totalSpent < 1000) {
    discount = 2;
  } else if (totalSpent > 1000 && totalSpent < 5000) {
    discount = 5;
  } else if (totalSpent > 5000) {
    discount = 10;
  } else {
    discount = 0;
  }
  alert(`Оформляемо замовлення на суму ${payment} зі знижкою ${discount}%`);

// Світч використовуємо коли строге порівняння