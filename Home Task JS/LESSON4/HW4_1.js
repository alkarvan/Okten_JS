let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 4-1 - start
// ----------------
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log(`${taskX} 4_1 (-створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б) ---`);
const a = 10;
const b = 20;

function areaRectangle(a, b) {
    return a * b;
}

console.log(`Area of a rectangle with sides a=${a} and b=${b} : `, areaRectangle(a, b));
console.log(separator);

// ----------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log(`${taskX} 4_2 (- створити функцію яка обчислює та повертає площу кола з радіусом r) ---`);
let r = 10;

function areaCircle(r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(`The area of a circle with a radius r=${r}: `, areaCircle(r));
console.log(separator);

// ----------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S=2пr (r+h)
console.log(`${taskX} 4_3 (- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r) ---`);
const h = 10;
r = 7;

function areaOfСylinder(r, h) {
    return 2 * Math.PI * r * (r + h);
}

console.log(`The area of a cylinder with a radius of r=${r} and a height of h=${h} : `, areaOfСylinder(r, h));
console.log(separator);

// ----------------
// - створити функцію яка приймає масив та виводить кожен його елемент
console.log(`${taskX} 4_4 (- створити функцію яка приймає масив та виводить кожен його елемент) ---`);
const arrElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Array of elements: ', arrElements);

function consoleArr(arrElements) {
    for (const arrElement of arrElements) {
        console.log(arrElement);
    }
}

consoleArr(arrElements);
console.log(separator);

// ----------------
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write(`${taskX} 4_5 (- створити функцію яка створює параграф з текстом. Текст задати через аргумент) ---`);
const text = 'Paragraph 1';
const tag = 'p';

function createTag(text, tag) {
    document.write(`<${tag}>${text}</${tag}>`)
}

createTag(text, tag);
createTag('Paragraph 2', tag);
createTag('Paragraph 3', 'h2');
document.write(separator);

// ----------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`<br>${taskX} 4_6 (- створити функцію яка створює ul з трьома елементами li. <br>Текст li задати через аргумент всім однаковий) ---`);
let textLi = 'Some text for LI';

function createUl(textLi, tag) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        createTag(textLi, tag);
    }
    document.write(`</ul>`);
}

createUl(textLi, 'li');
document.write(separator);

// ----------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`<br>${taskX} 4_7 (- створити функцію яка створює ul з трьома елементами li. <br>Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)) ---`);
textLi = 'Some text for LI with N li';

function createUlwithNli(textLi, tag, nLi) {
    document.write(`<ul>`);
    for (let i = 0; i < nLi; i++) {
        createTag(textLi, tag);
    }
    document.write(`</ul>`);
}

createUlwithNli(textLi, 'li', 12);
document.write(separator);

// ----------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write(`<br>${taskX} 4_8 (- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список)`);
arr1 = [1, 2, 3, 4, true, 'text1', 5, 6, false, 'text2', 7, true];

function createArrLi(arr1, tag, nLi) {
    // createUlwithNli(textLi, 'li', 12);
    for (const arr1Element of arr1) {
        createUlwithNli(arr1Element, tag, nLi);
        // createUl(arr1Element, tag);
    }
}

createArrLi(arr1, 'li', 1);
document.write(separator);

// ----------------
// - створити функцію яка повертає найменьше число з масиву
console.log(`${taskX} 4_10 (- створити функцію яка повертає найменьше число з масиву) ---`);
const arrMin = [1, 15, 0, -4, 25, 66, -7, 18, 92];
console.log('Array of elements: ', arrMin);

function minNumberOfArr(arrMin) {
    let minNumber = arrMin[0];
    for (const arrMinElement of arrMin) {
        if (minNumber > arrMinElement) {
            minNumber = arrMinElement;
        }
    }
    return minNumber;
}

console.log('Element with minimum value: ', minNumberOfArr(arrMin));
console.log(separator);

// ----------------
// - - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
console.log(`${taskX} 4_11 (- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.) ---`);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumArr(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum = sum + arrElement;
    }
    return sum;
}

console.log(`Sum of array elements [${arr}] : `, sumArr(arr));
console.log(separator);

// ----------------
// console.log(separator);
// TASK 4-1 - end

