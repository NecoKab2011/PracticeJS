// const message = "Hello people";
// console.log(message);
// console.log(message.indexOf("o"));

// const letters = message.split("");
// console.log(letters);

// const words = message.split(" ");
// console.log(words);

// const pwords = message.split("p");
// console.log(pwords);

// Метод join робить з масиву рядок

// const testJoin = ["city", "town", "build"];
// const messageJoin = testJoin.join("~|");
// console.log(messageJoin);

// Метод IndexOf шукає перше співпадіння, якщо не знайшов, то видає -1

// const names = ["Gale", "Mortis", "Bull", "Surge"];
// console.log(names.indexOf("Surge"));
// console.log(names.indexOf("Mortis"));
// console.log(names.indexOf("Colt"));
// console.log(names.indexOf("B"));

// const numbers = [2, 6, 8, 12];
// const isNumber = numbers.includes(5);
// console.log(isNumber);

// const array = ["gojj", "hghfjgh", "ddd", "rte"];
// console.log(array);
// array.shift();
// console.log(array);
// array.pop();
// console.log(array);
// array.unshift("uyt");
// console.log(array);
// array.push("rtei", "tyr");
// console.log(array);

// const fruits = ["apple", "banana", "mango", "kiwi"];
// const fruitsCopy = fruits.slice(0, fruits.length - 1);
// console.log(fruits.slice(1, 3));
// console.log(fruitsCopy);
// console.log(fruits === fruitsCopy);
// const newFruits = fruits.slice(1, 3);
// console.log(newFruits[1]);
// const lastElemetIndex = fruits.length - 1;
// const elementLast = fruits[lastElemetIndex];
// console.log(elementLast);
// console.log(newFruits);
// console.log(fruits);

// //
// const friends = ["Mary", "Gray", "Vova", "Lola"];
// -
// console.log(friends)
// const bestFriends = friends.splice(1, 3);

// +
// console.log(friends)
// console.log(bestFriends)
// const myFriends = friends.splice(2, 0, "Artem");
// console.log(myFriends)

// оновлення
// console.log(friends)
// const bestFriends = friends.splice(1, 1, "Fang", "Willow")

// Створіть масив styles з елементами 'Джаз' i 'Блюз'.
// Додайте 'Рок-н-ролл' в кінець масиву. Замініть значення в середині
// масиву на 'Класика'. Видаліть перший елемент масиву і покажіть
// його. Додайте 'Реп' і 'Реггі'  на початок масиву. Виведіть масив в
// консоль.
// const styles = ["Джаз", "Блюз"];

// styles.push["Рок-н-ролл"];
// console.log(styles);
// const deleteElement = styles.splice(0, 2);
// console.log(deleteElement);
// const addElement = styles.splice(2, 0, "Класика");
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift("Реп", "Реггі");
// console.log(styles);

// const styles = ["Джаз", "Блюз"];
// styles.splice(styles.length, 0, "Рок-н-ролл");
// styles.splice(1, 1, "Класика");
// console.log(styles.splice(0, 1));
// styles.splice(0, 0, "Реп", "Реггі");
// console.log(styles);

// const array2 = [4, 8];
// const array3 = [9, 1];
// const bigArray = array2.concat(array3);
// console.log(bigArray);

// Напиши скрипт який замінює регістр кожного символа в рядку на
// протилежний. Наприклад, якщо рядок «JavaScript», то на виході
// повинно бути «jAVAsCRIPT».
// const text = prompt("Please enter some text").split("");
// let result = "";
// console.log(text);
// for (let symbol of text) {
//     if (symbol === symbol.toUpperCase()) {
//       symbol = symbol.toLowerCase();
//     } else {
//       symbol = symbol.toUpperCase();
//     }
//   result += symbol;
// }
// console.log(result);

//                     Перебираючі методи масивів
//Синтаксис:
// Назва-масиву.назва-методу(()=>{})

// const friends = ["Andriy", " Artem", " Jan "];
// Метод forEach є замінною циклу, тому переберає кожен елемент масиву та 
// робить дію яку ми вказали у тілі колбека
// friends.forEach((friend, index, arr)=>{
// console.log(`Друг ${friend} має індекс ${index} у масиві ${arr}`)
// })
// але у не працює перереваня циклу

