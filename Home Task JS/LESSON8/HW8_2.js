let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 8-2 - start

// ----------------
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

function popelushka(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize
}

let arrPopelushkas = [
    new popelushka('olga', 18, 32),
    new popelushka('anya', 21, 33),
    new popelushka('olga', 30, 39),
    new popelushka('maxis', 16, 25),
    new popelushka('anyany', 24, 28),
    new popelushka('olena', 40, 40),
    new popelushka('andreina', 25, 33),
    new popelushka('masha', 27, 25),
    new popelushka('nadia', 18, 35),
    new popelushka('valia', 37, 37)
]

class prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }

    findPopelushka(arrPopelushkas) {
        return arrPopelushkas.filter(value => value.footSize === this.shoe)
    }
}

console.log(arrPopelushkas);
let prince1 = new prince('Vasia', 35, 28);
console.log('Prince: ', prince1);
console.log(prince1.findPopelushka(arrPopelushkas));
console.log(separator);

// только с callback функцией
// array.find( function( currentValue, index, arr ) );
// с использованием объекта, на который может ссылаться ключевое слово this
// array.find( function( currentValue, index, arr ), thisValue );

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(arrPopelushkas.find(value => value.footSize === prince1.shoe))
// ----------------
// document.write(separator);
// console.log(separator);
// TASK 8-2 - end

