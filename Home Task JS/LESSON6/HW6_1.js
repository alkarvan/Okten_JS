let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 6-1 - start

// ----------------
// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
console.log(str1, ' - length: ', str1.length);
let str2 = 'lorem ipsum';
console.log(str2, ' - length: ', str1.length);
let str3 = 'javascript is cool';
console.log(str3, ' - length: ', str1.length);
console.log(separator);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1, ' - toUpperCase: ', str1.toUpperCase());
str1 = str1.toUpperCase();
console.log(str2, ' - toUpperCase: ', str2.toUpperCase());
str2 = str2.toUpperCase()
console.log(str3, ' - toUpperCase: ', str3.toUpperCase());
str3 = str3.toUpperCase()
console.log(separator);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(str1, ' - toLowerCase: ', str1.toLowerCase());
console.log(str2, ' - toLowerCase: ', str2.toLowerCase());
console.log(str3, ' - toLowerCase: ', str3.toLowerCase());
console.log(separator);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str, ' - remove spaces: ', str.replaceAll(' ', ''));
console.log(str.trim());
console.log(separator);

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//      let str = 'Ревуть воли як ясла повні';
//      let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strInput = 'Ревуть воли як ясла повні';
let stringToArray = (strInput) => {
    return strInput.split(' ')
};
console.log(strInput);
console.log(stringToArray(strInput));
console.log(separator);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// arr1.forEach(element => console.log(element))
console.log(arr1);
let arrOut = arr1.map(value => String(value));
console.log(arrOut);
console.log(separator);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//  або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
// nums.sort((a,b) => {
//     return a -b;
// })

console.log('Input array: ', nums)
let sortNums = (nums, direction) => {
    switch (direction) {
        case 'ascending':
            nums.sort((a, b) => {
                return a - b;
            })
            break;
        case 'descending':
            nums.sort((a, b) => {
                return b - a;
            })
            break;
    }
}
sortNums(nums, 'ascending');
console.log('Ascending array: ', nums);
sortNums(nums, 'descending');
console.log('Descending array: ', nums);
console.log(separator);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration - b.monthDuration
})
console.log(coursesAndDurationArray)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArr = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(filterArr)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log('--- посилання на обєкт, тому не виводимо');
//за посиланням на той же об'єкт [coursesAndDurationArray]
// let addIdArrOldObject = coursesAndDurationArray.map((value, index) => {
//     value.id = index;
//     return value;
// })
// console.log(addIdArrOldObject)
console.log('--- новий обєкт');
// об'єкт [coursesAndDurationArray] не змінюється, а створюється Новий об'єкт newObj
let addIdArrNewObject = coursesAndDurationArray.map((value, index) => {
    let newObj = {...value};
    newObj.id = index;
    return newObj;
})
console.log(addIdArrNewObject)
// ----------------
// document.write(separator);
// console.log(separator);
// TASK 6-1 - end