// Метод map переберає оригінальний масив та змінює кожен елемент 
// цього масива, повертає новий масив із зміненими елементами 
// const friendsList = friends.map((friend, index)=> `${friend} це друг номер ${index + 1}`)
// console.log(friendsList)

// Метод filter перебирає оригінальний масив, створює новий масив та додає 
// у нього ті елементи з оригінального масива, які відповідають умові 
// колбеку

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const filteredNumbers = numbers.filter(num => num % 3 === 0)
// console.log(filteredNumbers)

// Напишіть функцію, яка отримує масив об'єктів і повертає масив імен 
// з тих об'єктів, які мають вік більше 18 років.

// const people = [
//   { name: 'John', age: 32, occupation: 'programmer' },
//   { name: 'Jane', age: 26, occupation: 'teacher' },
//   { name: 'Mike', age: 42, occupation: 'engineer' },
//   { name: 'Emily', age: 17, occupation: 'designer' }
// ]
// const filteredPeople = people.filter(user => user.age >= 18)
// console.log(filteredPeople)

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// Використовуючи 👆 масив об’єктів виконай наступні завдання:
// Отримати масив імен всіх гравців
// const names = players.map((player) => player.name);
// console.log(names);
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// const newPlayers = players.map(player => { 
//   const newPlayer = {...player}
//   const newPoint = newPlayer.points * 0.1
//   newPlayer.points = newPoint
//   return newPlayer
//  })
// const newPlayers = players.map((player) => ({ ...player, points: { ...player }.points + { ...player }.points * 0.1 }));
// console.log(newPlayers);
//  console.log(newPlayers)
// Збільшити кількість годин гравця по id. Переписати на тернарник
// Отримати масив всіх гравців онлайн
// const onlinePlayer = players.filter((player) => player.online !== false)
// console.log(onlinePlayer)
// Отримати масив всіх гравців офлайн
// Отримати масив всіх хардкорних гравців з часом більше 250
// Знайти гравця по id
// Знайти гравця по імені
// Перевірити чи всі гравці мають час більше 200
// Перевірити чи всі гравці онлайн

//                     Перебираючі методи масивів.2

// перебираючий метод масивів reduce
// const numbers = [45, 89, 11];
// знайдемо суму чисел цього масива
// let sumNum = 0;
// for (const number of numbers) {
//   sumNum += number;
// }
// console.log(sumNum)
// зробимо цей самий приклад через reduce
// const назва-функц = масив.reduce((аккумулятор, елемент-масива)=> аккумулятор + елемент-масива, 0)
// const sumNum = numbers.reduce((sum, number)=> sum + number, 0)
// console.log(sumNum)
// 1 крок: запускаємо reduce на масиві, в reduce пишемо callback (sum, number)=> sum + number, а 0 це початкове значення аккумулятора sum
// 2 крок: у number приходить перше число з numbers (тобто 5), далі number додається до аккумулятора sum, тобто 5 + 0 = 5 тепер
// 3 крок: reduce переходить до наступної ітерації і витягує друге число(тобто 89), дродаємо number 34 до sum(89 + 45), тепер у sum оновиться 134
// 4 крок: reduce преходить до наступної ітерації і витягує третє число (11), додаємо number 34 до sum(89 + 45)
// 5 крок: у масиві числа закінчилися тому,,, закінчує своє виконання як цикл та повертає остання значення sum(145)

// Порахувати загальну кількість годин:

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true}
// ]

// const totalTimePlayed = players.reduce((totalTime, playerOb) => totalTime + playerOb.timePlayed, 0)
// console.log(totalTimePlayed)

