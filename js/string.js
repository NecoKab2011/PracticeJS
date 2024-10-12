const message = "JS is my favorite subject";
console.log(message);
message[0];
const firstLetter = message[0];
console.log(firstLetter);
console.log(message[3]);
const messageLength = message.length;
console.log(messageLength);
const lastLetter = message[messageLength - 1];
console.log(lastLetter);

const message1 = "JavaScript";
const message2 = "Is my favorite subject";
console.log(message1);
console.log(message2);
const fullMessage = message1 + " " + message2;
console.log(fullMessage);
// Це називається конкатинація або зшивання рядків
const friendName = null
let location;
console.log(fullMessage + " " + 5 + " " +  friendName + " " + location)


// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
const result = 5 + 5 + "5";
console.log(result);
console.log("5" + 5 + 5 + 5);

// Шаблонні рядки
const myAge = 13;
const info = `Мені ${myAge} років`;
console.log(info);
// $ і фігурні дужки {} називається інтерпуляція

// Напиши скрипт який виведе рядок в 
// форматі: “Гість x y поселяється в n номер g”,
//  підставивши замість x, y, n, g значення змінних.

// const nameGuest = prompt("введіть імя користувача");
// const surname = prompt("введіть прізвище користувача");
// const typeRoom = prompt("введіть тип кімнати користувача");
// const numberRoom = prompt("введіть номер кімнати користувача");
// const text = `Гість ${nameGuest} ${surname} поселяється в ${typeRoom} номер ${numberRoom}`;
// console.log(text);

// Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. 
// Використовуючи метод .length, вивести в консоль кількість 
// символів у рядку.

const userName = "Микола" + "Кабин";
console.log(userName);
const userNameLength = userName.length;
console.log(`My name legth is ${userNameLength}`);

// Напишіть скрипт, який знаходить площу прямокутника. 
// Висота 23см, шириною 10см - всі данні повинні зберігатися в змінних. 
// Значення площі повинно зберігається в числовій змінній.
// Результат вивести шаблонним рядком.

const widthRectagle = 23;
const heightRectadle = 10;
const areaRectagle = widthRectagle * heightRectadle;
console.log(`Площа прямокутника з висотою ${widthRectagle} і шириною ${heightRectadle} дорівнює ${areaRectagle}`)



console.dir(String);
const upperCase = "Welcome";
console.log(upperCase.toUpperCase());
console.log("Hello World".toUpperCase());
console.log("Goodbye World".toLowerCase());

const testMessage = "Hi everyone";
console.log(testMessage.indexOf("i"));
const secondMessage = "Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!";
console.log(secondMessage.indexOf("Абдул"));
console.log("Hieveryone".indexOf(" "));

console.log("Hi everyone".includes("Hi everyone"));

console.log(secondMessage.startsWith("Привіт"));
console.log(secondMessage.endsWith("мільйон!"));
console.log(secondMessage.startsWith("Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!"));
const secondMessageLength = secondMessage.length;
console.log(secondMessageLength)

const optMessage = secondMessage.trim();
console.log(optMessage);
console.log(optMessage.length);
// обрізає всі відступи на початку

console.log(secondMessage.padStart(21, "mmm"));
console.log(secondMessage.padEnd(41, "mmm"));
console.log("Це тестовий рядок".padEnd(48, " ! "))

const text5 = "Це тестовий рядок";
console.log(text5.slice(1, 5));
const copyText5 = text5.slice(0);
console.log(copyText5);

// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.

const myFirstName = "Mykola"
console.log(myFirstName.charAt(2))

// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.

console.log(myFirstName.replace("y", "@"))

// Створити змінну, яка містить рядок зі словом "JavaScript". Використовуючи метод .substring(), вивести підстроку, яка містить перші 4 символи слова "Java".

const jsText = "JavaScript"
console.log(jsText.substring(0, 4));
console.log(jsText.slice(0, 4))

const email = "non@gmail.com"
const check = email.includes("@")
if (check === true){
    console.log("Email")
} else {
    console.log("Not email")
}

