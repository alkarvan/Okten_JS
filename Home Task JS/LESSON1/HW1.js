let taskX ='--- TASK';
let separator= '-------------------------';

// TASK 1 - start
// -Створити змінні.
// Присвоїти кожному з них значення:
// 'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

console.log(`${taskX} 1 ---`);

let str1='hello';
let str2='owu';
let str3='com';
let str4='ua';

console.log(str1);
console.log(`${str2}.${str3}.${str4}`);

let a1 = 1;
let a2 = 10;
let a3 = -999;
let a4 = 123;
let a5 = 3.14;
let a6 = 2.7;
let a7 = 16;
let bl1 = true;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(bl1);
console.log(!bl1);

console.log(separator);
// TASK 1 - end

// TASK 2 - start
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
console.log(`${taskX} 2 ---`);

let firstName = 'Oleksandr';
let middleName = 'Yosypovych';
let lastName = 'Karvan';
let person;

person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

console.log(separator);
// TASK 2 - end

// TASK 3 - start
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
console.log(`${taskX} 3 ---`);

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log(separator);
// TASK 3 - end
