// spread допормагає нам витягнути вміст масива і зробити 
// з масива "немасив"
// const numbers = [ 1, 8, 3];

// console.log(numbers);
// console.log(...numbers)

// const maxNumber = Math.max(6, 98, 175, 78)
// console.log(maxNumber)
// console.log(Math.max(...numbers))

// const friends = ["Volodya", "Artem", "Mykola"];
// // const newFriends = friends;
// const newFriends = [...friends]
// console.log(newFriends === friends);
// newFriends.push("User8845254214591");
// console.log(newFriends)
// console.log(friends)


// let a = 5;
// console.log(a)
// let b = a;
// console.log(b)
// a = 7
// console.log(a)
// console.log(b)

function countNumber(a, b, c) {
    return a + b + c
}

const result = countNumber(52, 4, 84)
console.log(result)

const numbers = [8, 98, 64]
console.log(countNumber(...numbers));

// Копія об'єкта
// const user = {
//     userName: "user45545816651",
//     email: "test@gmail.com"
// }
// const userCopy = {...user, adress: "ditova56"}
// console.log(userCopy)
// const user2 = {
//     userName: "user9544546651",
//     email: "test2@gmail.com",
//     city: "Sumy"
// }
// const totalUser = {
//     userName: "user45545816651",
//     email: "test2@gmail.com",
//     city: "Sumy"
// }

// let a = 44;
// const b = a;
// У зміннну b записалася копія значення змінної а (44)
// console.log(a === b)
// a = 100;
// у змінну а поставили нове число 100, але в b значення не міняли і там залишилась стара копія а (44)
// console.log(a === b)

// const basket = {
// product: "apple"
// }
// const basket2 = {...basket}
// Ми поставили баскет у баскет2 і у баскет2 поставилась не копія баскет, 
// а передалась посилання на оригінальний об'єкт
// console.log(basket)
// console.log(basket2)
// console.log("///////////////////////////////")
// basket2.fruit = "kiwi"
// console.log(basket)
// console.log(basket2)

const userLocation = {
    location: "Kyiv"
}

const userData = {
    location: "Lviv",
    hobby: "painting"
}

// const user = {
// ...userData,
// ...userLocation
// }
const user = {
    hobby: "painting",
    location: "Lviv",
    location: "Kyiv"
    }
console.log(user)