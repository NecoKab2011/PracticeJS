const playlist = {
title: "Мої улюблені пісні",
author: {
    name: "Abdul",
    age: 29,
    popular: true,
    location: {
        city: "Paris",
        country: "France"
    }
}
} 

const authorAge = playlist.author.age
console.log(authorAge)
const authorCountry = playlist.author.location.country
console.log(authorAge)

// деструктуризація це скорочення звернення до ключа в об'єкті
// const {назва ключа1, назва ключа2} = назва об'єкта
const {author, title} = playlist
console.log(title)