// Порахувати загальну кількість товарів в кошику

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((acc, product) => 
//   acc + product.price * product.quantity, 0)
// console.log(totalAmount);


//Зробити статистику всіх тегів. Назву тега потрібно зробити ключем, значення 
//якого буде кількість повторень тегів в масиві. Якщо властивість з ключем tag 
//є, збільшуємо його значення на 1 якщо властивості немає с таким ключем що в 
//tag, створити і записати 1

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const makeStatisticsOfTags = (tweets) => {
// // const allTags = tweets.reduce((acc, tweet) => {
// //   acc += tweet.tags.map((tag) => tag);
// // console.log(acc);

// // }, "")
//   const allTags = [];
//   for (const tweet of tweets){
//     const { tags } = tweet;
//     for (const tag of tags) {
//       allTags.push(tag)
//     }
//   }
//   for(let i; i < allTags.length; i += 1) {
// const tag = allTags[0];
// const count = 0;
// for (const tag of allTags) {
//   const element = array[index];
  
// }
//   }
// }

// console.log(makeStatisticsOfTags(tweets))


// Потрібно сформувати message в масиві є такі числа: 52, 583, 148, 456 і це має бути рядок (через reduce)
// let numbers = [52, 583, 148, 456]
// let message = "У масиві є такі числа: " + numbers.reduce((acc, num) => acc + ", " + num)

// 1 крок: записуємо callback з початковим значенням
// 2 крок: у number приходить перше число з numbers (тобто 52)
// 3 крок: reduce переходить до наступної ітерації і витягує друге число(тобто 583)
// 4 крок: reduce преходить до наступної ітерації і витягує третє число (148)
// 5 крок: reduce преходить до наступної ітерації і витягує третє число (456)
// 6 крок: у масиві числа закінчилися тому reduce закінчує своє виконання як цикл та повертає остання значення і виходить (в масиві є такі числа: 52, 583, 148, 456)

// console.log(message)

//                    Sort

// метод sort сортує елементи в масиві по зростанню від 1 до більшого числа 
// або по алфавіту, цей метод ЗМІНЮЄ оригінальний масив
// Щоб не змінити дані оригінального масиваб зробимо перед сортуванням 
// копію в якій посортуємо елементи

// const number = [2, 1, 5, 6, 7, 9, 8]
// зробимо копію масива
// 1
// const copyNumbers = [...number]
// 2
// const copyNumbers = number.slice()
// 3
// const copyNumbers = number.splice(0)
// copyNumbers.sort()
// console.log(copyNumbers)

// const sortReverseNumbers = copyNumbers.sort((a, b) => b - a);
// console.log(sortReverseNumbers)

// Відсортуйте масив об'єктів за зростанням значення властивості date в 
// форматі dd / mm / yyyy.
// const events = [
//     { name: 'Event 1', date: '10/02/2023' },
//     { name: 'Event 2', date: '15/03/2023' },
//     { name: 'Event 3', date: '01/01/2023' },
//     { name: 'Event 4', date: '01/02/2023' }
//   ];
 
//   events.sort((a, b) => new Date(a.date.split('/').reverse().join('-')) - 
//   new Date(b.date.split('/').reverse().join('-')));
//   console.log(events)

//   Відсортуйте масив об'єктів за спаданням значення властивості popularity, а при однаковому значенні popularity - за алфавітом значення властивості name.
   const items = [
      { name: 'Item A', popularity: 5 },
      { name: 'Item C', popularity: 2 },
      { name: 'Item D', popularity: 3 },
      { name: 'Item B', popularity: 5 }
    ];
items.sort((a, b) => {
    if (a.popularity === b.popularity) {
        return a.name.localeCompare(b.name)
    } else {
        return b.popularity - a.popularity
    }
});
console.log(items)

console.log("♠")

// Відсортуйте масив об'єктів за спаданням значення властивості price, 
// а при однаковому значенні price - за зростанням значення властивості 
// quantity.
// const products = [
//     { name: 'Product 1', price: 100, quantity: 5 },
//     { name: 'Product 2', price: 50, quantity: 10 },
//     { name: 'Product 3', price: 200, quantity: 2 },
//     { name: 'Product 4', price: 50, quantity: 5 }
//   ];

//   product.sort((a, b) => {
//     if (a.price === b.price) {
//         return a.quantity - b.quantity;
//     } else {
//         return b.price - a.price
//     }
//   })
//   console.log(products)

// Відсортувати масив об'єктів за алфавітом в полі name:
const arr = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 26 },
    { name: 'Mike', age: 42 },
    { name: 'Emily', age: 29 }
  ];

// arr.sort((a, b) => {
//  return  a.name - b.name
// })
// console.log(arr)

arr.sort((a, b) => {
    return  a.age - b.age
   })
   console.log(arr)





