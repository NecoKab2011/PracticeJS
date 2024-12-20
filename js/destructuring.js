// const playlist = {
// title: "Мої улюблені пісні",
// author: {
//     name: "Abdul",
//     age: 29,
//     popular: true,
//     location: {
//         city: "Paris",
//         country: "France"
//     }
// }
// }

// const authorAge = playlist.author.age
// console.log(authorAge)
// const authorCountry = playlist.author.location.country
// console.log(authorAge)

// деструктуризація це скорочення звернення до ключа в об'єкті
// const {назва ключа1, назва ключа2} = назва об'єкта
// const {author, title} = playlist
// console.log(title)

// const product = {
//     nameP: "apple",
//     price: 2500000000,
//     photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD////x8fHp6enGxsarq6uPj49cXFxYWFiBgYEQEBDDw8N2dna+vr74+Pifn5/Y2NgoKCiZmZlPT0+0tLSKiorl5eVkZGQVFRU7OztqamrQ0NDa2tpCQkKnp6dubm43NzcgICAvLy+29WF1AAADV0lEQVR4nO3c2XqiQBCGYRt3I2oUTeKSmNz/RY6YZARCA6PFVNn53mMO6n+A3qHTAQAAAAAAAAAAAAAAAAAAAADglzk8alfQpmG/69xAu4r2LGcutdSuoy1L9yXQe7iKvgO6qXYtrZi7i5F2MW3oZQI67WLasMgG7GpX04I4G9Al2uXIW+cCBvgaHvMBI+165G3yCcPrDcf5gAG2pNEvu4UBdhX7fMIX7XrEPYb+jHYGuYCxdjkt6IUeMNeSzrWLaUUm4JN2La2YhP2Enjx/5XsIr5f4lg61ewH2EcE6bMfj6arigtE82e33i7g//vhvRYmZJn87hijZllzwvsytZbj4rpbcDg+uIC7cyvW+eMVJf6JT7j972ZVU77qXpe1RXHbBOaNi2c31feW73frY6QxfI+8Fzs2G2uXXOlbV34T1sdz2xnwnPe0MlYqLMMFFnEoEtNzejGQC2t2NmtSX3pDVm7ioL70Zq+v8Iq3MSWR2ZCMUcKOdw+tVJqDhJWKZgDPtGH7L+uqbqJpNKrt1OPrJ8KB0JRLQ8m5pIpLwTTtGha5EQMPtqNCAba0do4LMpEI7RRWR7n6nnaLKj7W1axjuKoQaGqtTijOJgO5ZO0UVkYTaIaqIdBaGB90/TliQ8LcmNP0evoskDL8tDb8/ND2mEUloeb9CZtRmuqkRGXmbnuL7933/heXp07q+/CYO2jn8DjIJF9o5KsgktPwmbuqrb0Q7h5/Meqlze+0gXkI7+M49aCfxkkpo92ht2Tm161jtFYV211Jdm0cxP+QSWv3QRKq/OOuWnUjVJviYpgzeRrnzQmcWj5yUnpu9lskGVeDg5YXNk20yhxU+aWcpJzRJTL1qZ/GQS6idxEesw7D7m4WZUEK7q99Cb6LdWyjVnGqnqDKUCGhwwJYhsDRs+WRU6vaEhhdNz24eu1nt7C+836U1Y/0ZTd3Wnt7DJ9A3rfDbbke/DeqD+JicFpbo1UcpZ/rASc61W8JH7cKbu661MX0Yo2ByTcQ7+xVIyYO6mD99TotWg7I39Z7u4FlhhBoV/sM6Lqwgb+7wX7vbzJPaK/kI/ZAZ/cwsH9Ov8Bank/4o9pY/TRanKzaJ4c1tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECJPwYTI4UwDxjEAAAAAElFTkSuQmCC",
//     info:{
//        country: "America",
//        city: "Washington"
//     }
// }

// const productCountry = product.info.country
// console.log(productCountry)
// const {nameP, price, photo} = product;
// console.log(nameP, price, photo)

// Глибока деструктуризація
// const {city, country} = product.info;
// console.log(city, country)

// const {info} = product;
// console.log(info)
// Якщо потрібно витягнути ключі з глибше вкладеного об'єкта, то використовуємо такий синтаксис
// const {info: {city, country}} = product;
// console.log(city, country)
//console.log(info) працювати не буде тому що його розпакували у змінній (city, country)

// const {weight = 1000, nameP = "без імені"} = product;
// console.log(weight, nameP)
// let info = "test"

// const {info: productInfo, ...information} = product;
// перезиваемо змінну info на productInfo; ... - збираємо всі ключі через ...rest в інший об'єкт
// console.log(information)

//                ДЕСТРУКТУРИЗАЦІЯ МАСИВІВ

// const rgb = [200, 255, 25]
// const
// const animals = [
// {
//     title: "turtle",
//     price: 1500
// },
// {
//     title: "cat",
//     price: 6000
// },
// {
//     title: "hamster",
//     price: 1000
// }
// ]
// 1
// const turtleTheAnimal = animals[0];
// console.log(turtleTheAnimal)
// 2
// const [turtleTheAnimal, catTheAnimal, hamsterTheAnimal, crocodileTheAnimal = {}] = animals;
// console.log(turtleTheAnimal)

// const [turtleTheAnimal, ...otherAnimals] = animals
// console.log(otherAnimals)

// const [ , catTheAnimal, ] = animals
// console.log(catTheAnimal)

// Провести глибоку деструктуризацію об’єкту

