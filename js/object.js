// const playlist = {
//   title: "My favorite songs",
//   songs: ["Hallo", "Fluxxwave", "Europapa", "Lost Woods"],
//   quantity() {
//     return this.songs.length;
//   },
//   addSong() {
//     const newSong = prompt("Яку пісню додати?");
//     this.songs.push(newSong);
//     return this.songs;
//   },
// };
// console.log(playlist.title);
// console.log(playlist.songs);
// console.log(playlist.quantity());
// console.log(playlist.addSong());

// вичісляючі властивості

// const friendAge = "age";
// const friend = {
//   name: "Andriy",
//   [friendAge]: 25,
//   height: 205,
// };
// console.log(friend.age);

// короткий запис властивості
// const firstCol = "black"

// const favoriteColor = {
//     firstCol: firstCol,
//     secondCol: "purple",
//     thirdCol: "orange"
// }

// скоротимо цей запис

// const firstCol = "black";
// const secondCol = "purple";
// const thirdCol = "orange";

// const favoriteColor = {
//   firstCol,
//   secondCol,
//   thirdCol,
// };

// const user = {
//   userName: "Volodymyr",
//   userAdress: "Polova 456",
//   userPhone: 45624894565,
// };

// const adress = user.userAdress;
// console.log(adress);

// const secondAdress = user["userAdress"];
// console.log(secondAdress);

// user.heightUser = 186;
// console.log(user);

// Створіть об'єкт "person" з властивостями "name", "age", "gender".
// Додайте до об'єкту метод, який буде виводити на екран повідомлення
// про особистість зі значеннями всіх властивостей.

// const person = {
//   name: "Nolan",
//   age: 48,
//   gender: "male",
//   getInfo() {
//     console.log(
//       `Name: ${person.name}, age:${person.age}, gender:${person.gender} `
//     );
//   },
// };
// console.log(person.getInfo());

// Створіть масив об'єктів "students", де кожен об'єкт буде містити
//  властивості "name", "age", "gender" та "grade". Напишіть функцію,
// яка приймає масив об'єктів "students" і повертає середній бал групи.
// const students = [
//   {
//     name: "Nolan",
//     age: 14,
//     gender: "male",
//     grade: 8,
//   },
//   {
//     name: "Ivan",
//     age: 18,
//     gender: "male",
//     grade: 10,
//   },
//   {
//     name: "Jimmy",
//     age: 15,
//     gender: "male",
//     grade: 9,
//   },
// ];

// function avarageGrade(students) {
//   let sumGrade = 0;
//   for (const student of students) {
//     sumGrade += student.grade;
//   }
//   const avarageGrade = sumGrade / students.length;
//   return avarageGrade;
// }
// console.log(avarageGrade(students));

// Створіть об’єкт "сar", який буде мати властивості "brand", "model",
// "year" та "color". Додайте метод, який буде виводити на екран
// повідомлення про автомобіль зі значеннями всіх властивостей.

// const car = {
//   brand: "Mercedes",
//   model: "G-Class 2019 W464 • AMG 63 G-T",
//   year: 2019,
//   color: "grey",
//   carInfo() {
//     return `brand: ${car.brand}, model:${car.model}, year:${car.year}, color:${car.color} `;
//   },
// };
// console.log(car.carInfo());

// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// const products = {
//   fruits: [
//     { name: "🍎", price: 50 },
//     { name: "🍇", price: 70 },
//     { name: "🍋", price: 60 },
//     { name: "🍓", price: 110 },
//   ],
//   productsQuantity() {
//     return this.fruits.length;
//   },
//   addFruit() {
//     const newFruit = prompt("add fruit");
//     this.fruits.push(newFruit);
//     return;
//   },
//   deleteFruit() {
//     const deleteFruit = prompt("delete fruit");
//     let indexOfElement;
//     for (const fruit of this.fruits) {
//       if (fruit.name === deleteFruit) {
//         indexOfElement = this.fruits.indexOf(fruit);
//       }
//     }
//     this.fruits.splice(indexOfElement, 1);
//     return;
//   },
//   editFruits() {
//     const editFruitName = promt("Edit fruit");
//     const editFruitPrice = prompt("Edit price");
//     for (const fruit of this.fruits) {
//       if (fruit.name === editFruitName) {
//         fruit.price = editFruitPrice;
//       }
//     }
//   },
//   totalPrice() {
//     let total = 0;
//   for (const fruit of this.fruits) {
//     total += fruit.price

//   }
//   }
// };
// console.log(products.productsQuantity());
// console.log(products.addFruit());
// console.log(products.deleteFruit());
// console.log(products.editFruits());
// console.log(products.totalPrice())
// console.log(products);

