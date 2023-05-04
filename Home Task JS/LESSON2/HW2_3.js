let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 3-1 - start
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
console.log(`${taskX} 3_1 ---`);

// let x = prompt('TASK 3-1. Введіть якесь значення: ');
// Значення, які повертають false
// (x === false || x === NaN || x === null || x === undefined || x === 0 || x === '')

let x;

if (x === false || x === NaN || x === null || x === undefined || x === 0 || x === '') {
    console.log('default')
}

console.log(separator);
// TASK 3-1 - end

