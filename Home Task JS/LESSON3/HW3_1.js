// let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 3-1 - start
// console.log(`${taskX} 3_1 ---`);

let arrDiv = ['01. HTML/CSS', '02. JAVASCRIPT', '03. MYSQL', '04. MONGODB', '05. GIT', '06. REACT', '07. TYPESCRIPT', '08. ANGULAR*', '09. JAVA CORE', '10. JAVA ADVANCED']

// Task 3_1_1
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (const string of arrDiv) {
    document.write('<div>' + string + '<br>' + '</div>')
}
document.write(separator);

// Task 3_1_2
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < arrDiv.length; i++) {
    document.write('<div>' + i + ' *- ' + arrDiv[i] + '<br>' + '</div>')
}
document.write(separator);

// Task 3_1_3
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

//+++ Збільшемо масив в два рази та інвертуємо додані елементи
for (let i = arrDiv.length - 1; i >= 0; i--) {
    arrDiv[arrDiv.length] = arrDiv[i];
}
//---

let i1 = 0;
do {
    document.write('<h1>' + arrDiv[i1] + '</h1>');
    i1++;
}
while (i1 < arrDiv.length)
document.write(separator);

// Task 3_1_4
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i2 = 0;
while (i2 < arrDiv.length) {
    document.write('<h1>' + i2 + ' *- ' + arrDiv[i2] + '</h1>');
    i2++;
}
document.write(separator);

// console.log(separator);
// TASK 3-1 - end

