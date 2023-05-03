let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 2-1 - start
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте скрипт при a, що дорівнює 1, 0, -3
console.log(`${taskX} 2_1 ---`);

let x = +prompt('TASK 2-1. Введіть число: ');

console.log('Введене число: ', x);
if (x === 0) {
    console.log('Невірно')
} else {
    console.log('Вірно')
}

console.log(separator);
// TASK 2-1 - end

// TASK 2-2 - start
// - Дано змінну time яка рівна числу від 0 до 59.
//     Потрібно написати код, який перевірить, до якої четверті години попадає число
//     (в першу, другу, третю или четверту частину години).
console.log(`${taskX} 2_2 ---`);

let time = +prompt('TASK 2-2. Введіть число від 0 до 59: ');
console.log('Введене число: ', time);

if (time >= 0 && time < 16) {
    console.log('Введене число попадає до першої чверті години.')
} else if (time > 15 && time < 31) {
    console.log('Введене число попадає до другої чверті години.')
} else if (time > 30 && time < 46) {
    console.log('Введене число попадає до третьої чверті години.')
} else if (time > 45 && time < 60) {
    console.log('Введене число попадає до червертої чверті години.')
} else {
    console.log('Ви ввели невірне число!')
}

console.log(separator);
// TASK 2-2 - end

// TASK 2-3 - start
// - У змінній day дано якесь число від 1 до 31.
//     Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
console.log(`${taskX} 2_3 ---`);

let day = +prompt('TASK 2-3. Введіть число від 1 до 31: ');
console.log('Введене число: ', day);

if (Math.trunc(day / 11) === 0) {
    console.log('Введене число потрапляє до першої декади місяця.')
} else if (Math.trunc(day / 11) === 1) {
    console.log('Введене число потрапляє до другої декади місяця.')
} else if (Math.trunc(day / 11) === 2 || day === 31) {
    console.log('Введене число потрапляє до третьої декади місяця.')
} else {
    console.log('Ви ввели невірне число!')
}

console.log(separator);
// TASK 2-3 - end

// TASK 2-4 - start
// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
console.log(`${taskX} 2_4 ---`);

let dayWeek = +prompt('TASK 2-4. Input day of the week (1-7): ');
switch (dayWeek) {
    case 1: {
        console.log('Monday')
    }
        break;
    case 2: {
        console.log('Tuesday')
    }
        break;
    case 3: {
        console.log('Wednesday')
    }
        break;
    case 4: {
        console.log('Thursday')
    }
        break;
    case 5: {
        console.log('Friday')
    }
        break;
    case 6: {
        console.log('Saturday')
    }
        break;
    case 7: {
        console.log('Sunday')
    }
        break;
    default:
    {
        console.log('There is no such day of the week !!!');
        console.log('Enter a number from 1 to 7 ! ');
    }

}

console.log(separator);
// TASK 2-4 - end

// TASK 2-5 - start
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
console.log(`${taskX} 2_5 ---`);

let a = +prompt('TASK 2-5. Введіть перше число: ');
let b = +prompt('TASK 2-5. Введіть друге число: ');
console.log('Введені числа: ', a, b);

if (a > b) {
    console.log('Максимальне число: ', a)
} else if (b > a) {
    console.log('Максимальне число: ', b)
} else if (a === b) {
    console.log('Введені числа рівні.')
}
console.log(separator);
// TASK 2-5 - end