// Функції конструктори - це шаблон, за яким ми можемо 
// створювати модель (шаблон), а на базі моделі 
// створюємо екземпляр
// const Car = function(modelCar, priceCar, colorCar){
//     this.model = modelCar
//     this.price = priceCar
//     this.color = colorCar
// };

// const bmw = new Car("BMW", "3000$", "black")
// console.log(bmw)

// const toyota = new Car("Toyota", "2000$", "gray")
// console.log(toyota)

// Об'єкт параметрів - це коли ми аргументи передаємо у вигляді об'єкта
const Car = function(data){
    const {modelCar, priceCar, colorCar, popularityCar = false} = data;
    this.model = modelCar
    this.price = priceCar
    this.color = colorCar
    this.popularity = popularityCar
};

const dataBMW = {
    modelCar: "BMW",
    priceCar: "3000$",
    colorCar: "black"
}

const bmw = new Car(dataBMW)
console.log(bmw)

const dataToyota = {
    modelCar: "Toyota",
    priceCar: "2000$",
    colorCar: "gray",
    popularityCar: true
}

const toyota = new Car(dataToyota)
console.log(toyota)
