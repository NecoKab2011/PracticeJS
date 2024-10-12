const message = "Hello people";
console.log(message);
console.log(message.indexOf("o"));

const letters = message.split("");
console.log(letters);

const words = message.split(" ");
console.log(words);

const pwords = message.split("p");
console.log(pwords);

// Метод join робить з масиву рядок

const testJoin = ["city", "town", "build"];
const messageJoin = testJoin.join("~|");
console.log(messageJoin);

// Метод IndexOf шукає перше співпадіння, якщо не знайшов, то видає -1

const names = ["Gale", "Mortis", "Bull", "Surge"];
console.log(names.indexOf("Surge"));
console.log(names.indexOf("Mortis"));
console.log(names.indexOf("Colt"));
console.log(names.indexOf("B"));

const numbers = [2, 6, 8, 12];
const isNumber = numbers.includes(5);
console.log(isNumber);

const array = ["gojj", "hghfjgh", "ddd", "rte"];
console.log(array);
array.shift();
console.log(array);
array.pop();
console.log(array);
array.unshift("uyt");
console.log(array);
array.push("rtei", "tyr");
console.log(array);

const fruits = ["apple", "banana", "mango", "kiwi"];
const fruitsCopy = fruits.slice(0, fruits.length - 1);
console.log(fruits.slice(1, 3));
console.log(fruitsCopy);
console.log(fruits === fruitsCopy);
const newFruits = fruits.slice(1, 3);
console.log(newFruits[1]);
const lastElemetIndex = fruits.length - 1;
const elementLast = fruits[lastElemetIndex];
console.log(elementLast);
console.log(newFruits);
console.log(fruits);

//
const friends = ["Mary", "Gray", "Vova", "Lola"];
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
const styles = ["Джаз", "Блюз"];

styles.push["Рок-н-ролл"];
console.log(styles);
const deleteElement = styles.splice(0, 2);
console.log(deleteElement);
const addElement = styles.splice(2, 0, "Класика");
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Реп", "Реггі");
console.log(styles);

// const styles = ["Джаз", "Блюз"];
// styles.splice(styles.length, 0, "Рок-н-ролл");
// styles.splice(1, 1, "Класика");
// console.log(styles.splice(0, 1));
// styles.splice(0, 0, "Реп", "Реггі");
// console.log(styles);

const array2 = [4, 8];
const array3 = [9, 1];
const bigArray = array2.concat(array3);
console.log(bigArray);

// Напиши скрипт який замінює регістр кожного символа в рядку на
// протилежний. Наприклад, якщо рядок «JavaScript», то на виході
// повинно бути «jAVAsCRIPT».
const text = prompt("Please enter some text").split("");
let result = "";
console.log(text);
for (let symbol of text) {
    if (symbol === symbol.toUpperCase()) {
      symbol = symbol.toLowerCase();
    } else {
      symbol = symbol.toUpperCase();
    }
  result += symbol;
}
console.log(result);
