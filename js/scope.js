// const a = "це змінна а";
// const d = "d"
// if(5 < 7){
//     const b = "змінна b"
//     console.log(b)
//     console.log(a)
//     const d = "d2"
//     // console.log(c)
//     if(5 < 10){
//         const c = "змінна с"
//         console.log(c)
    
//     console.log(d)
//     for (){

//     }
//     }
// }
// console.log(a)


// Напиши скрипт вибору готеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
//  Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
//  'Токої кількості зірок немає'

// let starsHotel
// const hotelPrice = prompt("")

// switch(hotelPrice) {
//     case "1":
//         starsHotel = "20$"
//         break;


//     case "2":
//     starsHotel = "30$"
//     break;

//     case "3":
//     starsHotel = "50$"
//     break;

//     case "4":
//     starsHotel = "70$"
//     break;

//     case "5":
//     starsHotel = "120$"
//     break;

//     default: alert("Токої кількості зірок немає")
//         }

//  alert(`Ціна за готель який Ви обрали становить ${starsHotel} `);

//  Напиши скрипт вибору опції доставки товару. 
// Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 
// 3 - пошта. В змінну message записати повідомлення в залежності 
// від опції.
//  - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//  - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'

const option = parseInt(
    prompt("Оберіть спосіб доставки: 1 - самовивіз, 2 - кур'єр, 3 - пошта.")
  );
  let message = "";
  // * Тернарний оператор розгалуження
  message =
    option === 1
      ? "Ви зможете забрати товар завтра з 12:00 в нашому офісі"
      : option === 2
      ? "Кур'єр доставить замовлення завтра з 9:00 до 18:00"
      : option === 3
      ? "Ви зможете забрати замовлення на пошті"
      : "Такого способу доставки нема";
  alert(message);
  // * Switch оператор розгалуження
  switch (option) {
    case 1:
      message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
      break;
    case 2:
      message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
      break;
    case 3:
      message = "Ви зможете забрати замовлення на пошті";
      break;
    default:
      message = "Такого способу доставки нема";
  }
  alert(message);