// Створіть масив об'єктів "movies", де кожен об'єкт буде містити
// властивості "title", "director", "year" та "genre". Напишіть функцію,
// яка приймає масив об'єктів "movies" та жанр (строку) як параметри,
// та повертає масив фільмів, які належать до цього жанру.
// const movies =[
//     {
//     title: "It",
//     director: "Енді Мускетті",
//     year: 2017,
//     genre: "horror"
// },
// {
//     title: "VGBF",
//     director: "Rick",
//     year: 2027,
//     genre: "htry"
// },
// {
//     title: "RTdds-45",
//     director: "Frthvv-3000",
//     year: 3089,
//     genre: "YtdDgg78.0(4D)"
// }
// {
//     title: "Rrrr-405",
//     director: "Tyuhvv-109",
//     year: 2089,
//     genre: "htry"
// }
// ];
// function getMovieByGenre(movies, genre) {
//     let result = [];
//     for(let i = 0; i < movies.length; i++){
//         if (movies[i].genre === genre){
//             result.push(movies[i]);

//         }
//     }
//     return result
// }

// let htryMovies = getMovieByGenre(movies, "htry");
// console.log(htryMovies)

// Дано масив об’єктів
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];

// Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Написати функцію яка буде повертати масив всіх імен друзів
// console.log(getAllNames(friends));
// Написати функцію яка буде повертати масив імен друзів які онлайн
// console.log(getOnlineFriends(friends));

// Написати функцію яка буде повертати масив імен друзів які офлайн
// console.log(getOfflineFriends(friends));
// Написати функцію яка буде повертати об’єкт масивів  імен друзів які
// офлайн та онлайн. Створити 2 масива онлайн і офлайн,  якщо тру - в
// перший, якщо ні - в другий
// const getFriendsByStatus = function () {};

//   const friendByStat = {
//     onlineFriends: [],
//     offlineFriends: [],
//   }
//   console.log(getFriendsByStatus(friends));
// const myFriends = {
//   friends: [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: false },
//     { name: "Ajax", online: false },
//   ],
// findFriendByName(name) {
//     let message = "isn't friend";
//     for(const friend of this.friends) {
//         if (friend.name === name) {
//           message = `Friend ${name} found` 
//         }
// return message
//     }
// },

//   getAllNames() {
//     let message = "";
//     for (const friend of friends) {
//       message += friend.name + ", ";
//     }
//     return message;
//   },
//   getOnline() {
//     let message = "";
//     for (const friend of this.friends) {
//         if(friend.isOnline === true){
//             message += friend.name + ", ";
//         }
//     }
//     return message;
//   },
//   getOffline() {
//     let message = "";
//     for (const friend of this.friends) {
//         if(friend.isOnline === false){
//             message += friend.name + ", ";
//         }
//     }
//     return message;
//   },
//   getFriendsByStatus() {
// const onlineFriends = [];
// const offlineFriends = [];
// for (const friend of this.friends) {
//     if (friend.isOnline === true) {
//         onlineFriends.push(friend)
//     } else {
//         offlineFriends.push(friend)
//     }

// }
// const statusFriends = {
//         onlineFriends,
//         offlineFriends
// }
// return statusFriendsfriend
//   }
// };

// console.log(myFriends.getAllNames());
// console.log(myFriends.getOnline());
// console.log(myFriends.findFriendByName());
// console.log(myFriends.getFriendsByStatus())

//                           МЕТОДИ ПО ОБ'ЄКТУ

// Створіть повідомлення в якому буде вказано кількісь зірок і рейтинг,
// використовуючи цикл
// const hotel = {
//     stars: 0.1,
//     popularity: 52,
//     name: "Happy House"
// }
// let message = "";
// for (const key in hotel){
    // message = alert(`Зірки: ${hotel.stars}, рейтинг: ${hotel.popularity}, назва: ${hotel.name}`)
// message += `${key} - ${hotel[key]}. `
// }
// console.log(message)

// const products = {
//     aplle: 15,
//     banana: 30,
//     pineaplle: 60
// }
// let total = 0;
// for (let product in products) {
// total += products[product]
// }
// console.log(total)

// console.dir(Object())
// const Object = {
//     keys() {

//     }
// }


//Object.keys() даний метод витягує всі ключі з обʼєкту та робить їх масивом

// const user = {
//     name: "Yan",
//     age: 3,

// }

// const userKeys = Object.keys(user)
// console.log(userKeys)

// const userValues = Object.values(user)
// console.log(userValues)

// const userEntries = Object.entries(user)
// console.log(userEntries)


// const products = {
//     aplle: 15,
//     banana: 30,
//     pineaplle: 60
// }
// const productsValues = Object.values(products)
// console.log(productsValue)
// let sum = 0;
// for (let productValue of productsValues) {
//     sum += productValue
//     }
// console.log(sum)

