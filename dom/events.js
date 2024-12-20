// додає слухач на якись елемент

// const btnElement = document.querySelector("button")
// console.log(btnElement)

// function changePageColor() {
//     const bodyElement = document.querySelector("body");
//     bodyElement.style.backgroundColor = "aqua";
// }
// btnElement.addEventListener("click", changePageColor)

// btnElement.addEventListener("click" , (() => {
//     const bodyElement = document.querySelector("body");
//     const redValue = Math.random() * (255 - 0) + 1;
//     const greenValue = Math.random() * (255 - 0) + 1;
//     const blueValue = Math.random() * (255 - 0) + 1;
//     const randomColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
//     bodyElement.style.backgroundColor = randomColor;
// }))

// Напишіть скрипт зміни кольору кнопки при натискані на неї.
// Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку
// ‘Додати стилі’.
// Написати програму яка буде виводити данні введені в інпут в інтерфейс сторінки.
// Створити форму, після сабміту виводити на екран повідомлення ‘Ви зареєструвалися
// успішно! Дякую!’

// const btnPrac = document.querySelector(".btn-prac");
// btnPrac.addEventListener("click", (() => {
//     btnPrac.style.backgroundColor = "red"
// }))

// const mainTitle = document.querySelector("h2");
// const btnTitle = document.querySelector(".btn-test")
// btnTitle.addEventListener("click", (() => {
//     mainTitle.classList.add("color-for-title")
// }))

// Подія submit може зібрати дані з форми та відправити їх по кліку з типом submit, подію submit ми чіпляємо не на кнопку, а на саму форму

const formElement = document.querySelector(".register");
console.log(formElement);
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const forData = {
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
    checkbox: event.target.elements.checkbox.value,
  };
  testData(forData);
  //   event.target.elements.email.value = "";
  //   event.target.elements.password.value = "";
  event.target.reset();
  console.log(forData);
  return forData;
});
console.log(formElement);

// Подія focuc натиск на інтерактивний об'єкт: посилання, кнопка, інпут

const input = document.querySelector(".radio-input");
input.addEventListener("focus", (event) => {
  event.target.styles.boxShadow = "2px 2px 2px 2px red";
  event.target.styles.outline = "none";
});
input.addEventListener("blur", (event) => {
  event.target.styles.boxShadow = "none";
});
