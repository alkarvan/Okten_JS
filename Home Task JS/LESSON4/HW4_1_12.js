let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 4-12 - start

// ----------------
// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах.
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
document.write(`${taskX} 4-12 <br>(створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах<br>`);
const arrOfElements = [12, 4, 67, 76, 33, 22, 11, 9];
document.write(`Array of elements: [${arrOfElements}]`);

function swap(arrOfElements, index1, index2) {
    let newArr = [];

    for (let i = 0; i < arrOfElements.length; i++) {
        newArr[i] = arrOfElements[i];
    }

    newArr[index1] = arrOfElements[index2];
    if (index2 > arrOfElements.length - 1) {
        return document.write(`<br>Index2 outside the array !!!`)
    } else {
        newArr[index2] = arrOfElements[index1]
    }

    return document.write(`<br>Array of NEW elements: [${newArr}]`);
}

let index1 = +prompt('Input index1:','0');
let index2 = +prompt('Input index2:','0');

document.write(`<br>Array elements with index1=${index1} and index2=${index2} will be changed.`);

if (index1 !== index1 || index2 !== index2 || index1<0 || index2<0){
    document.write('<br>The index must be a positive number only !!!')
} else {swap(arrOfElements, index1, index2)}



// document.write(separator);

// ----------------
// console.log(separator);
// TASK 4-12 - end

