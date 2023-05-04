let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 3-1 - start
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
console.log(`${taskX} 3_1 ---`);

// let x = prompt('TASK 3-1. Введіть якесь значення: ');
// let x='';
// let x=null;
//  let x=true;
// let x="Undefined";

let x = NaN
x = x || "default"
console.log(x)

console.log('Введене число: ', x, ' - (тип введенного значення - ', typeof x);
// console.log('default', !!x)
// if (!!x === false){
//     console.log('default', !!x)
//     // x = "default"
// }

// if (typeof x === false) {
//     console.log('default')
// } else {
//     console.log('Тип введенного значення - ', typeof x)
// }

console.log(separator);
// TASK 3-1 - end

