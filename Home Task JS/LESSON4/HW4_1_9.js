let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 4-1-9 - start

// ----------------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// document.write(`${taskX} 4_9 (- створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
//                 та виводить їх в документ. Для кожного об'єкту окремий блок.) ---`);
const users = [
    {id: 111, name: 'vasya', age: 31},
    {id: 112, name: 'petya', age: 30},
    {id: 113, name: 'kolya', age: 29},
    {id: 114, name: 'olya', age: 28},
    {id: 115, name: 'max', age: 30},
    {id: 116, name: 'anya', age: 31},
    {id: 117, name: 'oleg', age: 28},
    {id: 118, name: 'andrey', age: 29},
    {id: 119, name: 'masha', age: 30},
    {id: 120, name: 'olya', age: 31},
    {id: 121, name: 'max', age: 31}
];

function userId(users) {
    for (const user of users) {
        document.write(`<div class=userInfo>`);
        for (const userKey in user) {
            document.write(`<p>${userKey}: ${user[userKey]}</p>`);
        }
        document.write(`</div>`)
    }
}

userId(users);
// document.write(separator);


// ----------------
// console.log(separator);
// TASK 4-1 - end