// const musicLibrary = {
//   count: 2,
//   artists: [
//     {
//       name: "The Beatles",
//       albums: [
//         {
//           title: "Sgt. Pepper's Lonely Hearts Club Band",
//           year: 1967,
//           tracks: [
//             { title: "With a Little Help from My Friends", duration: "2:44" },
//             { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
//             { title: "A Day in the Life", duration: "5:33" },
//           ],
//         },
//         {
//           title: "Abbey Road",
//           year: 1969,
//           tracks: [
//             { title: "Come Together", duration: "4:19" },
//             { title: "Something", duration: "3:01" },
//             { title: "Here Comes the Sun", duration: "3:06" },
//           ],
//         },
//       ],
//     },
//     {
//       name: "Pink Floyd",
//       albums: [
//         {
//           title: "The Wall",
//           year: 1979,
//           tracks: [
//             { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
//             { title: "Comfortably Numb", duration: "6:23" },
//             { title: "Hey You", duration: "4:40" },
//           ],
//         },
//         {
//           title: "Dark Side of the Moon",
//           year: 1973,
//           tracks: [
//             { title: "Speak to Me/Breathe", duration: "3:58" },
//             { title: "Time", duration: "7:06" },
//             { title: "Money", duration: "6:22" },
//           ],
//         },
//       ],
//     },
//   ],
// };

// const {
//     count,
//     artists: [
//       {
//         name,
//         albums: [
//           {
//             title,
//             year,
//             tracks: [
//               { title: trackTitle1, duration: duration1 },
//               { title: trackTitle2, duration: duration2 },
//               { title: trackTitle3, duration: duration3 },
//             ],
//           },
//           {
//             title: title2,
//             year: year2,
//             tracks: [
//               { title: trackTitle4, duration: duration4 },
//               { title: trackTitle5, duration: duration5 },
//               { title: trackTitle6, duration: duration6 },
//             ],
//           },
//         ],
//       },
//       {
//         name: name2,
//         albums: [
//           {
//             title: title3,
//             year: year3,
//             tracks: [
//               { title: trackTitle7, duration: duration7 },
//               { title: trackTitle8, duration: duration8 },
//               { title: trackTitle9, duration: duration9 },
//             ],
//           },
//           {
//             title: title4,
//             year: year4,
//             tracks: [
//               { title: trackTitle10, duration: duration10 },
//               { title: trackTitle11, duration: duration11 },
//               { title: trackTitle12, duration: duration12 },
//             ],
//           },
//         ],
//       },
//     ],
//   } = musicLibrary;

//   Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та
// використовує деструктуризацію для повернення рядка, що містить
// інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище
// і мені Вік років".
// const person = {
//     name: 'Nelli',
//     surname: 'Laroy',
//     age: 25
//   };
//   const personInfo = (person) => {
//    const {name, surname, age} = person
//   return `"Мене звати ${name} ${surname} і мені ${age} років"`
//   }
// const personInfo = ({name, surname, age} = person) =>
//     `Мене звати ${name} ${surname} і мені ${age} років`

//   console.log(personInfo(person));

//   Напишіть функцію, яка приймає об'єкт, що містить інформацію про
// студента (ім'я, прізвище, оцінки за три предмети) та використовує
// деструктуризацію для повернення середньої оцінки студента.
// const student = {
//     name: 'Bruce',
//     surname: 'Lee',
//     grades: [4, 5, 3]
//   };

//   const calculateAverageGrade = (student) => {
//     const {grades} = student
//     let allMarks = 0;
//     for (const mark of grades){
//         allMarks += mark
//     }
//     const result = allMarks / grades.length
// return result
//   }

//   console.log(calculateAverageGrade(student));

//   Напишіть функцію, яка отримує масив об'єктів з інформацією про
// товари (назва, ціна, кількість) та використовує деструктуризацію
// для обчислення загальної вартості товарів.

// const items = [
//   { name: "Футболка", price: 250, quantity: 2 },
//   { name: "Джинси", price: 800, quantity: 1 },
//   { name: "Кросівки", price: 1200, quantity: 1 },
// ];
// const calculateTotalCost = ([
//   { name: name1, price: price1, quantity: quantity1 },
//   { name: name2, price: price2, quantity: quantity2 },
//   { name: name3, price: price3, quantity: quantity3 },
// ] = items) => price1 * quantity1 + price2 * quantity2 + price3 * quantity3;
// console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500

// Напишіть функцію, яка отримує об'єкт зі списком електронних адрес
// (поле "emails") та використовує деструктуризацію для повернення
// першої адреси в цьому списку.
// const person = {
//   name: "John",
//   emails: ["john@gmail.com", "john@example.com", "john123@yahoo.com"],
// };
// const getFirstEmail = ({ emails: [email] } = person) => email;
// console.log(getFirstEmail(person)); // 'john@gmail.com'

// Напишіть функцію, яка отримує об'єкт зі списком користувачів
// (поле "users"), де кожен користувач є об'єктом з полями "ім'я" та
// "вік", та використовує деструктуризацію для повернення списку
// користувачів, які старші за 18 років.
// const data = {
//   users: [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 17 },
//     { name: "Bob", age: 30 },
//     { name: "Alice", age: 20 },
//   ],
// };
// const getAdultUsers = (user) => {
//    const abultUsers = "";
// for (const user of users){
//    const {name, age} = user
// if (user.age > 18) {
//     abultUsers.push(user)
// }
// }
// return abultUsers
// };
// console.log(getAdultUsers(data));
// [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }, { name:
