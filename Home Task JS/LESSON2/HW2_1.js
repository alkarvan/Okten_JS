let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 1-1 - start
// - Створити масив, наповнити його 10 елементами будь-якого типу,
//   вивести кожен елемент в консоль
console.log(`${taskX} 1_1 ---`);

let arr1 = [10, 12, -3, 3.14, 'test', 'yes', true, false, [1, 2, 3], {name1: 'Petro', age1: 21}];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log(separator);
// TASK 1-1 - end

// TASK 1-2 - start
// - Створити 3 об'єкти які описують книги.
//   Поля об'єкту : title ,pageCount, genre.
console.log(`${taskX} 1_2 ---`);

let arr2 = [
    {title: 'film about space', pageCount: 100, genre: 'fantastic'},
    {title: 'love story', pageCount: 100, genre: 'drama'},
    {title: 'deadly weapon', pageCount: 100, genre: 'activity'},
];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
console.log(separator);
// TASK 1-2 - end

// TASK 1-3 - start
// - Створити 3 об'єкти які описують книги.
//     Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - являється  масивом. Кожен автор має поля name та age
console.log(`${taskX} 1_3 ---`);

let arr3 = [
    {title: 'film about space', pageCount: 100, genre: 'fantastic', author:[{name:'Pavel S.'}, {age:56}]},
    {title: 'love story', pageCount: 225, genre: 'drama', author:[{name:'Emma L.'},{age:34}]},
    {title: 'deadly weapon', pageCount: 94, genre: 'activity', author:[{name:'Jim'},{age:45}]},
];

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
console.log(separator);
// TASK 1-3 - end

// TASK 1-4 - start
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
//   Поля: name, username,password. Вивести в консоль пароль кожного користувача
console.log(`${taskX} 1_4 ---`);

let arr4 = [
    {name: 'Alex',username: 'alex3', password:'s123456'},
    {name: 'Elena',username: 'len7', password:'321l'},
    {name: 'Vasil',username: '6vas', password:'951357'},
    {name: 'Mery',username: 'mmm8', password:'123'},
    {name: 'Garry',username: 'gar78', password:'7hd1'},
    {name: 'Bob',username: 'bob78', password:'78592s'},
    {name: 'Jim',username: 'jim9', password:'small1'},
    {name: 'Sofi',username: 'sofi', password:'big4'},
    {name: 'Bobby',username: 'bob777', password:'ley78'},
    {name: 'Pit',username: 'pit2', password:'123+45'}
];

for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i].password);
}
console.log(separator);
// TASK 1-4 - end