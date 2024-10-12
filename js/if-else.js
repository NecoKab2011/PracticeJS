// Розгалуження if
if (5){
    console.log("Це число")
}

// Розгалуження if...else
// const age = prompt("скільки вам років?")
// if(age > 18 || age === 18){
// alert(`Ви повнолітні. Вам ${age}`)
// } else{
//     alert(`Ви не повнолітні. Вам ${age}`)
// }

// Розгалуження else...if
const salary = prompt("Яка у Вас зарплата?");
if (salary < 10000 ){
    alert(`У Вас низька зарплата і складає ${salary}`)
} else if (10000 <= salary && salary < 20000 ){
    alert(`У Вас середня зарплата і складає ${salary}`)
} else if (salary >= 20000 ){
    alert(`У Вас висока зарплата і складає ${salary}`)
}


















