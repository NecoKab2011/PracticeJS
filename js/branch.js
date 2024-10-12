const personName = "Володя";
const askName = prompt("Як звати мого друга?");
// if(askName.toLowerCase() === personName.toLowerCase()){
//     alert(`Ви вгадали, мого друга звати ${personName}`)
// } else {
//     alert(`Ви не вгадали, мого друга звати ${personName}`)
// }

// Тернарний оператор
// Умова ? те що вертаємо при true : і те що вертаємо при false

const message =
  askName.toLowerCase() === personName.toLowerCase()
    ? `Ви вгадали, мого друга звати ${personName}`
    : `Ви не вгадали, мого друга звати ${personName}`;
alert(message);


































