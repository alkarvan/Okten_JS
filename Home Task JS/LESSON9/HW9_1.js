let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 8-1 - start

// ----------------
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function user(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

let users = [
    new user(11, 'vasyl', 'saveto', 'vasyl1@gmail.com', 380671234561),
    new user(2, 'kolya', 'vetcov', 'kolya2@gmail.com', 380671234562),
    new user(35, 'olga', 'petrova', 'olga3@gmail.com', 380671234563),
    new user(42, 'max', 'maksimov', 'max4@gmail.com', 380671234564),
    new user(50, 'anya', 'gulko', 'anya5@gmail.com', 380671234565),
    new user(674, 'oleg', 'prosvirov', 'oleg6@gmail.com', 380671234566),
    new user(75, 'andrey', 'nych', 'andrey7@gmail.com', 380671234567),
    new user(81, 'masha', 'oleksandrova', 'masha8@gmail.com', 380671234568),
    new user(9, 'dmytro', 'melnyk', 'dmytro9@gmail.com', 380671234569),
    new user(103, 'vadym', 'borysov', 'vadym10@gmail.com', 380671234570)
]
console.log(users);
console.log(separator);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = users.filter(value => value.id % 2 == 0)
console.log(filterUsers);
console.log(separator);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsers = users.sort((a, b) => {
    return a.id - b.id
})
console.log(sortUsers);
console.log(separator);

// - створити класс для об'єктів Client з полями id, name, surname, email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
console.log('----- Class ------ ');
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrayClients = [
    new Client(11, 'vasyl', 'saveto', 'vasyl1@gmail.com', 380671234561,
        ['banana', 'cookouts', 'lemon', 'apple', 'strawberry', 'nuts']),
    new Client(2, 'kolya', 'vetcov', 'kolya2@gmail.com', 380671234562,
        ['banana', 'lemon', 'strawberry']),
    new Client(35, 'olga', 'petrova', 'olga3@gmail.com', 380671234563,
        ['cookouts', 'apple', 'nuts']),
    new Client(42, 'max', 'maksimov', 'max4@gmail.com', 380671234564,
        ['lemon', 'apple', 'strawberry', 'nuts']),
    new Client(50, 'anya', 'gulko', 'anya5@gmail.com', 380671234565,
        ['banana', 'nuts']),
    new Client(674, 'oleg', 'prosvirov', 'oleg6@gmail.com', 380671234566,
        ['cookouts', 'lemon', 'nuts']),
    new Client(75, 'andrey', 'nych', 'andrey7@gmail.com', 380671234567,
        ['cookouts', 'apple', 'strawberry', 'nuts']),
    new Client(81, 'masha', 'oleksandrova', 'masha8@gmail.com', 380671234568,
        ['banana', 'cookouts', 'strawberry', 'nuts']),
    new Client(9, 'dmytro', 'melnyk', 'dmytro9@gmail.com', 380671234569,
        ['banana', 'cookouts', 'lemon', 'nuts']),
    new Client(103, 'vadym', 'borysov', 'vadym10@gmail.com', 380671234570,
        ['banana', 'cookouts', 'lemon', 'apple', 'nuts'])
];

console.log(arrayClients);
console.log(separator);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let copyArr = JSON.stringify(arrayClients);
let cloneArr = JSON.parse(copyArr);
let sortClients = cloneArr.sort((a, b) => {
    return a.order.length - b.order.length
})
console.log(sortClients);
console.log(separator);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//      максимальна швидкість, об'єм двигуна.
//      додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function car(model, carManufacturer, graduationYear, maximumSpeed, engineCapacity) {
    this.model = model;
    this.carManufacturer = carManufacturer;
    this.graduationYear = graduationYear;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    }
    this.info = function () {
        console.log(`model - ${this.model}`);
        console.log(`carManufacturer - ${this.carManufacturer}`);
        console.log(`graduationYear - ${this.graduationYear}`);
        console.log(`maximumSpeed - ${this.maximumSpeed}`);
        console.log(`engineCapacity - ${this.engineCapacity}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(`їдемо з новою швидкістю ${this.maximumSpeed + newSpeed} на годину`)
    }
    this.changeYear = function (newValue) {
        this.graduationYear = newValue;
        console.log(`Змінено рік виробництва - ${this.graduationYear}`)
    }
    this.addDriver = function (driver) {
        this.driver = {...driver};
    }
}

let testCar = new car('Camry', 'Toyota Corporation', 1999, 220, 2.2)
console.log(testCar);
testCar.drive();
testCar.info();
testCar.increaseMaxSpeed(30);
testCar.changeYear(2001);
testCar.addDriver({name: 'Petro', surname: 'Smirnov', age: 31, drivingExperience: 8});
console.log('With driver: ', testCar);
console.log(separator);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('- Те саме, тільки через клас');

class classCar {
    constructor(model, carManufacturer, graduationYear, maximumSpeed, engineCapacity) {
        this.model = model;
        this.carManufacturer = carManufacturer;
        this.graduationYear = graduationYear;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    }

    info() {
        console.log(`model - ${this.model}`);
        console.log(`carManufacturer - ${this.carManufacturer}`);
        console.log(`graduationYear - ${this.graduationYear}`);
        console.log(`maximumSpeed - ${this.maximumSpeed}`);
        console.log(`engineCapacity - ${this.engineCapacity}`);
    }

    increaseMaxSpeed(newSpeed) {
        console.log(`їдемо з новою швидкістю ${this.maximumSpeed + newSpeed} на годину`)
    }

    changeYear(newValue) {
        this.graduationYear = newValue;
        console.log(`Змінено рік виробництва - ${this.graduationYear}`)
    }

    addDriver(driver) {
        this.driver = {...driver};
    }
}

let testClassCar = new classCar('Golf', 'Volkswagen Corporation', 2015, 240, 1.8)
console.log(testClassCar);
testClassCar.drive();
testClassCar.info();
testClassCar.increaseMaxSpeed(20);
testClassCar.changeYear(2018);
testClassCar.addDriver({name: 'Alex', surname: 'Velor', drivingExperience: 28});
console.log('With driver: ', testClassCar);

console.log(separator);


// ----------------
// document.write(separator);
// console.log(separator);
// TASK 8-1 - end

