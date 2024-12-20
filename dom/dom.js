// метод querySelector знаходить потрібни нам елемент у DOM-дереві

//
// const boxElement = document.querySelector("div") - витягуємо елемент через назву тегу
// const boxElement = document.querySelector(".box") - витягуємо елемент через назву класу
// console.log(boxElement)

// const linkElement = document.querySelector(`[href="https://www.google.com/"]`) - витягуємо елемент через його атрибут
// console.log(linkElement)

// const allItems = document.querySelectorAll("li") - отримуємо масив елементів li
// console.log(allItems)

// const listElement = document.querySelector("ul")
// console.log(listElement)

// const allItems = listElement.children
// console.log(allItems)

// const firstItem = listElement.firstElementChild
// console.log(firstItem)

// const lastItem = listElement.lastElementChild
// console.log(lastItem)

// const secondItem = firstItem.nextElementSibling
// console.log(secondItem)

// const thirdItem = lastItem.previousElementSibling
// console.log(thirdItem)

// Властивість textContent дозволяє додати властивість в середині вузла
// const textElement = document.querySelector("p")
// console.log(textElement)
// textElement.textContent = "Hallo"
// const addText = textElement.textContent
// console.log(addText)

// const page = document.body;
// page.style.backgroundColor = "aqua"
// console.log(page)

// textElement.style.color = "green";

// textElement.style.fontSize = "36px"

// const fotoElement = document.querySelector("img")
// console.log(fotoElement)
// fotoElement.src = "https://i0.wp.com/givoyles.ru/wp-content/uploads/2017/02/tree-1716991_1280.png?resize=395%2C242&ssl=1"
// fotoElement.alt = "Дерево"

// const hasFotoClass = fotoElement.classList.contains("cls")
// console.log(hasFotoClass)

// fotoElement.classList.add("three-foto")
// console.log(fotoElement)

// fotoElement.classList.remove("foto")
// console.log(fotoElement)

// fotoElement.classList.replace("three-foto", "three")
// console.log(fotoElement)

// 1. Отримайте доступ до списку
// 2. Додайте жовтий колір фону
// 3. Додайте клас "site-nav__link" до першого посилання
// 4. Збільшіть розмір шрифта посилання з атрибутом href="https://"

// const siteNav = document.querySelector("ul");
// console.log(siteNav);

// siteNav.style.backgroundColor = "yellow";

// siteNav.firstElementChild.firstElementChild.classList.add("site-nav__link");

// const siteHref = siteNav.querySelector([href="https://"]);
// siteHref.style.fontSize = "30px";
// console.log(siteHref);

// 1. Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.
// 2. Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями
// 3. Додайте заголовок до тексту та стилізуйте його за допомогою додаткового класу.
// 4. Замініть клас на заголовку.
// 5. Перевірте чи містить посилання клас list

// const outhrefElements = document.querySelectorAll(`[href^="http://"]`);
// outhrefElements.forEach((elem) => (elem.style.color = "orange"));

// const allLinks = document.querySelector("a + ul a")
// console.log(allLinks)

// const firstLink = allLinks[0]
// const lastLink = allLinks[allLinks.length - 1]

// firstLink.style.color = "pink"
// lastLink.style.color = "pink"

//                        DOM 2
// createElement додає елемент в памяті, але не на сторінці
// document.createElement()

// const box = document.createElement("div")
// const imageElement = document.createElement("img")
// const textElement = document.createElement("p")
// const titleElement = document.createElement("h2")
// const meinTitleElement = document.createElement("h1")
// const linkElement = document.createElement("a")
// console.log(box)
// console.log(imageElement)

// метод append дозволяє додати елемент в середину елемента бокс
// box.append(imageElement, textElement)
// console.log(box)

// метод prepend дозволяє додати елемент перед всіма дітьми
// box.prepend(titleElement)

// box.before(meinTitleElement)

// const page = document.querySelector("body")
// console.log(page)

// page.append(box)
// console.log(page)

// box.after(linkElement)
// const box = document.querySelector("article")
// const image = document.createElement("img")
// const text = document.createElement("p")
// const button = document.createElement("button")

// text.textContent = "Ехолокація потрібна для орієнтування в місцевості, якщо немає змоги побачити щось. Загалом використовується китами, дельфінами, кажанами і людьми, які не можуть бачити."
// button.textContent = "click";
// button.style.background = "red";
// image.src = "https://i0.wp.com/givoyles.ru/wp-content/uploads/2017/02/tree-1716991_1280.png?resize=395%2C242&ssl=1"

// const page = document.querySelector("body");
// page.append(box);
// box.append(image);
// box.append(text);
// box.append(button);

// button.classList.add("btn");
// text.classList.add("text");

// innerHTML дозволяє глянути інформацію яка лежить між відкр. та закр. тегом елемента, також
// можна замінити  інформацію

// const titleElement = document.querySelector("h1");
// console.log(titleElement.innerHTML)

// const boxElement = document.querySelector("article");
// console.log(boxElement.innerHTML)

// boxElement.innerHTML = `<img src="" alt="">`
// console.log(boxElement.innerHTML);
// console.log(boxElement)

// document.querySelector("body").innerHTML = `<article>
// <p>Hallo</p>
// <h2>DOM</h2>
// </article>`

// метод insertAdjacentHTML дозволяє додати кусок розмітки у виглялі рядка до певного елемента

// const boxElement = document.querySelector(".box")
// boxElement.insertAdjacentHTML("afterbegin", `<p>text1</p>`);
// console.log(boxElement)

// boxElement.insertAdjacentHTML("beforeend", `<p>text</p>`);
// console.log(boxElement)

//                   Методи для роботи з атребутами

const linkElement = document.createElement("a");
// linkElement.href="https://edu.goiteens.com/uk/calendar"

linkElement.setAttribute("href", "https://google.com");

// getAttribute дивиться яке значення лежтить в атребуті
const attributeValue = linkElement.getAttribute("href");
console.log(linkElement);
console.log(attributeValue);

const isHrefInLink = linkElement.hasAttribute("alt");
console.log(isHrefInLink);

const atttibutes = linkElement.attributes;
console.log(atttibutes);

const deleteAttr = linkElement.removeAttribute("href");
console.log(deleteAttr);

// data-атребутами позначають елемент що на ньому є JS

const openBtn = document.querySelector("[data-open]");
console.log(openBtn.dataset.open);

const sendBtn = document.querySelector("[data-send]");

// Створити та додати колекцію кнопок з динамічними даними з масиву об’єктів. 
// використати метод createElement

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];


// const boxElement = document.querySelector(".color-picker")
// colorPickerOptions.forEach(({label, color}) => {
// const btnElement = document.createElement("button");
// boxElement.prepend(btnElement);
// btnElement.style.color = color;
// btnElement.textContent = label
// })

// Переписати задачу 1 за допомогою методу innerHTML або insertAdjacentHTML
// const boxElement = document.querySelector(".color-picker")
// colorPickerOptions.forEach(({label, color}) => {
// boxElement.insertAdjacentHTML(
//     "beforeend",
//     `<button type="button" class="btn">${label}</button>`
// )
// })
// const allBtn = document.querySelectorAll(".btn")













