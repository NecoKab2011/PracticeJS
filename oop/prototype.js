//  Прототипне наслідування
// flower це прототип
const flower = {
    plant: true,
    owner: "Like"
}
console.log(flower)
// rose це екземпляр flower
const rose = Object.create(flower);
console.log(rose);

rose.color = "red"
console.log(rose);

const daizy = Object.create(flower);

daizy.color = "white"
console.log(daizy);

const yellowRose = Object.create(flower);
console.log(yellowRose);

yellowRose.color = "yellow"
console.log(yellowRose);

const yellowRose1 = Object.create(yellowRose);
yellowRose1.name = "Fiby";
console.log(yellowRose1);

const yellowRose2 = Object.create(yellowRose);
yellowRose.name = "Nelly";
console.log(yellowRose2);
console.log(yellowRose2.owner);

console.log(Array())

