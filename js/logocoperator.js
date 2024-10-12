console.dir(Boolean);

console.log(Boolean(0))
console.log(Boolean(1))
const message = "Цей рядок не можна привести до числа";
console.log(Boolean(message));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

// логічний оператор i and &&
// запинається на неправді, вертає те на чому запнулось або останній операнд

console.log(5 && "hello" && "50");
console.log(1 && 0 && "hi");
console.log("" && 12 && undefined);
console.log("Mykola" && 18 && null && 2);

// логічне "не" оператор "!"

console.log(!0);
console.log(!12);
console.log(!null);
console.log(!undefined);
console.log(!"");
console.log(!" ");

// Логічний оператор "або" запинається на правді чи останній операнд

console.log(5 || 6);
console.log(1 || 9);
console.log(0 || 2);
console.log("null" || undefined || "");
console.log(null || undefined || 0 );

console.log("55" && 0 || 2);
console.log(2 || 0 && 55);
console.log(undefined || null && " ");
console.log(!52 && false && " " || undefined && !null && 1);

// напиши скрипт входження числа у відрізок зазначений 
// в х1 та х2.
// до х1
// після х1
// від х1 до х2
// до х1 або після х2

const x1 = 10;
const x2 = 30;
const number = 45;
console.log(x1 > number);
console.log(x1 < number);
console.log(x1 < number && number < x2);
console.log(x1 > number || number > x2);

// Напиши скрипт який перевіряє можливість відкрити чат з користувачем. Для цього користувач має бути:
// другом
// онлайн
// без режиму не турбувати

const isOnline = false;
const isFriend = true;
const isDnd = false;
console.log(`Чи ми можем розпочати чат з користувачем ${isOnline && isFriend && !isDnd}`)



































































