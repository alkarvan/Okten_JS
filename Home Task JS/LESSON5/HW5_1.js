let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 5-1 - start
// ----------------
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log(`task 5_1 -створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б)`);
let areaRectangle = (a, b) => a * b;
console.log(`Area of a rectangle: `, areaRectangle(10, 20));
console.log(separator);

// ----------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log(`taskX 5_2 - створити функцію яка обчислює та повертає площу кола з радіусом r)`);
let areaCircle = r => Math.PI * Math.pow(r, 2);

console.log(`The area of a circle: `, areaCircle(5));
console.log(separator);

// ----------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S=2пr (r+h)
console.log(`taskX 5_3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r)`);

let areaСylinder = (r, h) => 2 * Math.PI * r * (r + h);

console.log(`The area of a cylinder: `, areaСylinder(7, 10));
console.log(separator);

// ----------------
// - створити функцію яка приймає масив та виводить кожен його елемент
console.log(`taskX 5_4 - створити функцію яка приймає масив та виводить кожен його елемент)`);
const arrElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Array of elements:`,  arrElements);

let consoleArr = arrElements => {
    for (const arrElement of arrElements) {
        console.log(arrElement);
    }
}

consoleArr(arrElements);
console.log(separator);

// ----------------
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write(`taskX 5_5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент)<br>`);
let createTag = (text, tag) => document.write(`<${tag}>${text}</${tag}>`);
createTag('Paragraph 1', 'h1');
createTag('Paragraph 2', 'p');
createTag('Paragraph 3', 'h2');
document.write(`<br>${separator}<br>`);

// ----------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`<br>${taskX} 5_6 <br>(- створити функцію яка створює ul з трьома елементами li. <br>Текст li задати через аргумент всім однаковий) ---<br>`);
document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        createTag('Some text for LI', 'li');
    }
document.write(`</ul>`);
document.write(`<br>${separator}<br>`);

// ----------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`<br>${taskX} 5_7 <br>(- створити функцію яка створює ul з трьома елементами li. <br>Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)) ---<br>`);

let createUlwithNli = (textLi, tag, nLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < nLi; i++) {
        createTag(textLi, tag);
    }
    document.write(`</ul>`);
}
createUlwithNli('Some text for LI with N li', 'li', 12);
document.write(`<br>${separator}<br>`);

// ----------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write(`<br>${taskX} 5_8 <br>(- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список)<br>`);
arr1 = [1, 2, 3, 4, true, 'text1', 5, 6, false, 'text2', 7, true];
    for (const arr1Element of arr1) {
        createUlwithNli(arr1Element, 'li', 1);
    }
document.write(`<br>${separator}<br>`);

// ----------------
// - створити функцію яка повертає найменьше число з масиву
document.write(`${taskX} 5_10 <br>(- створити функцію яка повертає найменьше число з масиву) ---<br>`);
const arrMin = [1, 15, 0, -4, 25, 66, -7, 18, 92];
document.write(`Array of elements: [${arrMin}]<br>`);

let minNumberOfArr = arrMin => {
    let minNumber = arrMin[0];
    for (const arrMinElement of arrMin) {
        if (minNumber > arrMinElement) {
            minNumber = arrMinElement;
        }
    }
    return minNumber;
}

document.write('Element with minimum value: ', minNumberOfArr(arrMin));
document.write(`<br>${separator}<br>`);

// ----------------
// - - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
document.write(`${taskX} 5_11 <br>(- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.) ---<br>`);
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sumArr = arr => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

document.write(`Sum of array elements [${arr2}] : ${sumArr(arr2)}`);
document.write(`<br>${separator}<br>`);

// ----------------
// console.log(separator);
// TASK 5-1 - end

